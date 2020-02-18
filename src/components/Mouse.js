import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Dot = styled.canvas`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

const Mouse = ({ props }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.outerWidth);
    setWindowHeight(window.outerHeight);
    const handleResize = e => {
      setWindowWidth(e.currentTarget.outerWidth);
      setWindowHeight(e.currentTarget.outerHeight);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, windowWidth, windowHeight);
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#C8CABC";
    ctx.fillStyle = "rgba(200,202,188,0.9)";
    ctx.arc(props.x, props.y, 6, 0, 2 * Math.PI, true);
    ctx.fill();
  }, [canvasRef, props]);

  return (
    <Dot
      ref={canvasRef}
      width={windowWidth + "px"}
      height={windowHeight + "px"}
    ></Dot>
  );
};

export default Mouse;
