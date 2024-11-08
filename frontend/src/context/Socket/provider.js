import React, { useState, useEffect, createContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const socketInstance = io("http://localhost:3000", {
        autoConnect: false,
        auth: { token },
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 2000,
      });

      socketInstance.connect();

      socketInstance.on("connect", () => setSocket(socketInstance));
      socketInstance.on("connect_error", (err) =>
        console.error("Socket error:", err.message)
      );
      socketInstance.on("reconnect", (attempt) =>
        console.log(`Reconnected on attempt ${attempt}`)
      );
      socketInstance.on("disconnect", (reason) => setSocket(null));

      return () => socketInstance.disconnect();
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
