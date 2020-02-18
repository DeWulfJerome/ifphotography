import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  height: 80vh;
  min-height: 500px;
`;

const CoverImage = () => {
  return (
    <BackgroundImage
      background={require("../../assets/images/cover1.jpg")}
    ></BackgroundImage>
  );
};

export default CoverImage;
