import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import SocketContext from "./context";
import { SOCKET_URL } from "../../constants";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const connect = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const sk = io(SOCKET_URL, {
        autoConnect: false, // Initially, don't auto-connect
        auth: { token }, // Send token in authentication payload
        reconnection: true, // Allow automatic reconnection
        reconnectionAttempts: 5, // Set the maximum number of reconnection attempts
        reconnectionDelay: 1000, // Delay between reconnections
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
