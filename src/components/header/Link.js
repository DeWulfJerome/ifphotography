import React from "react";
import styled from "styled-components";

const Nav = styled.p`
  color: #fff;
  font-weight: 500;
  margin: 0;
  margin-right: 4em;
  text-transform: uppercase;
  font-size: 1.1em;
  letter-spacing: 0.18em;
`;

const Link = ({ children, url }) => {
  return <Nav>{children}</Nav>;
};

export default Link;
