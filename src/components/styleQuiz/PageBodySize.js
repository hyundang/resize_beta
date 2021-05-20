import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { InputBox, Bottom } from "../common";

const PageBodySize = ({
  inputData_1,
  inputData_2,
  onBackClick,
  onNextClick,
}) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    (inputData_1.value.length === 3) &
    ((inputData_2.value.length > 1) & (inputData_2.value.length < 4))
      ? setIsActive(true)
      : setIsActive(false);
  }, [inputData_1.value, inputData_2.value]);

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
        <Text>키와 몸무게가 어떻게 되시나요?</Text>
        <Text style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>키</Text>
        <InputBox
          text="키를 입력해주세요"
          type="number"
          input={inputData_1}
          unit="cm"
        />
        <div style={{ height: "3.2rem" }} />
        <Text style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>
          몸무게
        </Text>
        <InputBox
          text="몸무게를 입력해주세요"
          type="number"
          input={inputData_2}
          unit="kg"
        />
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

export default PageBodySize;

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
