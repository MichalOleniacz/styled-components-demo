import React from "react";
import styled, { css } from "styled-components";
import Cell from "../Cell/Cell";

const StyledNavbar = styled.div`
  ${({ height, width, flex }) => css`
    position: relative;
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

const Navbar = ({ height, width, flex }) => {
  return (
    <StyledNavbar height={height} width={width} flex={flex} data={data}>
      <Wrapper width={"30%"} flex={["row", "center", "space-evenly"]}>
        {data.map(({ name, path }) => {
          console.log(name);
          return (
            <Cell
              height={"90%"}
              width={"30%"}
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

export default Navbar;
