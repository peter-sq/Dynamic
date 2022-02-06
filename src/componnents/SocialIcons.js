import { StyledSocialcon } from './styles/SocialIcon.style';
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import React from "react";

export const SocialIcon = () => {
return(
    <StyledSocialcon>
        <li>
            <a href='https//twitter.com'>
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href='https//facebook.com'>
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href='https//linkdin.com'>
                <FaLinkedin />
            </a>
        </li>

    </StyledSocialcon>
)
}