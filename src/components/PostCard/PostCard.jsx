import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import PostCardContent from "../PostCardContent";
import ImageContainer from "../ImageContainer";

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
    <Link to={`/${path}`}>
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
    </Link>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.array,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  boxShadow: PropTypes.string,
  image: PropTypes.string,
};

PostCard.defaultProps = {
  title: "Title",
  date: Date.now,
  path: "/",
  height: "100%",
  width: "100%",
  borderRadius: "0%",
  borderColor: "#ffffff",
  borderSize: "0px",
  boxShadow: "none",
};

export default PostCard;
