import React from "react";
import styled, { css } from "styled-components";

const StyledTextComponent = styled.p`
  ${({ fontSize, color, fontWeigth }) => css`
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${fontWeigth};
    text-decoration: none;
    text-emphasis: none;
  `}
`;

const TextComponent = ({ content, fontSize, color, fontWeight }) => {
  return (
    <StyledTextComponent
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}>
      {content}
    </StyledTextComponent>
  );
};

export default TextComponent;
