import React, { useState } from "react";
import { HamburgerMenuIcon, HamburgerMenuIconContainer } from "./styles";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <HamburgerMenuIconContainer onClick={toggle}>
        <HamburgerMenuIcon></HamburgerMenuIcon>
        <HamburgerMenuIcon></HamburgerMenuIcon>
        <HamburgerMenuIcon></HamburgerMenuIcon>
      </HamburgerMenuIconContainer>
      {/* {isOpen && (
        <HamburgerMenuOptions>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </HamburgerMenuOptions>
      )} */}
    </>
  );
};

export default HamburgerMenu;
