import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, Options, Radio } from "../common";
// for figuring the input data property
import { props } from "../../lib/data/properties";

const PageBottomSize = ({
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
    (inputData.pants_1.length !== 0) &
    (inputData.pants_2.length !== 0) &
    (inputData.pants_3 !== -1) &
    (inputData.shoes.length !== 0)
      ? setIsActive(true)
      : setIsActive(false);
  }, [inputData]);

  useEffect(() => {
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
        <Text
          style={{
            marginBottom: "0.8rem",
          }}
        >
          어떤 사이즈의 바지를 착용하시나요?
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
          return idx === 2 ? (
            <>
              <Text>바지 사이즈를 정하는 기준은 무엇인가요?</Text>
              <div
                className="radio_btn_container"
                style={{
                  width: "100%",
                  marginBottom: "2.4rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {item[props.size_bottom[idx]].map((e, index) => {
                  return (
                    <>
                      <Radio
                        id={index}
                        value={index}
                        text={e}
                        data={inputData[props.size_bottom[idx]]}
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            [props.size_bottom[idx]]: Number(e.target.id),
                          })
                        }
                      />
                      <div style={{ height: "1.6rem" }} />
                    </>
                  );
                })}
              </div>
            </>
          ) : idx === 3 ? (
            <>
              <Text
                style={{
                  marginTop: "1rem",
                  marginBottom: "0.8rem",
                }}
              >
                어떤 사이즈의 신발을 착용하시나요?
              </Text>
              <Text
                style={{
                  marginBottom: "3.2rem",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  letterSpacing: "-0.03rem",
                }}
              >
                본인의 발 정사이즈와 가장 가까운 사이즈를 선택해주세요.
              </Text>
              <Options
                options={item[props.size_bottom[idx]]}
                text={item.text}
                inputData={inputData}
                setInputData={setInputData}
                property={props.size_bottom[idx]}
              />
            </>
          ) : (
            <Options
              options={item[props.size_bottom[idx]]}
              text={item.text}
              inputData={inputData}
              setInputData={setInputData}
              property={props.size_bottom[idx]}
            />
          );
        })}
        <div style={{ height: "9.2rem" }} />
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

export default PageBottomSize;

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
