import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Picker, Radio, Bottom, InputBox } from "../common";
// recoil
import { useRecoilState } from "recoil";
import {
  StyleQuizInputState_str,
  StyleQuizInputState_33,
  StyleQuizInputState_34,
} from "../../states/styleQuiz";
// hooks
import { useRecoilInput } from "../../hooks";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";

const PageSize = ({ onNextClick, onBackClick }) => {
  // for size datas
  const data_32_1 = useRecoilInput(StyleQuizInputState_str(1));
  const data_32_2 = useRecoilInput(StyleQuizInputState_str(2));
  const [data_33, setData_33] = useRecoilState(StyleQuizInputState_33);
  const [top1Data, setTop1Data] = useState(
    data_33.top_1.map((item) => {
      return styleQuizData_M.size_top[0].top_1[item];
    })
  );
  const [top2Data, setTop2Data] = useState(
    data_33.top_2.map((item) => {
      return styleQuizData_M.size_top[1].top_2[item];
    })
  );
  const [top3Data, setTop3Data] = useState(
    data_33.top_3.map((item) => {
      return styleQuizData_M.size_top[2].top_3[item];
    })
  );
  const [data_34, setData_34] = useRecoilState(StyleQuizInputState_34);
  const [pants1Data, setPants1Data] = useState(
    data_34.pants_1.map((item) => {
      return styleQuizData_M.size_bottom[0].pants_1[item];
    })
  );
  const [pants2Data, setPants2Data] = useState(
    data_34.pants_2.map((item) => {
      return styleQuizData_M.size_bottom[1].pants_2[item];
    })
  );
  const [shoesData, setShoesData] = useState(
    data_34.shoes.map((item) => {
      return styleQuizData_M.size_bottom[3].shoes[item];
    })
  );
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log(data_34);
  }, [data_34]);

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
          사이즈 정보 수정
        </Text>
        <Text style={{ marginBottom: "4rem", fontWeight: "400" }}>
          언제든지 업데이트가 가능합니다.
        </Text>
        <Text>키</Text>
        <InputBox type="number" unit="cm" input={data_32_1} />
        <div style={{ height: "2.4rem" }} />
        <Text>몸무게</Text>
        <InputBox type="number" unit="kg" input={data_32_2} />
        <div style={{ height: "2.4rem" }} />
        <Text>상의 사이즈</Text>
        <Picker
          options={styleQuizData_M.size_top[0].top_1}
          placeholder="항목 1"
          isMulti={true}
          isSearchable={true}
          inputData={top1Data}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setTop1Data(e);
            setData_33({
              ...data_33,
              top_1: e.map((item) => item.value),
            });
          }}
        />
        <Picker
          options={styleQuizData_M.size_top[1].top_2}
          placeholder="항목 2"
          isMulti={true}
          isSearchable={true}
          inputData={top2Data}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setTop2Data(e);
            setData_33({
              ...data_33,
              top_2: e.map((item) => item.value),
            });
          }}
        />
        <Picker
          options={styleQuizData_M.size_top[2].top_3}
          placeholder="항목 3"
          isMulti={true}
          isSearchable={true}
          inputData={top3Data}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setTop3Data(e);
            setData_33({
              ...data_33,
              top_3: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>하의 사이즈</Text>
        <Picker
          options={styleQuizData_M.size_bottom[0].pants_1}
          placeholder="항목 1"
          isMulti={true}
          isSearchable={true}
          inputData={pants1Data}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setPants1Data(e);
            setData_34({
              ...data_34,
              pants_1: e.map((item) => item.value),
            });
          }}
        />
        <Picker
          options={styleQuizData_M.size_bottom[1].pants_2}
          placeholder="항목 2"
          isMulti={true}
          isSearchable={true}
          inputData={pants2Data}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setPants2Data(e);
            setData_34({
              ...data_34,
              pants_2: e.map((item) => item.value),
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>바지 사이즈를 정하는 기준</Text>
        <div
          className="radio_btn_container"
          style={{
            width: "100%",
            marginBottom: "0.8rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {styleQuizData_M.size_bottom[2].pants_3.map((item) => {
            return (
              <>
                <Radio
                  id={item.value}
                  value={item.value}
                  text={item.label}
                  data={data_34.pants_3}
                  onChange={(e) =>
                    setData_34({
                      ...data_34,
                      pants_3: Number(e.target.id),
                    })
                  }
                />
                <div style={{ height: "1.6rem" }} />
              </>
            );
          })}
        </div>
        <Text>신발 사이즈</Text>
        <Picker
          options={styleQuizData_M.size_bottom[3].shoes}
          placeholder="신발"
          isMulti={true}
          isSearchable={true}
          inputData={shoesData}
          setInputData={(e) => {
            e.sort((a, b) => {
              return a.value - b.value;
            });
            setShoesData(e);
            setData_34({
              ...data_34,
              shoes: e.map((item) => item.value),
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
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default PageSize;

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
