import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Container>
        <Left>
          <h2>LOGO</h2>
        </Left>
        <Right>
          <Workers>Workers</Workers>
          <Settings>Settings</Settings>
        </Right>
      </Container>
      <hr style={{ margin: "0px 20px", opacity: "0.3" }} />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
`;
const Workers = styled.div`
  background-color: #e4e4e4;
  margin: 2px 10px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #c2c1c1;
  }
`;
const Settings = styled.div`
  background-color: #e4e4e4;
  margin: 2px 10px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #c2c1c1;
  }
`;
