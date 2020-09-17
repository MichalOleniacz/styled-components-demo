import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import TextComponent from "../TextComponent";

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
        fontSize={"18px"}
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

PostCardContent.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  flex: PropTypes.array,
};

PostCardContent.defaultProps = {
  title: "Title",
  date: Date.now,
  width: "100%",
  height: "100%",
};

export default PostCardContent;
