import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

//display the message under the navbar ontop of the input

//inside is another message component to strusture each message ie user message and respondent message

const Messages = ({ messages, name }) => (
	<ScrollToBottom className="messages p-2">
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
