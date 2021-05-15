import React from "react";
import {
  HeaderContent,
  HeaderLi,
  HeaderTitle,
  HeaderUl,
  HeaderWrapper,
} from "./styles";

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>Furniture Delivery</HeaderTitle>
        <HeaderUl>
          <HeaderLi>Home</HeaderLi>
          <HeaderLi>About</HeaderLi>
          <HeaderLi>Contact Us</HeaderLi>
        </HeaderUl>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
