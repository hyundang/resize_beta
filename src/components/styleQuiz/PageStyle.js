import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import StyleImg from "next/image";
// components
import { Bottom } from "../common";

const PageStyle = ({
  src,
  inputData,
  setInputData,
  onBackClick,
  onNextClick,
}) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  // for checking bottom btn active
  useEffect(() => {
    inputData !== -1 ? setIsActive(true) : setIsActive(false);
  }, [inputData]);

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
      <Container className="container">
        <Text>이 스타일은 어떠신가요?</Text>
        <StyleImg
          className="style_img"
          src={src}
          width={158}
          height={158}
          priority={true}
        />
        <style jsx global>
          {`
            .style_img {
              border-radius: 1rem;
            }
          `}
        </style>
        <BtnContainer>
          <Btn
            id="good"
            isActive={inputData === 0}
            onClick={
              inputData === 0 ? () => setInputData(-1) : () => setInputData(0)
            }
          >
            좋아요
          </Btn>
          <Btn
            id="soso"
            isActive={inputData === 1}
            isGray={true}
            onClick={
              inputData === 1 ? () => setInputData(-1) : () => setInputData(1)
            }
          >
            나쁘지 않아요
          </Btn>
          <Btn
            id="bad"
            isActive={inputData === 2}
            isGray={true}
            onClick={
              inputData === 2 ? () => setInputData(-1) : () => setInputData(2)
            }
          >
            싫어요
          </Btn>
        </BtnContainer>
        <div style={{ marginTop: "5.9rem", height: "1px" }} ref={target} />
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={isActive}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default PageStyle;

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

const BtnContainer = styled.div`
  width: 100%;
  margin-top: 4.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.div`
  width: 15.8rem;
  height: 4.6rem;
  margin-bottom: 1rem;
  border-radius: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.035rem;

  ${(props) =>
    props.isActive
      ? props.isGray
        ? css`
            border: none;
            background-color: ${({ theme }) => theme.colors.gray_4};
            color: ${({ theme }) => theme.colors.white};
          `
        : css`
            border: none;
            background-color: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
          `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_3};
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.black};
        `};
`;
