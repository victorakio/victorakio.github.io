import React from 'react';

import { HeaderWrapper } from './styles'; 
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <>
        <HeaderWrapper>
          <Logo />

          <nav>
            <ul>
              <li><a href="#about">Sobre mim</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#contact-form">Contato</a></li>
            </ul>
          </nav>
        </HeaderWrapper>
    </>
  );
}

export default Header;