import styled from "styled-components";
import { textColor } from "styles/globals";

export const GridContainer = styled.div`
  height: 90%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${textColor};
    border-radius: 25px;
  }

  @media (max-width: 900px) {
    height: 75%;
  }
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  padding: 1em 2em;
  @media (max-width: 1486px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1190px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
