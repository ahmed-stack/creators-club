import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: wait;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;