import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import "../styles/ScrollButton.css";
const ScrollButton = () => {
  return (
    <>
      {" "}
      <div className="scroll-button">
        <NavLink href="#home">
          <Image src="../../images/pointing-up.png" width={500} alt=""></Image>
        </NavLink>
      </div>
    </>
  );
};

export default ScrollButton;
