import React from "react";
import { Link } from "react-router-dom";
import { UserCheck, X } from "react-feather";
import { Navbar, Nav } from "react-bootstrap";

const InfoBar = ({ room }) => (
	<div className="infobar-container">
		<div className="icons-container">
			<UserCheck size="30" color="green" />
			<h4>{room}</h4>
			<Nav.Link href="#pricing">
				<X color="red" size="30" />
			</Nav.Link>
		</div>
	</div>
);

export default InfoBar;
// {
// 	/* <div className="infoBar">
// 	<div className="leftInnerContainer">
// 		{/* <img className="onlineIcon" src={onlineIcon} alt="online icon" />
// 		{/* <UserCheck color="green"/>
// 		// <h3>{room}</h3>
// 	//</div>
// 	//<div className="rightInnerContainer">
// 		{/* <a href="/"><img src={closeIcon} alt="close icon" /></a>
// 		{/* <Close color="red" />
// //	</div>
// </div> */
// }
