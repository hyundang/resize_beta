import React, { useState, useEffect } from "react";
import styled from "styled-components";
// components
import { Bottom, Radio } from "../common";

// for radio button options
const options = ["치마", "바지", "비슷하게 착용"];

const PagePreferSorP = ({
  inputData,
  setInputData,
  onBackClick,
  onNextClick,
}) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);

  // for checking bottom btn active
  useEffect(() => {
    console.log(inputData);
    inputData !== -1 ? setIsActive(true) : setIsActive(false);
  }, [inputData]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          평소 치마와 바지 중 무엇을 더 자주 착용하시나요?
        </Text>
        <RadioContainer>
          {options.map((item, idx) => {
            return (
              <>
                <Radio
                  key={idx}
                  id={idx}
                  value={idx}
                  text={item}
                  data={inputData}
                  onChange={(e) => setInputData(Number(e.target.id))}
                />
                <div style={{ height: "1.6rem" }} />
              </>
            );
          })}
        </RadioContainer>
        <div style={{ height: "8.6rem" }} />
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

export default PagePreferSorP;

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
  margin-bottom: 4rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
  word-break: break-all;
  white-space: pre-wrap;
`;

const RadioContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
