import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Picker, Radio, Bottom, InputBox } from "../common";
// recoil
import { useRecoilState } from "recoil";
import { StyleQuizInputState_44 } from "../../states/styleQuiz";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";

const PagePayment = ({ onBackClick, onNextClick }) => {
  const [data_44, setData_44] = useRecoilState(StyleQuizInputState_44);
  const [tshirts, setTshirts] = useState(
    data_44.tshirts.map((item) => {
      return styleQuizData_M.payment[0].options[item];
    })
  );
  const [shirts, setShirts] = useState(
    data_44.shirts.map((item) => {
      return styleQuizData_M.payment[1].options[item];
    })
  );
  const [neat, setNeat] = useState(
    data_44.neat.map((item) => {
      return styleQuizData_M.payment[2].options[item];
    })
  );
  const [pants, setPants] = useState(
    data_44.pants.map((item) => {
      return styleQuizData_M.payment[3].options[item];
    })
  );
  const [jacket, setJacket] = useState(
    data_44.jacket.map((item) => {
      return styleQuizData_M.payment[4].options[item];
    })
  );
  const [coat, setCoat] = useState(
    data_44.coat.map((item) => {
      return styleQuizData_M.payment[5].options[item];
    })
  );
  const [shoes, setShoes] = useState(
    data_44.shoes.map((item) => {
      return styleQuizData_M.payment[6].options[item];
    })
  );
  const [bag, setBag] = useState(
    data_44.bag.map((item) => {
      return styleQuizData_M.payment[7].options[item];
    })
  );
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

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
      <Container>
        <Text style={{ fontSize: "2rem", letterSpacing: "-0.05rem" }}>
          비용 정보 수정
        </Text>
        <Text style={{ marginBottom: "4rem", fontWeight: "400" }}>
          마이페이지에서 언제든지 업데이트가 가능합니다.
        </Text>
        <Text>{styleQuizData_M.payment[0].text}</Text>
        <Picker
          options={styleQuizData_M.payment[0].options}
          placeholder={
            styleQuizData_M.payment[0].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={tshirts}
          setInputData={(e) => {
            setTshirts(e);
            setData_44({
              ...data_44,
              tshirts: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[1].text}</Text>
        <Picker
          options={styleQuizData_M.payment[1].options}
          placeholder={
            styleQuizData_M.payment[1].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={shirts}
          setInputData={(e) => {
            setShirts(e);
            setData_44({
              ...data_44,
              shirts: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[2].text}</Text>
        <Picker
          options={styleQuizData_M.payment[2].options}
          placeholder={
            styleQuizData_M.payment[2].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={neat}
          setInputData={(e) => {
            setNeat(e);
            setData_44({
              ...data_44,
              neat: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[3].text}</Text>
        <Picker
          options={styleQuizData_M.payment[3].options}
          placeholder={
            styleQuizData_M.payment[3].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={pants}
          setInputData={(e) => {
            setPants(e);
            setData_44({
              ...data_44,
              pants: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[4].text}</Text>
        <Picker
          options={styleQuizData_M.payment[4].options}
          placeholder={
            styleQuizData_M.payment[4].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={jacket}
          setInputData={(e) => {
            setJacket(e);
            setData_44({
              ...data_44,
              jacket: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[5].text}</Text>
        <Picker
          options={styleQuizData_M.payment[5].options}
          placeholder={
            styleQuizData_M.payment[5].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={coat}
          setInputData={(e) => {
            setCoat(e);
            setData_44({
              ...data_44,
              coat: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[6].text}</Text>
        <Picker
          options={styleQuizData_M.payment[6].options}
          placeholder={
            styleQuizData_M.payment[6].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={shoes}
          setInputData={(e) => {
            setShoes(e);
            setData_44({
              ...data_44,
              shoes: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>{styleQuizData_M.payment[7].text}</Text>
        <Picker
          options={styleQuizData_M.payment[7].options}
          placeholder={
            styleQuizData_M.payment[7].text + " 비용을 선택해주세요."
          }
          isMulti={true}
          isSearchable={true}
          inputData={bag}
          setInputData={(e) => {
            setBag(e);
            setData_44({
              ...data_44,
              bag: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ marginTop: "7.2rem", height: "1px" }} ref={target} />
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={true}
        isSubmit={true}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default PagePayment;

const Container = styled.div`
  width: 100%;
  margin-top: 9.6rem;
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
