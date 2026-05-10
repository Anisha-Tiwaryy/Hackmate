// socket/socketHandler.js
// Handles all Socket.IO real-time events
// Features: group chat, private chat, admin message deletion

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join a team chat room
    socket.on("join_room", (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined room: ${roomId}`);
    });

    // Send a message to a room
    socket.on("send_message", (data) => {
      // data: { roomId, message, sender, timestamp }
      io.to(data.roomId).emit("receive_message", data);
    });

    // Admin deletes a message
    socket.on("delete_message", (data) => {
      // data: { roomId, messageId }
      io.to(data.roomId).emit("message_deleted", data.messageId);
    });

    // Private message between two users
    socket.on("private_message", (data) => {
      // data: { toSocketId, message, sender }
      io.to(data.toSocketId).emit("receive_private_message", data);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

module.exports = socketHandler;
