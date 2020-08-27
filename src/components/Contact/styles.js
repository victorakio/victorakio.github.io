import styled from 'styled-components';

export const ContactWrapper = styled.section`
  padding: 8rem;
  background-color: #1c65b3;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    margin-bottom: 6.4rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 4rem 5rem;
  border-radius: 2rem;

  label {
    color: #222;
    margin-bottom: 3.2rem;
    display: flex;
    flex-direction: column;
    line-height: 4rem;

    input {
      border: 0.2rem solid #333;
      height: 4rem;
      width: 48rem;
      font-size: 2rem;
      padding: 1rem;
      border-radius: 1rem;
    }

    textarea {
      width: 48rem;
      border-radius: 1rem;
      border: 0.2rem solid #333;
      font-size: 2rem;
      padding: 1rem;
      font-family: Roboto, Arial, sans-serif;
    }
  }

  button {
    width: 48rem;
    height: 4rem;
    border: none;
    background-color: #1c65b3;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 3.2rem;
    border-radius: 0.5rem;
    transition: background-color 0.5s;
    cursor: pointer;

    &:hover {
      background-color: #0f3762;
    }
  }
`;