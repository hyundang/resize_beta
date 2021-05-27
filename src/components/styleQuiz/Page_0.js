import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
// components
import { Bottom, BottomBlack } from "../common";
import PageTransition from "../PageTransition";
// assets
import ic from "../../assets/icons/ic-find.svg";
import ic_check from "../../assets/icons/ic-check.svg";

const Page_0 = ({onNextClick}) => {
  // for inner page change
  const [isNext, setIsNext] = useState(false);
  // for bottom shadow
  const container = useRef(null);
  const viewport = useRef(null);
  const viewport_2 = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(false);

  // for bottom shadow
  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);

    if (container.current.scrollHeight > window.innerHeight) {
      const option = {
        root: viewport.current,
        threshold: 1,
      };
      const option_2 = {
        root: viewport_2.current,
        threshold: 1,
      };
      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? setIsShow(false) : setIsShow(true);
        });
      };
      const io = new IntersectionObserver(handleIntersection, option);
      io.observe(target.current);
      const io_2 = new IntersectionObserver(handleIntersection, option_2);
      io_2.observe(target.current);
    }
  }, [isNext]);

  return (
    <div
      ref={container}
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={ic} className="style_image" width="100%" height="318px" />
      <PageTransition className="page_transition" type="page" pagenum={isNext}>
        <Container className="container" ref={target}>
          <Text
            className="quiz_title"
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              letterSpacing: "-0.06rem",
            }}
          >
            {isNext ? "Welcome! Let’s dress better!" : "Style Quiz"}
          </Text>
          <div style={{ height: "2rem" }} />
          {isNext ? (
            <>
              <CheckText
                text={
                  "솔직하고 구체적으로 응답해주신다면 더욱 만족스러운 상품을 추천해드릴 수 있습니다."
                }
              />
              <CheckText text={"질문에 해당되는 모든 보기를 선택해주세요."} />
              <CheckText
                text={"제출하신 내용은 응답 후 업데이트가 가능합니다."}
              />
            </>
          ) : (
            <>
              <Text
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                }}
              >
                About Us
              </Text>
              <div style={{ height: "0.2rem" }} />
              <Text style={{ lineHeight: "2.2rem" }}>
                클라이언트의 취향과 체형을 분석하여 세상에 단 하나뿐인 코디를
                추천하는 Private Personal Shopper 서비스를 모바일로 제공합니다.
              </Text>
              <div style={{ height: "2rem" }} />
              <Text
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                }}
              >
                About Quiz
              </Text>
              <div style={{ height: "0.2rem" }} />
              <Text style={{ lineHeight: "2.2rem" }}>
                Quiz는 스타일, 사이즈, 예산에 대한 질문으로 구성되어 있습니다.
                솔직하게 답변해주시면 정확한 코디를 추천드릴 수 있습니다. 예상
                소요 시간은 10분입니다.
              </Text>
            </>
          )}
          <div style={{ height: "10rem" }} />
        </Container>
        {isNext ? (
          <Bottom
            ref={viewport}
            isShow={isShow}
            isActive={true}
            onBackClick={() => setIsNext(false)}
            onNextClick={onNextClick}
          />
        ) : (
          <BottomBlack
            ref={viewport_2}
            text="다음"
            isShow={isShow}
            onClick={() => setIsNext(true)}
          />
        )}
      </PageTransition>
    </div>
  );
};

export default Page_0;

const Container = styled.div`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 100%;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  word-break: break-all;
`;

const CheckTextContainer = styled.div`
  width: 100%;
  margin-bottom: 2.7rem;

  display: flex;
  flex-direction: row;
`;

const CheckText = ({ text }) => {
  return (
    <CheckTextContainer>
      <img src={ic_check} style={{ marginRight: "1.53rem" }} />
      <Text>{text}</Text>
    </CheckTextContainer>
  );
};
