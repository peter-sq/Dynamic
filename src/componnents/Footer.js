import React from "react";
import { Container } from "./styles/container.styled";
import { Flex } from "./styles/Flex.style";
import { StyledFooter } from "./styles/Footer.style";
import { SocialIcon } from "./SocialIcons";



const Footer = () => {

return(
    <StyledFooter>
        <Container>
            <img src="./images/logo_white.svg" />
       

        <Flex>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor 
            </li>
            <li>08078312876</li>
            <li>awe.petersq@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcon />
        </Flex>
        <p>&copy; 2022. All Right Reserved</p>
        </Container>

    </StyledFooter>
)

}

export default Footer;