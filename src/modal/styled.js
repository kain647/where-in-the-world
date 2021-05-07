import styled from "styled-components";

export const OpenWindow = styled.button`
  display: flex;
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  font-size: 90%;
  font-weight: 700;
  color: rgb(209, 209, 217);
  text-decoration: none;
  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  border-radius: 3px;
  background: linear-gradient(rgb(110, 112, 120), rgb(81, 81, 86))
    rgb(110, 112, 120);
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);
  transition: 0.2s ease-in-out;
  :hover {
    background: linear-gradient(rgb(126, 126, 134), rgb(70, 71, 76))
      rgb(126, 126, 134);
  }
  :active {
    top: 1px;
    background: linear-gradient(rgb(76, 77, 82), rgb(56, 57, 62))
      rgb(76, 77, 82);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5) inset,
      0 2px 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.1);
  }
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
export const ModalHeader = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  padding: 10px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 16px;
  }
`;
export const Flag = styled.img`
  display: flex;
  width: 400px;
  height: auto;
`;
export const Content = styled.div`
  display: flex;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
export const NativeName = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
export const PupulationModal = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
export const Region = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
export const SubRegion = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
export const CapitalModal = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
export const BorderCountries = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
  p {
    margin-right: 10px;
    background-color: #8e8e8e;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const TimeZone = styled.div`
  display: flex;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
