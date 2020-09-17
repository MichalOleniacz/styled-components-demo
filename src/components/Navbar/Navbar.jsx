import React from "react";
import styled, { css } from "styled-components";
import Cell from "../Cell";
import PropTypes from "prop-types";

const StyledNavbar = styled.div`
  ${({ height, width, flex }) => css`
    position: absolute;
    z-index: 3;
    height: ${height};
    width: ${width};
    top: 0px;
    ${flex
      ? "display: flex; flex-direction:  " +
        flex[0] +
        "; align-items: " +
        flex[1] +
        "; justify-content: " +
        flex[2] +
        ";"
      : null}
  `}
`;

const Wrapper = styled.div`
  ${({ width, flex }) => css`
    position: relative;
    height: 100%;
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
  `}
`;

const data = [
  { name: "Home", path: "/" },
  { name: "Add new post!", path: "/new" },
];

const Navbar = (props) => {
  console.log(props.location);
  return (
    <StyledNavbar
      height={props.height}
      width={props.width}
      flex={props.flex}
      data={data}>
      <Wrapper width={"25%"} flex={["row", "center", "space-between"]}>
        {data.map(({ name, path }) => {
          return (
            <Cell
              height={"100%"}
              width={"100%"}
              name={name}
              path={path}
              fontSize={"16px"}
              fontWeigth={"600"}
              // isActive
            />
          );
        })}
      </Wrapper>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.array,
  data: PropTypes.array,
};

Navbar.defaultProps = {
  height: "100%",
  width: "100%",
};

export default Navbar;
