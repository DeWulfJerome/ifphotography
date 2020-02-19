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
  let titleRef = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    TweenMax.to(rowRef, 0, { css: { height: 80 } });
    TweenMax.to(subRef, 0, { css: { opacity: 0 } });
    TweenMax.to(titleRef.current, 0, { css: { marginTop: 0, opacity: 1 } });
    tl.from(rowRef, 2.3, {
      css: { height: window.innerHeight },
      ease: Power3.easeInOut
    });
    tl.from(
      titleRef.current,
      2,
      {
        css: { marginTop: window.innerHeight * 0.9, opacity: 0.2 },
        ease: Power3.easeInOut
      },
      "-=2.3"
    );
    tl.to(subRef, 1.8, { css: { opacity: 1 }, ease: Power3.easeInOut }, "-=.8");
  }, []);
  return (
    <div>
      <TitleBar ref={el => (rowRef = el)}>
        <Title refProp={titleRef}>Ilse Fimmers</Title>
      </TitleBar>
      <Liftup ref={el => (subRef = el)}>
        <Subtitle>Photography</Subtitle>
      </Liftup>
    </div>
  );
};

export default TitleRow;
