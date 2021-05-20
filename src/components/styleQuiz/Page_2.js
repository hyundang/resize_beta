import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Header, ItemsSmall, Bottom } from "../common";
// assets
// recoil
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  StyleQuizPageState,
  StyleQuizInputState_arr,
} from "../../states/styleQuiz";

// for question options
const ex_1 = [
  { src: "/imgs/item.png", text: "원색" },
  { src: "/imgs/item.png", text: "파스텔색" },
  { src: "/imgs/item.png", text: "무채색" },
  { src: "/imgs/item.png", text: "채도 낮은 색" },
  { src: "/imgs/item.png", text: "형광색" },
  { src: "/imgs/item.png", text: "메탈릭" },
  { src: "/imgs/item.png", text: "없음" },
];

const Page_2 = () => {
  // for outer page change
  const setPageNum = useSetRecoilState(StyleQuizPageState);
  // for input data
  const [inputData, setInputData] = useRecoilState(StyleQuizInputState_arr(0));
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  // for checking bottom btn active
  useEffect(() => {
    inputData.length !== 0 ? setIsActive(true) : setIsActive(false);
  }, [inputData]);

  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);

    // for bottom shadow
    const option = {
      root: viewport.current,
      threshold: 1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIsShow(false) : setIsShow(true);
      });
    };
    const io = new IntersectionObserver(handleIntersection, option);
    io.observe(target.current);
  }, []);

  return (
    <>
      <Header className="header" style={{ justifyContent: "center" }}>
        Style Quiz
      </Header>
      <Container className="container" ref={target}>
        <Text>싫어하는 색상톤이 있으신가요?</Text>
        <ItemsSmall items={ex_1} data={inputData} setData={setInputData}/>
        <div style={{height:'9.2rem'}}/>
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={isActive}
        onBackClick={() => setPageNum(1)}
        onNextClick={() => setPageNum(3)}
      />
    </>
  );
};

export default Page_2;

const Container = styled.div`
  width: 100%;
  margin-top: 8.7rem;
  padding: 4rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  word-break: break-all;
`;
