import styled from "styled-components";

// Local Imports
import { detailCardBgColor, tagBgColor, textColor } from "styles/globals";

export const DetailWrapper = styled.div`
  width: 100%;
  height: 90%;
  color: ${textColor};

  overflow-y: auto;
  overflow-x: hidden !important;
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
`;

export const TitleWrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 14px 24px;

  .mod-title {
    font-size: 50px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .mod-subscriber {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const GridWrapper = styled.div`
  height: 80%;

  .grid {
    display: grid;
    height: 100%;
    grid-template-columns: 1.8fr 1.2fr;
    gap: 30px;
    padding: 1em 2em;
    @media (max-width: 1486px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1190px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .detail-card {
      background-color: ${detailCardBgColor};
      padding: 6px 28px;

      h1 {
        font-size: 30px;
        font-wight: 500;
      }

      p {
        font-size: 20px;
      }

      table {
        width: 100%;
        color: #A3A3A3;
        font-size: 18px;
        padding: 10px 0px;
      }

      .key-div {
        width: 30%;
      }

      .value-div {
        width: 70%;
      }

    }
  }
`;

export const TagContainer = styled.div`
    width: 100%;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;

    div {
        padding: 8px 10px;
        margin-bottom: 10px; 
        background-color: ${tagBgColor};
        border-radius: 20px;
        font-weight: 400;
        text-transform: uppercase;
        margin-right: 6px;
        height: fit-content;
    }
`
