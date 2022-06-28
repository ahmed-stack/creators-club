import styled from "styled-components";

// Local Imports
import { textColor } from "styles/globals";

export const HeaderContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  h1 {
    color: ${textColor};
    font-size: 28px;
  }
  @media (max-width: 900px) {
    height: 25%;
    flex-direction: column;

    h1 {
      margin: 5px;
    }
  }
`;
