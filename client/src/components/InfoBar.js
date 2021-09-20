import React from "react";
import { Link } from "react-router-dom";
import { UserCheck, X } from "react-feather";
import { Navbar, Nav, Container } from "react-bootstrap";

const InfoBar = ({ room }) => (
	<div>
		<Navbar className="nav-bar">
			<Container>
				<Nav className="me-auto">
					<UserCheck size="35" color="green" />
					<h3>{room}</h3>
					<Nav.Link href="#pricing">
						<X color="red" size="35" />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
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
