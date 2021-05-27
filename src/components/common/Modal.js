import React from "react";
import styled from "styled-components";

const Modal = ({ text, btnText, setIsOpen }) => {
  return (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <ModalContainer>
        <Text>{text}</Text>
        <Btn onClick={() => setIsOpen(false)}>{btnText}</Btn>
      </ModalContainer>
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);

  width: 24rem;
  height: 16rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  top: 4.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const Btn = styled.div`
  position: absolute;
  bottom: 3.6rem;
  
  width: 8.6rem;
  height: 3.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};

  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;
