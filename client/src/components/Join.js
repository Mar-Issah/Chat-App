import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className="form-container d-flex justify-content-center">
			<Form className="join-form m-auto d-flex justify-content-center">
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
					<Form.Group className="join-form-group mt-4">
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
