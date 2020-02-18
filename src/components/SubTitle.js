import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

const Outlined = styled.canvas`
  position: absolute;
  margin-top: -2em;
`;

const SubTitle = ({ children }) => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.font = "500 5.5em Roboto";
    ctx.strokeStyle = "#fff";
    ctx.strokeText(children.toUpperCase(), 10, 80);
  }, [canvasRef, children]);
  return <Outlined ref={canvasRef} width={700} height={200}></Outlined>;
};

export default SubTitle;
