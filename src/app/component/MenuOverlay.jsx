import React from "react";
import NavLink from "./NavLink";
import '../styles/Header.css';
const MenuOverlay = ({ links }) => {
  
  return (
    <ul className="bg-black menu" style={ {position: 'fixed',
      right: '0',
      top: '0',
      background:' #0e2431',
      height: '100vh',
      maxWidth: '60%',
      width: '100%',
      padding:' 60px 0 0 46px',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.5s ease',}}>
      {links.map((link, index) => (
        <li key={index} style={{listStyle: 'none',
          margin: '10px 8px'}}>
          <NavLink href={link.path} title={link.title} style={{fontSize: '23px',
          display: 'block',
          color: '#fff',
          margin: '10px 0',}}/>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;