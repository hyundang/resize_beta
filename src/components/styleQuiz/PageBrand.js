import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { InputBox, Bottom, Radio } from "../common";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";

const PageBrand = ({
  inputData,
  inputData_2,
  setInputData_2,
  placeholder,
  onBackClick,
  onNextClick,
}) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    (inputData.value !== "") & (inputData_2 !== -1)
      ? setIsActive(true)
      : setIsActive(false);
  }, [inputData.value, inputData_2]);

  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container className="container">
        <Text>평소 자주 구매하는 브랜드가 있으신가요?</Text>
        <InputBox placeholder={placeholder} type="text" input={inputData} />
        <div style={{ height: "3.2rem" }} />
        <Text>어떤 브랜드의 상품을 추천해드릴까요?</Text>
        <RadioContainer>
          {styleQuizData_M.brand_pop.map((item, idx) => {
            return (
              <>
                <Radio
                  id={idx}
                  value={idx}
                  data={inputData_2}
                  onChange={(e) => setInputData_2(Number(e.target.id))}
                  text={item}
                />
                <div style={{ height: "1.6rem" }} />
              </>
            );
          })}
        </RadioContainer>
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

const RadioContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
