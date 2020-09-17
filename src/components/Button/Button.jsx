import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  ${({ width, height, bgColor, outline, color, fontSize, fontWeight }) => css`
    position: relative;
    width: ${width};
    height: ${height};
    background-color: ${bgColor};
    outline: ${outline};
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `}
  &:focus {
    border: 1px var(--black) solid;
    font-size: 16px;
  }
`;

const Button = ({
  value,
  onClick,
  width,
  height,
  bgColor,
  outline,
  fontSize,
  color,
  fontWeight,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      outline={outline}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {value}
    </StyledButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  outline: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
};

Button.defaultProps = {
  value: "Click",
  width: "100%",
  height: "100%",
  bgColor: "#ffffff",
  outline: "none",
  fontSize: "20px",
  color: "#000000",
  fontWeight: "400",
};

export default Button;
