import React from "react";
import ReactEmoji from "react-emoji";

//extraect taext and user from message

//we want to sturcture is in such a way that the messages from the sende is on the left snd reciever is on the right

const Message = ({ message: { text, user }, name }) => {
	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}
	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10">{trimmedName}</p>
			<div className="messageBox backgroundBlue">
				<p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox backgroundLight">
				<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
			</div>
			<p className="sentText pl-10 ">{user}</p>
		</div>
	);
};

export default Message;
