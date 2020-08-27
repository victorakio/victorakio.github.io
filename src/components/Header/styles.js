import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: #004e60;
  display: flex;
  align-items: center;
  padding: 0 8rem;
  justify-content: space-between;

  svg {
    width: 24rem;
  }

  nav {
    ul {
      list-style: none;
      display: flex;

      li {
        &:not(:last-child) {
          margin-right: 2rem;
        }
        
        a {
          font-size: 2rem;
          color: #fff;
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
  }
`;