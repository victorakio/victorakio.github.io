import styled from 'styled-components';

import backgroundImage from '../../assets/background.jpg';

export const AboutWrapper = styled.section`
  min-height: calc(100vh - 100px);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 8rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 4rem;
  }

  p {
    width: 90rem;
    line-height: 3.2rem;
    margin-bottom: 6.4rem;
  }

  
  a {
    border: 0.4rem solid #fff;
    padding: 2rem;
    background-color: unset;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: #fff;
      color: #444;
    }
  }
`;
