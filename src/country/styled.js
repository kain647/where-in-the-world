import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header};
  color: #fff;
  width: 100%;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.boxShadowHeader};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  z-index: 1;
`;
export const Logo = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.logo};
  transition: all 0.5s ease-in-out;
`;
export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgContent};
  color: #fff;
  padding: 50px;
  transition: all 0.5s ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Filters = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  //justify-content: space-between;
  margin-bottom: 32px;
  input {
    background-color: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.inputText};
    font-size: 14px;
    outline: none;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    height: 20px;
    width: 250px;
    box-shadow: ${({ theme }) => theme.inputShadow};
    transition: all 0.5s ease-in-out;
    margin-right: 20px;
  }
`;
export const Theme = styled.div`
  display: flex;
  align-items: center;
`;
export const Mode = styled.div`
  display: flex;
  margin-right: 10px;
  color: ${({ theme }) => theme.mode};
`;
export const SwitchContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 29px;
  padding: 10px;
  border-radius: 50px;
  overflow: hidden;
  background: linear-gradient(to right, #8e9eab, #eef2f3);
`;
export const Circle = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  :before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: ${({ dark }) => (dark ? "34px" : "4px")};
    right: ${({ dark }) => (dark ? "4px" : "34")};
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 350px;
  height: 420px;
  flex-direction: column;
  overflow: hidden;
`;
export const FlagContainer = styled.div`
  display: flex;
`;
export const Flag = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  background-image: url(${({ flag }) =>
    flag || `https://i.stack.imgur.com/y9DpT.jpg`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const ContentCard = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  background-color: #2b3945;
  color: rgb(209, 209, 217);
  border-radius: 0 0 5px 5px;
`;
export const CountryName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Population = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Region = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Capital = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
