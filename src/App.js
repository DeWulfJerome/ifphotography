import React from "react";
import styled from "styled-components";
import "./App.css";

import StyleConstants from "./StyleConstants";

import Header from "./components/header/Header";
import CoverRow from "./components/cover/CoverRow";
import TitleRow from "./components/title/TitleRow";
import MouseTracker from "./components/HOC/MouseTracker";
import Mouse from "./components/Mouse";

const ColoredDiv = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: ${StyleConstants.colors.blue.dark};
`;

function App() {
  return (
    <MouseTracker
      render={props => (
        <>
          <Header></Header>
          <TitleRow></TitleRow>
          <CoverRow></CoverRow>
          <Mouse props={props}></Mouse>
        </>
      )}
    >
      } >
    </MouseTracker>
  );
}

export default App;
