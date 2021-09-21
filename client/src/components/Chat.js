import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

//we will use the query string to extract our query fron the url

//location comes from react router and is used to represent where the app is now, where you want it to go, or even where it was. dsetructure it to use it, console.log(location.search) will give us: ?name=name&room=room and the data after it has been parse/extracted will give us: {name: 'name', room: 'room'}

//we will need the name an room here as well so add the states

//we realize that we get multiple renders. to prevent that we add dependency list to use effect so that it runs only if the endpoint/location.search changes

//socket.emit sends/broadcast the message to anyone/backend. You can call it whatever apert from join and add a payload which is the desstructured name and room

//socket.emit("join", { name, room }, ({ error }) => {alert(error)}); destructure the cb and do something to it

//we now have to implement our cleanup which will emit the disconnect and turn the socket off for the user

//MESSAGE
//lets create a new use effect for the messages and also states
//on message from the server, add the message to the array and only render if the message changes

//emit the sendMessage which goes to backend callback clear the string

//CHILDREN COMPONENT
//create child component and pass in props to be used in the component
let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const ENDPOINT = "localhost:5000";

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit("join", { name, room }, () => {});

		console.log(socket);

		return () => {
			//socket.emit("disconnect");

			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	console.log(message, messages);
	return (
		<div>
			<div className="chat-container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />s
				<MessageInput
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
