import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
// components
import { Bottom } from "../common";

const PageBodyType = ({
  options,
  inputData,
  setInputData,
  props,
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
    for (let i = 0; i < props.length; i++) {
      if (inputData[props[i]] === -1) {
        setIsActive(false);
        break;
      } else {
        setIsActive(true);
      }
    }
  }, [inputData]);

  useEffect(() => {
    // for scroll
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
            marginBottom: "0.5rem",
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "-0.04rem",
          }}
        >
          해당되는 체형 유형이 있으신가요?
        </Text>
        <Text
          style={{
            marginBottom: "2rem",
            fontSize: "1.2rem",
            fontWeight: "400",
            letterSpacing: "-0.03rem",
          }}
        >
          정확하지 않아도 됩니다. 본인과 가까운 사이즈를 선택해주세요.
        </Text>
        {options.map((item, idx) => {
          return (
            <Options
              options={item}
              inputData={inputData}
              setInputData={setInputData}
              property={props[idx]}
            />
          );
        })}
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

export default PageBodyType;

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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

const OptionsContainer = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OptionBox = styled.div`
  ${(props) =>
    props.isClicked
      ? css`
          border: none;
          background-color: ${({ theme }) => theme.colors.black};
          font-weight: 700;
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
          background-color: ${({ theme }) => theme.colors.white};
          font-weight: 400;
          color: ${({ theme }) => theme.colors.black};
        `};

  width: 30%;
  height: 4.8rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  letter-spacing: -0.03rem;
  text-align: center;
`;

const Options = ({ options, inputData, setInputData, property }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Text>{options.text}</Text>
      <OptionsContainer>
        {options.options.map((item, idx) => {
          return (
            <OptionBox
              key={idx}
              id={idx}
              isClicked={idx === inputData[property]}
              onClick={(e) =>
                setInputData({
                  ...inputData,
                  [property]: Number(e.target.id),
                })
              }
            >
              {item}
            </OptionBox>
          );
        })}
      </OptionsContainer>
    </div>
  );
};
