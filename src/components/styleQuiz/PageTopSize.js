import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, Options } from "../common";

const PageTopSize = ({
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
    for (let i = 0; i < props.length; i++) {
      if (inputData[props[i]].length === 0) {
        setIsActive(false);
        break;
      } else {
        setIsActive(true);
      }
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
            marginBottom: "0.8rem",
          }}
        >
          어떤 사이즈의 상의를 착용하시나요?
        </Text>
        <Text
          style={{
            marginBottom: "3.2rem",
            fontSize: "1.2rem",
            fontWeight: "400",
            letterSpacing: "-0.03rem",
          }}
        >
          정확하지 않아도 됩니다. 본인과 가까운 사이즈를 선택해주세요.
        </Text>
        {options.map((item, idx) => {
          return idx === 3 ? (
            <>
              <Text
                style={{
                  marginTop: "1rem",
                  marginBottom: "0.8rem",
                }}
              >
                어떤 사이즈의 속옷를 착용하시나요?
              </Text>
              <Text
                style={{
                  marginBottom: "3.2rem",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  letterSpacing: "-0.03rem",
                }}
              >
                정확하지 않아도 됩니다. 본인과 가까운 사이즈를 선택해주세요.
              </Text>
              <Options
                options={item[props[idx]]}
                text={item.text}
                inputData={inputData}
                setInputData={setInputData}
                property={props[idx]}
              />
            </>
          ) : (
            <Options
              options={item[props[idx]]}
              text={item.text}
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

export default PageTopSize;

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

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
`;
