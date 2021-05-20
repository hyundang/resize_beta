import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { InputBox, Bottom } from "../common";

const PageBrand = ({ inputData, placeholder, onBackClick, onNextClick }) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputData.value !== "" ? setIsActive(true) : setIsActive(false);
  }, [inputData.value]);

  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container className="container">
        <Text>평소 자주 구매하는 브랜드가 있으신가요?</Text>
        <InputBox placeholder={placeholder} type="text" input={inputData} />
      </Container>
      <Bottom
        className="bottom"
        isShow={false}
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
