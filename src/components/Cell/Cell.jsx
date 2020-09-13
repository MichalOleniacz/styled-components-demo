import React from "react";
import styled, { css } from "styled-components";

const StyledCell = styled.div`
  ${({ heigth, width, isActive, flex, fontSize, fontWeight }) => css`
    position: relative;
    height: ${heigth};
    width: ${width};
    ${flex
      ? "display: flex; flex-direction:  " +
        flex[0] +
        "; align-items: " +
        flex[1] +
        "; justify-content: " +
        flex[2] +
        ";"
      : null}
    background-color: ${isActive ? "#000000" : "#ffffff"};
    font-size: ${fontSize};
  `}
`;

const Cell = ({ heigth, width, name, isActive, fontSize, fontWeigth }) => {
  return (
    // <Wrapper>
    <StyledCell
      heigth={heigth}
      width={width}
      isActive={isActive}
      flex={["row", "center", "flex-end"]}
      fontSize={fontSize}
      fontWeigth={fontWeigth}>
      {name}
    </StyledCell>
    // </Wrapper>
  );
};

export default Cell;
