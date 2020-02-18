import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
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
  let rowRef = useRef(null);
  let subRef = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    TweenMax.to(rowRef, 0, { css: { height: 80 } });
    TweenMax.to(subRef, 0, { css: { opacity: 0 } });
    tl.from(rowRef, 1, { css: { height: 450 }, ease: Power3.easeOut });
    tl.to(subRef, 0.5, { css: { opacity: 1 }, ease: Power3.easeOut }, "-=0.5");
  }, []);
  return (
    <div>
      <TitleBar ref={el => (rowRef = el)}>
        <Title>Ilse Fimmers</Title>
      </TitleBar>
      <Liftup ref={el => (subRef = el)}>
        <Subtitle>Photography</Subtitle>
      </Liftup>
    </div>
  );
};

export default TitleRow;
