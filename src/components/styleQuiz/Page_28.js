import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, Options } from "../common";

const Page_28 = ({
  options,
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
    console.log(inputData);
    inputData.looks.length === 0 ? setIsActive(false) : setIsActive(true);
    // '기타' 항목 작성 한 경우
    if (inputData.looks.includes(options.length - 1)) {
      inputData.looks_ect === "" ? setIsActive(false) : setIsActive(true);
    }
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
        <Text
          style={{
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "-0.04rem",
            marginBottom: "3.2rem",
          }}
        >
          평소 어떤 룩 위주로 착용하시나요?
        </Text>
        <Options
          options={options}
          inputData={inputData}
          setInputData={setInputData}
          property={"looks"}
          isEct={true}
          text_2="이외에 착용하시는 룩이 있으신가요?"
          placeholder="이외에 착용하시는 룩이 있다면 알려주세요!"
        />
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

export default Page_28;

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
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
