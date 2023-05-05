import React from "react";
import styled from "styled-components";

const SubMenu = ({ subItem }) => {
  return (
    <>
      <Wrapper>
        {subItem}
        <ButtonContainer>Approved</ButtonContainer>
      </Wrapper>
    </>
  );
};

export default SubMenu;

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 1px;
`;

const ButtonContainer = styled.div`
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
`;
