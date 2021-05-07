import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

export const DropdownButton = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  padding: 15px;
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};
  background-color: ${({ theme }) => theme.dropDownButton};
  color: ${({ theme }) => theme.dropDownText};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: ${({ theme }) => theme.dropDownShadow};
  transition: all 0.5s ease-in-out;
  p {
    margin: 0;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  width: 150px;
  height: 50px;
  align-items: center;
  //z-index: 1;
`;
export const Selector = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  position: absolute;
  border: 1px solid #2b3945;
  background-color: ${({ theme }) => theme.bgSelector};
  color: ${({ theme }) => theme.selectorText};
  cursor: pointer;
`;
export const Option = styled.div`
  border-bottom: 1px solid #2b3945;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  :last-child {
    border-bottom: 0;
  }
  :hover {
    background-color: #2b3945;
    color: #fff;
  }
`;

export const MainButton = (props) => {
  const { label, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      <p>{label}</p>
      <FaAngleDown />
    </DropdownButton>
  );
};
