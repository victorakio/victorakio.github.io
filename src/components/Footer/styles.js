import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #004e60;
  height: auto;
  padding: 1rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-bottom: 2rem;

    a:not(:last-child) {
      margin-right: 2rem;
    }

    a {
      .footer-icon:hover {
        fill: #c4c4c4;
      }
    }
  }

  small {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;