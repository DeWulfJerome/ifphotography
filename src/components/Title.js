import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 7em;
  font-weight: 700;
  color: #fff;
  width: 1100px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  line-height: 0.7em;
`;

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
