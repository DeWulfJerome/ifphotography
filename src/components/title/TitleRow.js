import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Subtitle from "../SubTitle";

import StyleConstants from "../../StyleConstants";

const TitleBar = styled.div`
  width: 100vw;
  background-color: ${StyleConstants.colors.blue.dark};
  display: flex;
  justify-content: flex-start;
`;

const Liftup = styled.div`
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleRow = () => {
  return (
    <>
      <TitleBar>
        <Title>Ilse Fimmers</Title>
      </TitleBar>
      <Liftup>
        <Subtitle>Photography</Subtitle>
      </Liftup>
    </>
  );
};

export default TitleRow;
