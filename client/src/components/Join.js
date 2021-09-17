import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// we basically have a form with two inputs and a button

//since the button is a link it will trigger event when click . we want it to triggr onlu when the name or room is available if it is available return null and go to the path

//we add the name and room to the chat path/url using query string. and can access it in the chat component e.g http://localhost:3000/chat?name=siya&room=2

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className="form-container d-flex justify-content-center">
			<Form className="form m-auto d-flex justify-content-center">
				<div className="auto">
					<h2 className="heading mt-5 text-center">Join The Chat</h2>
					<Form.Group className="form-group mt-3">
						<Form.Control
							type="text"
							placeholder="Enter name"
							onChange={(e) => setName(e.target.value)}
							className="form-control"
							value={name}
							required
						/>
					</Form.Group>
					<Form.Group className="form-group mt-4">
						<Form.Control
							type="text"
							placeholder="Enter room"
							onChange={(e) => setRoom(e.target.value)}
							value={room}
							required
						/>
					</Form.Group>
					<Link
						onClick={(e) => (!name || !room ? e.preventDefault() : null)}
						to={`/chat?name=${name}&room=${room}`}
					>
						<Button type="submit" className="join-btn mt-4 p-2">
							Sign In
						</Button>
					</Link>
				</div>
			</Form>
		</div>
	);
};

export default Join;
