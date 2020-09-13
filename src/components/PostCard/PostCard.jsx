import React from "react";
import styled, { css } from "styled-components";
import PostCardContent from "../PostCardContent/PostCardContent";
import ImageContainer from "../ImageContainer/ImageContainer";

const Wrapper = styled.div`
  ${({
    height,
    width,
    flex,
    borderRadius,
    borderColor,
    borderSize,
    boxShadow,
  }) => css`
    position: relative;
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    border: ${borderSize} ${borderColor} solid;
    box-shadow: ${boxShadow};
    ${flex
      ? "display: flex; flex-direction:  " +
        flex[0] +
        "; align-items: " +
        flex[1] +
        "; justify-content: " +
        flex[2] +
        ";"
      : null};
  `}
`;

const PostCard = ({
  title,
  date,
  path,
  height,
  width,
  flex,
  borderRadius,
  borderColor,
  borderSize,
  boxShadow,
  image,
}) => {
  return (
    <Wrapper
      heigth={height}
      width={width}
      flex={flex}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderSize={borderSize}
      boxShadow={boxShadow}>
      <ImageContainer
        image={image}
        height={"300px"}
        width={"100%"}
        borderRadius={["40px", "40px", "0px", "0px"]}
      />
      <PostCardContent
        title={title}
        date={date}
        width={"90%"}
        height={"30%"}
        flex={["column", "center", "space-between"]}
      />
    </Wrapper>
  );
};

export default PostCard;
