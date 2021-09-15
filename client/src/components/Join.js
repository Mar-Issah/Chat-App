import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

// we basically have a form with two inputs and a button

//since the button is a link it will trigger event when click . we want it to triggr onlu when the name or room is available if it is available return null and go to the path

//we add the name and room to the chat path/url using query string. and can access it in the chat component

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<Container>
			<Form>
				<h1 className="heading">Join</h1>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Enter name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Enter room"
						onChange={(e) => setRoom(e.target.value)}
					/>
				</Form.Group>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<Button type="submit" variant="primary">
						Sign In
					</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default Join;
