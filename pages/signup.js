import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
// components
import { Check, Header, Radio, BottomBlack } from "../src/components/common";
import { InputBox, Postcode, DateInput } from "../src/components/register";
// assets
import ic_lt_arrow from "../src/assets/icons/ic-arrow-side-black.svg";
import ic_dropdown from "../src/assets/icons/dropdown.svg";
import ic_down_arrow from "../src/assets/icons/arrow-down.svg";
import ic_up_arrow from "../src/assets/icons/arrow-up.svg";
import ic_find from "../src/assets/icons/ic-find.svg";
// api
import { postApi } from "../src/lib/api";
// router
import { useRouter } from "next/router";

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
    sex: -1,
    email: "",
    phone: "",
    password: "",
    password_check: "",
    CE: "",
    address: "",
    address_detail: "",
    check_list: [],
  });
  // for password
  const [pwFormat, setPwFormat] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  // for postcode api
  const [isPostOpen, setIsPostOpen] = useState(false);
  // for phone number
  const [pnFormat, setPnFormat] = useState(false);
  const [isCEGetBtnAtv, setIsCEGetBtnAtv] = useState(false);
  // for certification
  const [isCEOkay, setIsCEOkay] = useState(false);
  // for policybox
  const [isPolicyOpen, setIsPolicyOpen] = useState({
    one: false,
    two: false,
    three: false,
  });
  // for policy data
  const policyDatas = [
    {
      id: "0",
      text: "이용약관",
      isPolicyOpen: isPolicyOpen.one,
      policyText: PolicyOne,
    },
    {
      id: "1",
      text: "개인정보 취급방침",
      isPolicyOpen: isPolicyOpen.two,
      policyText: PolicyTwo,
    },
    {
      id: "2",
      text: "[선택] 마케팅 활용동의",
      isPolicyOpen: isPolicyOpen.three,
      policyText: PolicyThree,
    },
  ];
  // for router
  const router = useRouter();


  // for inputs
  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      [e.target.id]: value,
    });
  };

  // for input birth
  const handleInputDate = (date, e) => {
    const d = new Date(date);
    const data = d.toISOString().slice(0, 10);
    setInputData({
      ...inputData,
      birth: [d, data],
    });
  };

  const handleCEGetBtn = async () => {
    if (inputData.phone.length > 0) {
      const data = await postApi.phoneCheck({ phone: inputData.phone });
      if (data.result !== "exist") {
        const req = await postApi.reqCode({ phone: inputData.phone });
        setIsCEGetBtnAtv(true);
        setPnFormat(false);
        setIsCEOkay(true);
      } else {
        console.log("exist");
      }
    }
  };

  const handleCECheckBtn = async () => {
    const data = await postApi.codeCheck({
      phone: inputData.phone,
      code: inputData.CE,
    });
    data.result ? setIsCEOkay(false) : setIsCEOkay(true);
  };

  // for check all
  const handleChkAll = () => {
    inputData.check_list.length === 3
      ? setInputData({
          ...inputData,
          check_list: [],
        })
      : setInputData({
          ...inputData,
          check_list: [0, 1, 2],
        });
  };
  // for check
  const handleChkClick = (e) => {
    const id = Number(e.target.id);
    inputData.check_list.includes(id)
      ? setInputData({
          ...inputData,
          check_list: inputData.check_list.filter((item) => item !== id),
        })
      : setInputData({
          ...inputData,
          check_list: inputData.check_list.concat([id]),
        });
  };

  // for policy down btn click
  const handleDownClick = (e) => {
    e.stopPropagation();
    switch (e.target.id) {
      case "0":
        setIsPolicyOpen({
          ...isPolicyOpen,
          one: !isPolicyOpen.one,
        });
        break;
      case "1":
        setIsPolicyOpen({
          ...isPolicyOpen,
          two: !isPolicyOpen.two,
        });
        break;
      default:
        setIsPolicyOpen({
          ...isPolicyOpen,
          three: !isPolicyOpen.three,
        });
        break;
    }
  };

  const handleNextClick = async () => {
    const body = {
      user_name: inputData.name,
      date_of_birth: inputData.birth,
      gender: inputData.sex,
      phone: inputData.phone,
      email: inputData.email,
      password: inputData.password,
      address_main: inputData.address,
      address_detail: inputData.address_detail,
      is_terms_of_service: inputData.check_list.includes(0),
      is_privacy_policy: inputData.check_list.includes(1),
      is_marketing: inputData.check_list.includes(2),
    };
    const data = await postApi.signup(body);
    router.replace("/login");
  };

  // password format check
  useEffect(() => {
    //  8 ~ 16자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{10,16}$/;
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
      <Header className="header" style={{ height: "5rem" }}>
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
        <Icon className="ic_find" src={ic_dropdown} style={{ top: "15rem" }} />
        <DateInput onChange={handleInputDate} inputDate={inputData.birth} />
        <div style={{ height: "2.45rem" }} />
        <Qtext>성별</Qtext>
        <RadioWrap>
          <Radio
            id={0}
            value={0}
            data={inputData.sex}
            onChange={(e) =>
              setInputData({
                ...inputData,
                sex: Number(e.target.id),
              })
            }
            text="여성"
          />
          <Radio
            id={1}
            value={1}
            data={inputData.sex}
            onChange={(e) =>
              setInputData({
                ...inputData,
                sex: Number(e.target.id),
              })
            }
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
        <div>
          <InputBox
            type="number"
            id="phone"
            placeholder="휴대폰 번호를 입력해주세요."
            pattern="\d*"
            value={inputData.phone}
            onChange={handleInputChange}
          />
          <CEBtn
            id="CECGetBtn"
            style={{ top: "36.1rem" }}
            isActive={pnFormat & (inputData.phone.length !== 0)}
            onClick={pnFormat ? handleCEGetBtn : () => {}}
          >
            인증번호 받기
          </CEBtn>
        </div>
        {!pnFormat && !isCEGetBtnAtv && (
          <DescText>올바른 휴대폰 번호를 입력해주세요</DescText>
        )}
        <div style={{ height: "2.45rem" }} />
        {isCEGetBtnAtv && (
          <>
            <Qtext>인증번호</Qtext>
            <InputBox
              type="number"
              id="CE"
              placeholder=""
              pattern="\d*"
              value={inputData.CE}
              onChange={handleInputChange}
            />
            <Time isActive={isCEOkay}>3:00</Time>
            <CEBtn
              id="CECheckBtn"
              style={{ top: "43.5rem" }}
              isActive={isCEOkay}
              onClick={isCEOkay ? handleCECheckBtn : () => {}}
            >
              인증번호 확인
            </CEBtn>
            {isCEOkay ? (
              <DescText>문자메시지로 전송된 인증번호를 입력해주세요.</DescText>
            ) : (
              <DescText>인증되었습니다.</DescText>
            )}
            <div style={{ height: "2.45rem" }} />
          </>
        )}
        <Qtext>비밀번호</Qtext>
        <InputBox
          type="password"
          minLength="8"
          required
          id="password"
          placeholder="10~16자리, 영문/숫자를 포함한 조합을 입력해주세요."
          value={inputData.password}
          onChange={handleInputChange}
        />
        {!pwFormat && <DescText>10~16자리, 영문/숫자 조합</DescText>}
        <div style={{ height: "2.45rem" }} />
        <Qtext>비밀번호 확인</Qtext>
        <InputBox
          type="password"
          minLength="8"
          required
          id="password_check"
          placeholder="10~16자리, 영문/숫자를 포함한 조합을 입력해주세요."
          value={inputData.password_check}
          onChange={handleInputChange}
        />
        {!pwCheck && <DescText>동일한 비밀번호를 입력해주세요</DescText>}
        <div style={{ height: "2.45rem" }} />
        <Qtext>주소</Qtext>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <InputAddr
            onClick={() => setIsPostOpen(true)}
            isInitial={inputData.address.length === 0 ? true : false}
          >
            {inputData.address.length === 0
              ? "도로명, 지번, 건물명을 검색해주세요"
              : inputData.address}
          </InputAddr>
          <Icon className="ic_find" src={ic_find} />
        </div>
        {isPostOpen && (
          <Postcode
            inputData={inputData}
            setInputData={setInputData}
            setIsPostOpen={setIsPostOpen}
          />
        )}
        <InputBox
          type="text"
          id="address_detail"
          placeholder="상세주소를 입력해주세요."
          value={inputData.address_detail}
          onChange={handleInputChange}
        />
        <div style={{ height: "2.45rem" }} />
        <div
          style={{
            position: "absolute",
            left: "0",
            zIndex: "2",
            width: "100vw",
            height: "1rem",
            background: `#F1F1F1`,
          }}
        />
        <Title
          style={{
            fontSize: "1.4rem",
            marginTop: "3.5rem",
            marginBottom: "3.2rem",
          }}
        >
          이용약관 및 활용동의
        </Title>
        <Check
          id="check_all"
          checkedList={inputData.check_list}
          handleCheckClick={handleChkAll}
          text="전체 동의"
        />
        <div style={{ height: "2rem" }} />
        {policyDatas.map((item, idx) => {
          return (
            <CheckBox
              id={item.id}
              key={idx}
              handleCheckClick={handleChkClick}
              handleDownClick={handleDownClick}
              inputData={inputData}
              isPolicyOpen={item.isPolicyOpen}
              text={item.text}
              PolicyText={item.policyText}
            />
          );
        })}
        <div style={{ height: "12.2rem" }} />
        <BottomBlack text="가입하기" onClick={handleNextClick} />
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
  margin-top: 5rem;
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
  height: 1.5rem;

  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};
`;

const CEBtn = styled.div`
  position: absolute;
  right: 2rem;
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
  top: 44.2rem;
  right: 12.6rem;
  z-index: 2;

  width: 2.6rem;
  height: 1.8rem;

  display: ${(props) => (props.isActive ? "block" : "none")};

  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.red};
`;

const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

const Icon = styled.img`
  position: absolute;
  right: 1.4rem;
  z-index: 2;

  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_0};
  border-radius: 0.3rem;
`;

const fadeIn = keyframes`
  from {
    height: 0;
  }
  to {
    height: 14rem;
  }
`;

const PolicyBox = styled.div`
  ${(props) =>
    props.isActive
      ? css`
          display: block;
          animation: ${fadeIn} 0.15s linear;
        `
      : css`
          display: none;
        `};

  width: 100%;
  height: 14rem;
  margin-bottom: 2rem;
  padding: 1rem 2.4rem 0rem 3.8rem;

  overflow-y: scroll;

  white-space: pre-wrap;
  word-break: break-all;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.colors.black};
`;

const CheckBox = ({
  id,
  handleCheckClick,
  handleDownClick,
  inputData,
  isPolicyOpen,
  text,
  PolicyText,
}) => {
  return (
    <CheckBoxContainer>
      <div
        id={id}
        style={{
          marginLeft: "0.8rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={handleCheckClick}
      >
        <Check
          id={id}
          checkedList={inputData.check_list}
          handleCheckClick={handleCheckClick}
          text={text}
        />
        <img
          id={id}
          src={isPolicyOpen ? ic_up_arrow : ic_down_arrow}
          style={{ width: "4rem", height: "4rem" }}
          onClick={handleDownClick}
        />
      </div>
      <PolicyBox isActive={isPolicyOpen}>
        <PolicyText />
      </PolicyBox>
    </CheckBoxContainer>
  );
};

const PolicyOne = () => {
  return (
    <>
      <span style={{ fontWeight: "700" }}>제 1 조 「총칙</span>
      {
        "\n\n“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」 ,「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다. 리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다. 리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 홈페이지에 게시됩니다."
      }
    </>
  );
};

const PolicyTwo = () => {
  return (
    <>
      <span style={{ fontWeight: "700" }}>제 1 조 「총칙</span>
      {
        "\n\n“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」 ,「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다. 리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다. 리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 홈페이지에 게시됩니다."
      }
    </>
  );
};

const PolicyThree = () => {
  return (
    <>
      <span style={{ fontWeight: "700" }}>제 1 조 「총칙</span>
      {
        "\n\n“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」 ,「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다. 리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다. 리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 홈페이지에 게시됩니다."
      }
    </>
  );
};
