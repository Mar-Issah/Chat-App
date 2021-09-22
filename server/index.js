const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const router = require("./router");

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(router);
app.use(cors());

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const io = socketio(server);
io.on("connection", (socket) => {
	console.log("a new user connected");

	socket.on("join", ({ name, room }, cb) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return cb(error);

		socket.join(user.room);

		// for emit emit 2nd param is a payload to send
		socket.emit("message", {
			user: "admin",
			text: `${user.name}, welcome to room ${user.room}.`,
		});
		socket.broadcast
			.to(user.room)
			.emit("message", { user: "admin", text: `${user.name} has joined!` });

		cb();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });

		callback();
	});
	socket.on("disconnect", () => {
		console.log("user has disconnected");
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit("message", {
				user: "Admin",
				text: `${user.name} has left.`,
			});

			//get users currently in the roon to fill the text container data
			// io.to(user.room).emit("roomData", {
			// 	room: user.room,
			// 	users: getUsersInRoom(user.room),
			// });
		}
	});
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
