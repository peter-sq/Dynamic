import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";

import { Container } from "./styles/container.styled";
import { Button } from "./styles/Button.style";
import { Flex } from "./styles/Flex.style";




const Header = () => {
    return(
        <StyledHeader>
            <Container>
             <Nav>
             <Logo src='./images/logo.svg' alt='' />
                 <Button>try it free</Button>
             </Nav>
             <Flex>
                 <div>
                     <h1>
                         Build the community your fans will love
                     </h1>
                     <p>typesetting, remaining essentially unchanged. 
                         It was popularised in the 1960s with the release of Letraset sheets containing 
                         Lorem Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <Button bg = '#ff0099' color="#fff">Get Started For Free</Button>
                 </div>
                 <Image src = "https://images.unsplash.com/photo-1643481436451-30f6d77d75a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
             </Flex>
            </Container>
            
        </StyledHeader>
    )

}



export default Header;