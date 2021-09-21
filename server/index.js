const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const router = require("./router");

//require our dev including http which is inbuilt

//create an instance of the express
const app = express();

//create a port to run on either 500 or when deployed it uses the process.env.PORT
const PORT = process.env.PORT || 5000;

//create an instance of the server using http and pass in app to use it fxnality
const server = http.createServer(app);

//use the router as middleware now go to port 5000 on browser and you will see the message
app.use(router);
//app.use(cors());

// the socket io passing in the created server after which we can use it to make/build our app

//now with the io lets implement the connect and disconnect for when the user joins or leaves at the client side...(socket) is the client

//to get the emmited value from client and make use of it we use socket.on after the connection

//there us a third callback/cb fxn we can pass which send message back to the client or can be used to handle errors

//HELPER FUNCTIONS HERE
//lets destrusture the helper function and use it in our app

//the addUser fxn either returns error or user. call it here pass in params and get the returns. if error prin the error in the cb fxn

//well if there are no errors join the user to a room using socket.join(<room>) ie pass in the room. now we can do the fun stuff such as messaging, event handlng etc

//after the user join emit message to the user to welcome the user to the chat and also emit a messgae to only the room that the user has joined using the broadcast

//and the call the cb fxn which will only run if there is an error on the frontend

//we will name the admin generated 'message' and the user generated message 'sendMessage' coming/emitting from the frontend

//withe the sendMessage from the frontend we will get the user and send the message from the server to the room the user is in

//REMOVE USER
//when the user refreshes the page the user is still there but we cannot see it
//in the disconnect remove the user and notify the rest of the user  not admin
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

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
	});
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
