import React from "react";
import styled, { css } from "styled-components";

const getBorderRadius = (value) => {
  if (value.length === 4)
    return `${value[0]} ${value[1]} ${value[2]} ${value[3]};`;
  else return value;
};

const Image = styled.div`
  ${({ image, height, width, borderRadius }) => css`
    position: relative;
    width: ${width};
    height: ${height};
    border-radius: ${() => getBorderRadius(borderRadius)};
    overflow: hidden;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`;

const ImageContainer = ({ image, height, width, borderRadius }) => {
  console.log(image);
  return (
    <Image
      image={image}
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

export default ImageContainer;
