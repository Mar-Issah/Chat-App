import React from "react";
import { Form, Button } from "react-bootstrap";
import { Send } from "react-feather";

//this is where the user types the nessage
//destructure the prop from the chat parent component
//of the user clicks on the button/submit the form call the send message fxn

const MessageInput = ({ setMessage, sendMessage, message }) => (
	<div className="input-form">
		<Form className="message-input">
			<Form.Group>
				<Form.Control
					className="message-form-control"
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={({ target: { value } }) => setMessage(value)}
					onKeyPress={(event) =>
						event.key === "Enter" ? sendMessage(event) : null
					}
				/>
			</Form.Group>
			<Button className="sendButton" onClick={(e) => sendMessage(e)}>
				<Send />
			</Button>
		</Form>
	</div>
);

export default MessageInput;
