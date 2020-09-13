import React from "react";
import styled, { css } from "styled-components";
import TextComponent from "../TextComponent/TextComponent";

const Wrapper = styled.div`
  ${({ height, width, flex }) => css`
    position: relative;
    width: ${width};
    height: ${height};
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

const PostCardContent = ({ title, date, width, height, flex }) => {
  return (
    <Wrapper heigth={height} width={width} flex={flex}>
      <TextComponent
        content={title}
        fontSize={"16px"}
        color={"var(--textColor)"}
        fontWeight={"600"}
      />
      <TextComponent
        content={date}
        fontSize={"12px"}
        color={"var(--textColor)"}
        fontWeight={"400"}
      />
    </Wrapper>
  );
};

export default PostCardContent;
