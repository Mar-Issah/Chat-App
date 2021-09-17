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
const io = socketio(server);
io.on("connection", (socket) => {
	console.log("a new user connected");
	socket.on("disconnect", () => {
		console.log("user has disconnected");
	});
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
