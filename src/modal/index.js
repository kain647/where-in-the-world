import React from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

import {
  OpenWindow,
  ModalContainer,
  ModalHeader,
  Flag,
  Left,
  Right,
  NativeName,
  Content,
  PupulationModal,
  Region,
  SubRegion,
  CapitalModal,
  BorderCountries,
  TimeZone
} from "./styled";

const ModalWindow = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = (props) => {
    setIsOpen(true);
  };
  const closeModal = (props) => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    borders,
    timezones
  } = props.data;
  return (
    <div>
      <OpenWindow onClick={openModal}>View Details</OpenWindow>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <ModalHeader>
            <MdClose onClick={closeModal} />
          </ModalHeader>
          <Content>
            <Left>
              <h1>{name}</h1>
              <Flag src={flag} />
            </Left>
            <Right>
              <NativeName><span>Native Name:</span> {nativeName}</NativeName>
              <PupulationModal><span>Population:</span> {population}</PupulationModal>
              <Region><span>Region:</span> {region}</Region>
              <SubRegion><span>Sub Region:</span> {subregion}</SubRegion>
              <CapitalModal><span>Capital:</span> {capital}</CapitalModal>
              <TimeZone><span>Timezones:</span> {timezones}</TimeZone>
              <BorderCountries>
                <span>Border Countries:</span>
                {borders.map((item) => {
                  return <p>{item}</p>;
                })}
              </BorderCountries>
            </Right>
          </Content>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ModalWindow;
