import styled from "styled-components";

export const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 12rem;
    height: auto;
  }

  figcaption {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;
