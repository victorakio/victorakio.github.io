import styled from 'styled-components';

export const Title = styled.h1`
  color: #363640;
  padding: 4rem 8rem 0 8rem;
`;

export const PortfolioWrapper = styled.section`
  padding: 8rem;
  display: grid;
  grid-template-columns: 16rem 16rem auto;
  row-gap: 8rem;
  justify-content: space-between;
`;

export const PortfolioItem = styled.a`
  width: 32rem;
  height: 32rem;
  position: relative;
  
  &:hover img {
    opacity: 0.3s;
  }

  &:hover div {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  div {
    background-color: #222;
    color: #fff;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    border-radius: 2rem;

    h2 {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;