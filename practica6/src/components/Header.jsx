import React from 'react';
import '../App.css';
import Avatar from "./Avatar.jsx"; // Update the import statement

function Header(props) {
  return (
    <>
      <Avatar username = {props.username} />
      
    </>
  );
}

export default Header;

