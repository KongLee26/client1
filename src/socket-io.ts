import { io } from "socket.io-client";
import { getCookie } from "typescript-cookie";

export const socket = io(process.env.REACT_APP_WS || "", {
  autoConnect: false,
  auth: { token: getCookie("access_token") },
});
