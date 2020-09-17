import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledTextComponent = styled.p`
  ${({ fontSize, color, fontWeigth, fontFamily }) => css`
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${fontWeigth};
    font-family: ${fontFamily};
    text-decoration: none;
    text-emphasis: none;
  `}
`;

const TextComponent = ({
  content,
  fontSize,
  color,
  fontWeight,
  fontFamily,
}) => {
  return (
    <StyledTextComponent
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      fontFamily={fontFamily}>
      {content}
    </StyledTextComponent>
  );
};

TextComponent.propTypes = {
  content: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
};

TextComponent.defaultProps = {
  content: "Content",
  fontSize: "20px",
  color: "#000000",
  fontWeight: "400",
};

export default TextComponent;
