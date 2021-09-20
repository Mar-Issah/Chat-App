  
import React from 'react';
import {Link} from  "react-router-dom";
import { UserCheck, Close } from 'react-feather';


const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <UserCheck color="green"/>
      <h3>room</h3>
    </div>
    <div className="rightInnerContainer">
      {/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
      <Close color="red" />
    </div>
  </div>
);

export default InfoBar;