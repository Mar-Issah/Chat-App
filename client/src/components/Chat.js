import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

//location comes from react router and is used to represent where the app is now, where you want it to go, or even where it was. dsetructure it to use it, console.log(location.search) will give us: ?name=name&room=room and the data after it has been parse/extracted will give us: {name: 'name', room: 'room'}

//we will use the query string to extract our query fron the url

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		setName(name);
		setRoom(room);
	});
	return <div>Chat</div>;
};

export default Chat;
