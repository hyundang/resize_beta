import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
// components
import Header from "../src/components/common/Header";
import InputBox from "../src/components/register/InputBox";

const LoginPage = () => {
  // for input
  const [inputData, setInputData] = useState({
    phone: "",
    password: "",
  });
  // for phone number
  const [pnFormat, setPnFormat] = useState(false);
  // for password
  const [pwFormat, setPwFormat] = useState(false);

  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      [e.target.id]: value,
    });
  };

  // phone number format check
  useEffect(() => {
    inputData.phone.length === 0
      ? setPnFormat(true)
      : setPnFormat(
          (inputData.phone[0] === "0") & (inputData.phone.length === 11)
        );
  }, [inputData.phone]);

  // password format check
  useEffect(() => {
    //  8 ~ 16자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    inputData.password.length === 0
      ? setPwFormat(true)
      : setPwFormat(regExp.test(inputData.password));
  }, [inputData.password]);

  return (
    <>
      <Header
        className="header"
        style={{
          justifyContent: "center",
          borderBottom: "solid 0.1rem #F5F3F0",
        }}
      >
        ONLY FOR CLUB MEMBERS
      </Header>
      <Container className="container">
        <Title>로그인</Title>
        <InputBox
          type="number"
          id="phone"
          placeholder="휴대폰 번호를 입력하세요"
          value={inputData.phone}
          onChange={handleInputChange}
        />
        {!pnFormat && <DescText>올바른 휴대폰 번호를 입력해주세요</DescText>}
        <div style={{ height: "3.45rem" }} />
        <InputBox
          type="password"
          minLength="8"
          required
          id="password"
          placeholder="비밀번호를 입력하세요"
          value={inputData.password}
          onChange={handleInputChange}
        />
        {!pwFormat && <DescText>올바른 비밀번호를 입력해주세요</DescText>}
        <div style={{ height: "4.25rem" }} />
        <Link href="/">
          <Btn isLogin={true}>로그인</Btn>
        </Link>
        <div style={{ height: "2.4rem" }} />
        <Link href="password">
          <Text>비밀번호를 잊으셨나요?</Text>
        </Link>
        <div style={{ height: "4.8rem" }} />
        <Link href="signup">
          <Btn isLogin={false}>회원가입</Btn>
        </Link>
      </Container>
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const Title = styled.div`
  margin-top: 7.4rem;
  margin-bottom: 3.8rem;

  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const Btn = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;

  ${(props) =>
    props.isLogin
      ? css`
          background-color: ${({ theme }) => theme.colors.black};
          border-radius: 0.5rem;
          color: ${({ theme }) => theme.colors.white};
          font-weight: 500;
        `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_5};
          border-radius: 0.2rem;
          color: ${({ theme }) => theme.colors.black};
          font-weight: 700;
        `}
`;

const Text = styled.div`
  height: 2rem;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.black};

  display: inline-block;

  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.03px;
  color: ${({ theme }) => theme.colors.black};
`;

const DescText = styled.div`
  margin-top: 0.3rem;

  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};
`;

const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;
