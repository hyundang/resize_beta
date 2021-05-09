import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
// components
import Header from "../src/components/common/Header";
import InputBox from "../src/components/register/InputBox";
import DaumPostcode from "../src/components/register/Postcode";
import DateInput from "../src/components/register/DateInput";
import Radio from "../src/components/common/RadioBtn";
// assets
import ic_lt_arrow from "../src/assets/icons/ic-arrow-side-black.svg";

const SignupPage = () => {
  // prevent refresh
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "refresh";
    });
  }, []);

  // for input
  const [inputData, setInputData] = useState({
    name: "",
    birth: "",
    sex: "",
    email: "",
    phone: "",
    password: "",
    password_check: "",
    address: "",
    address_detail: "",
  });
  // for password
  const [pwFormat, setPwFormat] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  // for postcode api
  const [isAddress, setIsAddress] = useState("");
  const [isZoneCode, setIsZoneCode] = useState();
  const [isPostOpen, setIsPostOpen] = useState(false);

  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      [e.target.id]: value,
    });
  };

  const handleInputDate = (date, e) => {
    const d = new Date(date);
    const data = d.toISOString().slice(0, 10);
    setInputData({
      ...inputData,
      birth: [d, data],
    });
  };

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  // password format check
  useEffect(() => {
    //  8 ~ 16자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    inputData.password.length === 0
      ? setPwFormat(true)
      : setPwFormat(regExp.test(inputData.password));
  }, [inputData.password]);

  // password equality check
  useEffect(() => {
    inputData.password_check.length === 0
      ? setPwCheck(true)
      : setPwCheck(
          (inputData.password.length !== 0) &
            (inputData.password === inputData.password_check)
            ? true
            : false
        );
  }, [inputData.password_check]);

  return (
    <>
      <Header className="header">
        <Link href="login">
          <img
            src={ic_lt_arrow}
            style={{ width: "2.5rem", height: "2.5rem", marginLeft: "1.4rem" }}
          />
        </Link>
      </Header>
      <Container className="container">
        <Title>회원가입</Title>
        <Qtext>이름</Qtext>
        <InputBox
          type="text"
          id="name"
          placeholder="이름을 입력해주세요."
          value={inputData.name}
          onChange={handleInputChange}
        />
        <div style={{ height: "2.45rem" }} />
        <Qtext>생일</Qtext>
        <DateInput onChange={handleInputDate} inputDate={inputData.birth} />
        <div style={{ height: "2.45rem" }} />
        <Qtext>성별</Qtext>
        <RadioWrap>
          <Radio
            id="sex"
            value="woman"
            data={inputData.sex}
            onChange={handleInputChange}
            text="여성"
          />
          <Radio
            id="sex"
            value="man"
            data={inputData.sex}
            onChange={handleInputChange}
            text="남성"
          />
        </RadioWrap>
        <div style={{ height: "2.45rem" }} />
        <Qtext>이메일</Qtext>
        <InputBox
          type="email"
          id="email"
          placeholder="@를 포함하여 이메일을 입력해주세요."
          value={inputData.email}
          onChange={handleInputChange}
        />
        <div style={{ height: "2.45rem" }} />
        <Qtext>휴대폰 번호</Qtext>
        <InputBox
          type="number"
          id="phone"
          placeholder="휴대폰 번호를 입력해주세요."
          value={inputData.phone}
          onChange={handleInputChange}
        />
        <div style={{ height: "2.45rem" }} />
        <Qtext>비밀번호</Qtext>
        <InputBox
          type="password"
          minLength="8"
          required
          id="password"
          placeholder="8~16자리, 영문/숫자 조합을 입력해주세요."
          value={inputData.password}
          onChange={handleInputChange}
        />
        {!pwFormat && <DescText>8~16자리, 영문/숫자 조합</DescText>}
        <div style={{ height: "2.45rem" }} />
        <Qtext>비밀번호 확인</Qtext>
        <InputBox
          type="password"
          minLength="8"
          required
          id="password_check"
          placeholder="8~16자리, 영문/숫자 조합을 입력해주세요."
          value={inputData.password_check}
          onChange={handleInputChange}
        />
        {!pwCheck && <DescText>동일한 비밀번호를 입력해주세요</DescText>}
        <div style={{ height: "2.45rem" }} />
        <Qtext>주소</Qtext>
        <InputAddr
          onClick={() => setIsPostOpen(true)}
          isInitial={inputData.address.length === 0 ? true : false}
        >
          {inputData.address.length === 0
            ? "도로명,지번,건물명 검색"
            : inputData.address}
        </InputAddr>
        {isPostOpen && (
          <DaumPostcode
            inputData={inputData}
            setInputData={setInputData}
            setIsPostOpen={setIsPostOpen}
          />
        )}
      </Container>
    </>
  );
};

export default SignupPage;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const Title = styled.div`
  margin-top: 6rem;
  margin-bottom: 3.2rem;

  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const Qtext = styled.div`
  margin-bottom: 0.8rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

const InputAddr = styled.div`
  width: 100%;
  height: 2.65rem;
  margin-bottom: 2.45rem;
  padding: 0 0 0.65rem 0;
  border: none;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.gray_0};

  font-size: 1.4rem;
  font-family: "Noto Sans KR";
  font-weight: 400;
  color: ${(props) =>
    props.isInitial
      ? ({ theme }) => theme.colors.gray_2
      : ({ theme }) => theme.colors.black};
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
