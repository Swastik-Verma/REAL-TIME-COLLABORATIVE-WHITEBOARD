import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

// const socket = io("https://api-whiteboard-az.onrender.com", {
const socket = io(process.env.REACT_APP_API_URL, {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, // Only send if token exists
});

export default socket;
