import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledTextarea = styled.textarea`
  ${({ width, height, fontSize, padding }) => css`
    position: relative;
    width: ${width};
    font-size: ${fontSize};
    height: ${height};
    padding: ${padding};
    border: none;
    overflow-x: wrap;
    overflow-y: scroll;
    word-break: break-all;
    word-wrap: normal;
    white-space: pre-wrap;
    text-align: justify;
    border-bottom: 1px var(--black) solid;
    transition: all 1s;
  `}

  &:focus {
    border: 1px var(--black) solid;
    font-size: 16px;
  }
`;

const TextareaInput = ({
  value,
  placeholder,
  handleChange,
  width,
  height,
  fontSize,
  padding,
}) => {
  return (
    <StyledTextarea
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      width={width}
      height={height}
      fontSize={fontSize}
      padding={padding}
    />
  );
};

TextareaInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
};

TextareaInput.defaultProps = {
  value: "",
  placeholder: "Tell us your story...",
  width: "100%",
  height: "100%",
  fontSize: "20px",
  padding: "0px",
};

export default TextareaInput;
