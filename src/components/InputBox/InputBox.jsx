import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  ${({
    height,
    width,
    padding,
    color,
    fontSize,
    fontWeigth,
    fontFamily,
  }) => css`
    height: ${height};
    width: ${width};
    padding: ${padding};
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeigth};
    font-family: ${fontFamily};
    border: none;
    border-bottom: 1px var(--black) solid;
    transition: all 1s;

    &:focus {
      font-size: 20px;
      border: 1px solid var(--black);
    }
  `}
`;

const InputBox = ({
  content,
  type,
  handleChange,
  placeholder,
  height,
  width,
  padding,
  color,
  fontSize,
  fontWeigth,
  fontFamily,
}) => {
  return (
    <StyledInput
      value={content}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      height={height}
      width={width}
      padding={padding}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeigth}
      fontFamily={fontFamily}
    />
  );
};

InputBox.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "color",
    "checkbox",
    "date",
    "email",
    "file",
    "hidden",
    "radio",
    "range",
    "reset",
    "submit",
    "time",
    "image",
    "url",
    "tel",
    "week",
    "datetime-local",
    "button",
  ]),
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeigth: PropTypes.string,
  fontFamily: PropTypes.string,
};

InputBox.defaultProps = {
  type: "text",
  placeholder: "User input",
  height: "100%",
  width: "100%",
  padding: "0px",
  color: "#000000",
  fontSize: "20px",
  fontWeigth: "400",
};

export default InputBox;
