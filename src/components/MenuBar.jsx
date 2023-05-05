import React, { useState } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

const MenuBar = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.id === selectedItem?.id ? null : item);
  };

  return (
    <Wrapper onClick={() => handleItemClick(item)}>
      {selectedItem ? "- " : "+ "}
      {item.title}
      {selectedItem?.id === item.id && (
        <>
          {item.subItems.map((subItem) => (
            <SubMenu subItem={subItem} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  background-color: #f0eded;
  margin: 10px 100px;
  padding: 20px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #dbdbdb;
  }
`;
