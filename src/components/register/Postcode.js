import React from "react";
import styled, { css } from "styled-components";
// address api
import DaumPostcode from "react-daum-postcode";

const Postcode = ({ inputData, setInputData, setIsPostOpen }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setInputData({
      ...inputData,
      address: fullAddress,
    });
    setIsPostOpen(false);
  };

  return (
    <>
      <Container onClick={() => setIsPostOpen(false)} />
      <ModalWrap>
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
        <Btn onClick={() => setIsPostOpen(false)}>닫기</Btn>
      </ModalWrap>
    </>
  );
};

export default Postcode;

const postCodeStyle = {
  display: "block",
  position: "absolute",
  'z-index': '2',
  width: "100%",
  height: "90%",
  "border-radius": "0.5rem",
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.4);
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  width: 94vw;
  height: 75vh;
  border-radius: 0.3rem;
  background: white;

  display: flex;
  flex-direction: column;
`;

const Btn = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.colors.blue};
`;
