const jwt = require("jsonwebtoken");

const checkAuth = async (req) => {
  try {
    if (!req.headers.authorization) {
      return null;
    }
    const token =
      (await jwt.decode(req.headers.authorization(" ")[1])) ||
      req.headers.authorization;

    if (!token) {
      return null;
    }
    return token;
  } catch (err) {
    return null;
  }
};

module.exports = checkAuth;
