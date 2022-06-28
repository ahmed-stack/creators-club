import styled from "styled-components";

// Local Imports
import { tagBgColor, textColor } from "styles/globals";

export const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 15em;
  cursor: pointer;
  transition: transform 0.3s;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 1px;
  &:hover {
    transform: scale(1.05);
  }

  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;

export const TextWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: ${textColor};
`;

export const TagContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;

    div {
        padding: 8px 10px; 
        background-color: ${tagBgColor};
        border-radius: 20px;
        font-weight: 400;
        text-transform: uppercase;
        margin-right: 6px;
        height: fit-content;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 8px;
    display: flex;
    flex-direction: column;

    .mod-title {
        font-size: 28px;
        font-weight: 500;
    }

    .mod-sibscribers {
        font-size: 18px;
        font-weight: 400;
    }
`;


