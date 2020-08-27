import React from 'react';
import { FaGithubSquare, FaLinkedin, FaCopyright } from 'react-icons/fa';

import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div>
          <a href="https://github.com/victorakio"><FaGithubSquare className="footer-icon" color={'#fff'} size={'4rem'} /></a>
          
          <a href="https://www.linkedin.com/in/victorakio/"><FaLinkedin className="footer-icon" color={'#fff'} size={'4rem'} /></a>
        </div>
        
        <small><FaCopyright color={'#fff'} /> Victor Akio</small>
      </FooterWrapper>
    </>
  );
}

export default Footer;