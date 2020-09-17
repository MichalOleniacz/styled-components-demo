import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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

const Cell = ({
  heigth,
  width,
  name,
  path,
  isActive,
  fontSize,
  fontWeigth,
  flex,
}) => {
  return (
    <Link to={path} id="link">
      <StyledCell
        heigth={heigth}
        width={width}
        isActive={isActive}
        flex={["row", "center", "center"]}
        fontSize={fontSize}
        fontWeigth={fontWeigth}>
        {name}
      </StyledCell>
    </Link>
  );
};

Cell.propTypes = {
  heigth: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
  isActive: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeigth: PropTypes.string,
  flex: PropTypes.array,
};

Cell.defaultProps = {
  heigth: "100%",
  width: "100%",
  name: "value",
  path: "/",
  isActive: false,
  fontSize: "20px",
  fontWeigth: "400",
};

export default Cell;
