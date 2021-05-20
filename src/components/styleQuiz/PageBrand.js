import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { InputBox, Bottom } from "../common";

const PageBrand = ({ inputData, placeholder, onBackClick, onNextClick }) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    inputData.value !== "" ? setIsActive(true) : setIsActive(false);
  }, [inputData.value]);

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
      <Container className="container" ref={target}>
        <Text>평소 자주 구매하는 브랜드가 있으신가요?</Text>
        <InputBox placeholder={placeholder} type="text" input={inputData} />
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

export default PageBrand;

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
  margin-bottom: 1.9rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  word-break: break-all;
`;
