import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

//we will use the query string to extract our query fron the url

//location comes from react router and is used to represent where the app is now, where you want it to go, or even where it was. dsetructure it to use it, console.log(location.search) will give us: ?name=name&room=room and the data after it has been parse/extracted will give us: {name: 'name', room: 'room'}

//we will need the name an room here as well so add the states

//we realize that we get multiple renders. to prevent that we add dependency list to use effect so that it runs only if the endpoint / location.search changes

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const ENDPOINT = "localhost:5000";

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		console.log(socket);
	}, [ENDPOINT, location.search]);
	return <div>Chat</div>;
};

export default Chat;
