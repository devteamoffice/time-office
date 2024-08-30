const socketio = require("socket.io");
const jwt = require("jsonwebtoken");
const { ROLES } = require("../constants");
const keys = require("../config/keys");
const User = require("../models/user"); // Importing Sequelize-based User model
const support = require("./support");

const authHandler = async (socket, next) => {
  const { token = null } = socket.handshake.auth;
  if (token) {
    const [authType, tokenValue] = token.trim().split(" ");
    if (authType !== "Bearer" || !tokenValue) {
      return next(new Error("no token"));
    }

    try {
      const { secret } = keys.jwt;
      const payload = jwt.verify(tokenValue, secret);
      const id = payload.id.toString();

      // Fetch user from the database using Sequelize
      const user = await User.findByPk(id);

      if (!user) {
        return next(new Error("no user found"));
      }

      const u = {
        id,
        role: user.role,
        isAdmin: user.role === ROLES.Admin,
        name: `${user.firstName} ${user.lastName}`,
        socketId: socket.id,
        messages: [],
      };

      const existingUser = support.findUserById(id);
      if (!existingUser) {
        support.users.push(u);
      } else {
        existingUser.socketId = socket.id;
      }
    } catch (err) {
      return next(new Error("invalid token"));
    }
  } else {
    return next(new Error("no token"));
  }

  next();
};

const socket = (server) => {
  const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use(authHandler);

  const onConnection = (socket) => {
    support.supportHandler(io, socket);
  };

  io.on("connection", onConnection);
};

module.exports = socket;
