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
  { src: "/imgs/item.png", text: "화이트" },
  { src: "/imgs/item.png", text: "아이보리" },
  { src: "/imgs/item.png", text: "베이지" },
  { src: "/imgs/item.png", text: "네이비" },
  { src: "/imgs/item.png", text: "그레이" },
  { src: "/imgs/item.png", text: "카키" },
  { src: "/imgs/item.png", text: "블랙" },
  { src: "/imgs/item.png", text: "레드" },
  { src: "/imgs/item.png", text: "버건디" },
  { src: "/imgs/item.png", text: "핑크" },
  { src: "/imgs/item.png", text: "오렌지" },
  { src: "/imgs/item.png", text: "옐로우" },
  { src: "/imgs/item.png", text: "그린" },
  { src: "/imgs/item.png", text: "블루" },
  { src: "/imgs/item.png", text: "퍼플" },
  { src: "/imgs/item.png", text: "브라운" },
  { src: "/imgs/item.png", text: "없음" },
];

const Page_3 = () => {
  // for outer page change
  const setPageNum = useSetRecoilState(StyleQuizPageState);
  // for input data
  const [inputData, setInputData] = useRecoilState(StyleQuizInputState_arr(1));
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
        <Text>싫어하는 색상이 있으신가요?</Text>
        <ItemsSmall items={ex_1} data={inputData} setData={setInputData}/>
        <div style={{height:'9.2rem'}}/>
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={isActive}
        onBackClick={() => setPageNum(2)}
        onNextClick={() => setPageNum(4)}
      />
    </>
  );
};

export default Page_3;

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
