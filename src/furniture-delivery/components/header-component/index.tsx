import React from "react";
import HamburgerMenu from "../../../shared/components/hamburger-menu";
import {
  HeaderContent,
  HeaderLi,
  HeaderTitle,
  HeaderUl,
  HeaderWrapper,
  SiteLogoWrapper,
} from "./styles";
import { ReactComponent as SiteLogo } from "../../../logo.svg";

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HamburgerMenu />
        <SiteLogoWrapper>
          <SiteLogo />
        </SiteLogoWrapper>
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
