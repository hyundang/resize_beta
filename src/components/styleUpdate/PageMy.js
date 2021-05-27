import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Picker, Radio, Bottom, InputBox } from "../common";
// recoil
import { useRecoilState } from "recoil";
import {
  StyleQuizInputState_str,
  StyleQuizInputState_1,
} from "../../states/styleQuiz";
// hooks
import { useRecoilInput } from "../../hooks";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";

const PageMy = ({ onNextClick }) => {
  const data_32_1 = useRecoilInput(StyleQuizInputState_str(1));
  const [data_1, setData_1] = useRecoilState(StyleQuizInputState_1);
  const [purpose, setPurpose] = useState(styleQuizData_M.page_1[2][data_1.age]);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // for bottom shadow
    const option = {
      root: viewport.current,
      threshold: 1,
    };
    const handleIntersection = ([entry], observer) => {
      entry.isIntersecting ? setIsShow(false) : setIsShow(true);
    };
    const io = new IntersectionObserver(handleIntersection, option);
    io.observe(target.current);
  }, []);

  return (
    <>
      <Container>
        <Text style={{ fontSize: "2rem", letterSpacing: "-0.05rem" }}>
          내 정보 수정
        </Text>
        <Text style={{ marginBottom: "4rem", fontWeight: "400" }}>
          마이페이지에서 언제든지 업데이트가 가능합니다.
        </Text>
        <Text>이름</Text>
        <InputBox type="text" input={data_32_1} />
        <div style={{ height: "2.4rem" }} />
        <Text>연령대</Text>
        <Picker
          options={styleQuizData_M.page_1[2]}
          placeholder="연령대를 선택해주세요"
          isMulti={false}
          isSearchable={false}
          inputData={purpose}
          setInputData={(e) => {
            setPurpose(e);
            setData_1({
              ...data_1,
              purpose: e.value,
            });
          }}
        />
        <div style={{ marginTop: "7.2rem", height: "1px" }} ref={target} />
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={true}
        onlyNext={true}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default PageMy;

const Container = styled.div`
  width: 100%;
  margin-top: 9.6rem;
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
