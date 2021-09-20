import React from "react";
import { Link } from "react-router-dom";
import { UserCheck, X } from "react-feather";

//kinda a navbar on top of the chat

const InfoBar = ({ room }) => (
	<div className="infobar-container">
		<div className="icons-container">
			<UserCheck size="30" color="green" />
			<h4>{room}</h4>
			<Link to="/">
				<X color="red" size="30" className="close" />
			</Link>
		</div>
	</div>
);

export default InfoBar;
