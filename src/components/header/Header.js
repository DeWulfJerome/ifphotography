import React from "react";
import styled from "styled-components";
import StyleConstants from "../../StyleConstants";

import Link from "./Link";

const Navbar = styled.div`
  width: 100vw;
  background-color: ${StyleConstants.colors.blue.dark};
  display: flex;
  justify-content: flex-end;
  padding: 3em 0;
`;

const Header = props => {
  return (
    <>
      <Navbar>
        <Link>Stories</Link>
        <Link>Inquiries</Link>
      </Navbar>
    </>
  );
};

export default Header;
