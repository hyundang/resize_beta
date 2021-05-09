import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
// components
import Header from "../src/components/common/Header";
import InputBox from "../src/components/register/InputBox";
import Modal from "../src/components/common/Modal";
// assets
import ic_bak_arrow from "../src/assets/icons/ic-arrow-side-black.svg";

const LoginPage = () => {
  // for input
  const [inputData, setInputData] = useState({
    phone: "",
    CE: "",
  });
  // for phone number
  const [pnFormat, setPnFormat] = useState(false);
  const [isCEGetBtnAtv, setIsCEGetBtnAtv] = useState(false);
  // for certification
  const [isCEOkay, setIsCEOkay] = useState(false);
  // for modal
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      [e.target.id]: value,
    });
  };

  const handleCEGetBtn = () => {
    setIsCEGetBtnAtv(true);
    setPnFormat(false);
    setIsCEOkay(true);
  };

  const handleCECheckBtn = () => {
    setIsOpen(true);
    setIsCEOkay(false);
  };

  // phone number format check
  useEffect(() => {
    inputData.phone.length === 0
      ? setPnFormat(true)
      : setPnFormat(
          (inputData.phone[0] === "0") & (inputData.phone.length === 11)
        );
  }, [inputData.phone]);

  return (
    <>
      <Header className="header">
        <Link href="login">
          <img
            src={ic_bak_arrow}
            style={{ width: "2.5rem", height: "2.5rem", marginLeft: "1.4rem" }}
          />
        </Link>
      </Header>
      <Container className="container">
        <Title>비밀번호 찾기</Title>
        <Text>비밀번호를 찾으시려면 휴대폰 번호를 인증해주세요.</Text>
        <Qtext>휴대폰 번호</Qtext>
        <InputBox
          type="number"
          id="phone"
          placeholder="01012345678"
          value={inputData.phone}
          onChange={handleInputChange}
        />
        <Btn
          id="CEGetBtn"
          style={{ top: "12.1rem" }}
          isActive={pnFormat & (inputData.phone.length !== 0)}
          onClick={pnFormat ? handleCEGetBtn : () => {}}
        >
          인증번호 받기
        </Btn>
        {!pnFormat && !isCEGetBtnAtv && (
          <DescText>올바른 휴대폰 번호를 입력해주세요</DescText>
        )}
        <div style={{ height: "2.45rem" }} />
        <Qtext>인증번호</Qtext>
        <InputBox
          type="number"
          id="CE"
          placeholder="인증번호를 입력해주세요"
          value={inputData.CE}
          onChange={handleInputChange}
        />
        <Time
          style={{ top: !pnFormat === isCEGetBtnAtv ? "20.2rem" : "21.7rem" }}
          isActive={isCEOkay}
        >
          3:00
        </Time>
        <Btn
          id="CECheckBtn"
          style={{ top: !pnFormat === isCEGetBtnAtv ? "19.5rem" : "21rem" }}
          isActive={isCEOkay}
          onClick={isCEOkay ? handleCECheckBtn : () => {}}
        >
          인증번호 확인
        </Btn>
        <Bottom>다음</Bottom>
      </Container>
      {isOpen && (
        <Modal
          text="인증이 완료되었습니다."
          btnText="확인"
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const Title = styled.div`
  margin-top: 6rem;
  margin-bottom: 1.6rem;

  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.div`
  height: 2.4rem;
  margin-bottom: 4rem;

  display: inline-block;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.colors.black};
`;

const Qtext = styled.div`
  margin-bottom: 0.8rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

const Btn = styled.div`
  position: absolute;
  right: 1.4rem;
  z-index: 2;

  width: 8.6rem;
  height: 3.2rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 400;

  transition: 0.2s;

  ${(props) =>
    props.isActive
      ? css`
          border: none;
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_2};
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.gray_2};
        `}
`;

const Time = styled.div`
  position: absolute;
  right: 12.6rem;
  z-index: 2;

  width: 2.6rem;
  height: 1.8rem;

  display: ${(props) => (props.isActive ? "block" : "none")};

  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.red};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

const DescText = styled.div`
  margin-top: 0.3rem;

  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};
`;
