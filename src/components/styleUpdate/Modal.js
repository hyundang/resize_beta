import React from "react";
import styled from "styled-components";
// components
import { Items } from "../common";
// assets
import ic_close from "../../assets/icons/ic-close.svg";

const Modal = ({
  setIsOpen,
  inputData,
  setInputData,
  options,
  qtext,
  nonetext,
  isNoneGone,
  isOne,
  isLike,
  isBig,
}) => {
  return (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <Container>
        {/* <Icon src={ic_close} /> */}
        <Text>{qtext}</Text>
        <Items
          data={inputData}
          setData={setInputData}
          items={options}
          text={nonetext}
          isNoneGone={isNoneGone}
          isOne={isOne}
          isLike={isLike}
          isBig={isBig}
        />
        <div style={{ marginTop: "7.2rem", height: "1px" }} />
      </Container>
      <Btn onClick={() => setIsOpen(false)}>선택 완료</Btn>
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);

  width: 95%;
  height: 80%;
  padding: 4.3rem 1.3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  overflow-y: scroll;
`;

const Text = styled.div`
  margin-bottom: 3.2rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Icon = styled.img`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const Btn = styled.div`
  position: fixed;
  bottom: 10%;
  left: 2.5%;
  z-index: 11;

  width: 95%;
  height: 4.8rem;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
