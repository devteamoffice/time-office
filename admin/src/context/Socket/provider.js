import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import SocketContext from "./context";
import { SOCKET_URL } from "../../constants";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const connect = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const sk = io("http://localhost:3000", {
        autoConnect: false,
        auth: { token },
        reconnection: true,
        reconnectionAttempts: 10, // Increased reconnection attempts
        reconnectionDelay: 2000, // Increased delay between reconnections
      });

      sk.connect();

      sk.on("connect", () => {
        console.log("Socket connected");
        setSocket(sk); // Store the socket instance after successful connection
      });

      sk.on("connect_error", (err) => {
        console.error("Socket connection error:", err.message);
      });

      sk.on("reconnect", (attempt) => {
        console.log(`Reconnected successfully after ${attempt} attempts`);
      });

      sk.on("disconnect", (reason) => {
        console.log(`Socket disconnected: ${reason}`);
        setSocket(null); // Clear socket reference after disconnection
      });
    }
  };

  const disconnect = () => {
    if (socket) {
      socket.disconnect();
      console.log("Socket manually disconnected");
      setSocket(null); // Clear socket reference when manually disconnected
    }
  };

  useEffect(() => {
    connect(); // Connect socket on mount

    return () => {
      disconnect(); // Clean up socket on unmount
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <SocketContext.Provider value={{ socket, connect, disconnect }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
