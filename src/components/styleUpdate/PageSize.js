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
  StyleQuizInputState_43,
  StyleQuizInputState_42,
} from "../../states/styleQuiz";
// hooks
import { useRecoilInput } from "../../hooks";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";
import { styleQuizData_W } from "../../lib/data/styleQuiz_W";

const sex = 0; // for male

const PageSize = ({ onNextClick, onBackClick }) => {
  // for size datas
  const data_32_1 = useRecoilInput(StyleQuizInputState_str(1));
  const data_32_2 = useRecoilInput(StyleQuizInputState_str(2));
  // for data 33
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
  // for data 34
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

  // for data 42
  const [data_42, setData_42] = useRecoilState(StyleQuizInputState_42);
  const [faceData, setFaceData] = useState(
    styleQuizData_M.page_42[0].options[data_42.face]
  );
  const [neckData, setNeckData] = useState(
    styleQuizData_M.page_42[1].options[data_42.neck]
  );
  const [shoulderData, setShoulderData] = useState(
    styleQuizData_M.page_42[2].options[data_42.shoulder]
  );
  const [armData, setArmData] = useState(
    styleQuizData_M.page_42[3].options[data_42.arm]
  );
  const [chestData, setChestData] = useState(
    styleQuizData_M.page_42[4].options[data_42.chest]
  );
  const [waistData, setWaistData] = useState(
    styleQuizData_M.page_42[5].options[data_42.waist]
  );
  const [pelvisData, setPelvisData] = useState(
    styleQuizData_M.page_42[6].options[data_42.pelvis]
  );
  const [hipData, setHipData] = useState(
    styleQuizData_M.page_42[7].options[data_42.hip]
  );
  const [thighData, setThighData] = useState(
    styleQuizData_M.page_42[8].options[data_42.thigh]
  );
  const [calfData, setCalfData] = useState(
    styleQuizData_M.page_42[9].options[data_42.calf]
  );
  const [legData, setLegData] = useState(
    styleQuizData_M.page_42[10].options[data_42.leg]
  );
  const [upBodyData, setUpBodyData] = useState(
    styleQuizData_M.page_42[11].options[data_42.upBody]
  );
  const [ratioData, setRatioData] = useState(
    styleQuizData_M.page_42[12].options[data_42.ratio]
  );

  // for data 43
  const [data_43, setData_43] = useRecoilState(StyleQuizInputState_43);
  const [faceShapeData, setFaceShapeData] = useState(
    styleQuizData_M.page_43.face[data_43.face]
  );
  const [skinData, setSkinData] = useState(
    styleQuizData_M.page_43.skin[data_43.skin]
  );
  const [shoulderShapeData, setShoulderShapeData] = useState(
    styleQuizData_M.page_43.shoulder[data_43.shoulder]
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
        <InputBox
          type="number"
          unit="cm"
          placeholder="키를 입력해주세요."
          input={data_32_1}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>몸무게</Text>
        <InputBox
          type="number"
          unit="kg"
          placeholder="몸무게를 입력해주세요."
          input={data_32_2}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>상의 사이즈</Text>
        <Picker
          options={
            sex === 0
              ? styleQuizData_M.size_top[0].top_1
              : styleQuizData_W.size_top[0].top_1
          }
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
          options={
            sex === 0
              ? styleQuizData_M.size_top[1].top_2
              : styleQuizData_W.size_top[1].top_2
          }
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
        {sex === 1 && (
          <Picker
            options={styleQuizData_W.size_top[2].top_3}
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
        )}
        <div style={{ height: "2.4rem" }} />
        <Text>하의 사이즈</Text>
        <Picker
          options={
            sex === 0
              ? styleQuizData_M.size_bottom[0].pants_1
              : styleQuizData_W.size_bottom[0].pants_1
          }
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
          options={
            sex === 0
              ? styleQuizData_M.size_bottom[1].pants_2
              : styleQuizData_W.size_bottom[1].pants_2
          }
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
          options={
            sex === 0
              ? styleQuizData_M.size_bottom[3].shoes
              : styleQuizData_W.size_bottom[3].shoes
          }
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
        <div style={{ height: "2.4rem" }} />
        <Text>체형 유형</Text>
        <Picker
          options={styleQuizData_M.page_42[0].options}
          placeholder={styleQuizData_M.page_42[0].text}
          isMulti={false}
          isSearchable={false}
          inputData={faceData}
          setInputData={(e) => {
            setFaceData(e);
            setData_42({
              ...data_42,
              face: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[1].options}
          placeholder={styleQuizData_M.page_42[1].text}
          isMulti={false}
          isSearchable={false}
          inputData={neckData}
          setInputData={(e) => {
            setNeckData(e);
            setData_42({
              ...data_42,
              neck: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[2].options}
          placeholder={styleQuizData_M.page_42[2].text}
          isMulti={false}
          isSearchable={false}
          inputData={shoulderData}
          setInputData={(e) => {
            setShoulderData(e);
            setData_42({
              ...data_42,
              shoulder: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[3].options}
          placeholder={styleQuizData_M.page_42[3].text}
          isMulti={false}
          isSearchable={false}
          inputData={armData}
          setInputData={(e) => {
            setArmData(e);
            setData_42({
              ...data_42,
              arm: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[4].options}
          placeholder={styleQuizData_M.page_42[4].text}
          isMulti={false}
          isSearchable={false}
          inputData={chestData}
          setInputData={(e) => {
            setChestData(e);
            setData_42({
              ...data_42,
              chest: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[5].options}
          placeholder={styleQuizData_M.page_42[5].text}
          isMulti={false}
          isSearchable={false}
          inputData={waistData}
          setInputData={(e) => {
            setWaistData(e);
            setData_42({
              ...data_42,
              waist: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[6].options}
          placeholder={styleQuizData_M.page_42[6].text}
          isMulti={false}
          isSearchable={false}
          inputData={pelvisData}
          setInputData={(e) => {
            setPelvisData(e);
            setData_42({
              ...data_42,
              pelvis: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[7].options}
          placeholder={styleQuizData_M.page_42[7].text}
          isMulti={false}
          isSearchable={false}
          inputData={hipData}
          setInputData={(e) => {
            setHipData(e);
            setData_42({
              ...data_42,
              hip: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[8].options}
          placeholder={styleQuizData_M.page_42[8].text}
          isMulti={false}
          isSearchable={false}
          inputData={thighData}
          setInputData={(e) => {
            setThighData(e);
            setData_42({
              ...data_42,
              thigh: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[9].options}
          placeholder={styleQuizData_M.page_42[9].text}
          isMulti={false}
          isSearchable={false}
          inputData={calfData}
          setInputData={(e) => {
            setCalfData(e);
            setData_42({
              ...data_42,
              calf: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[10].options}
          placeholder={styleQuizData_M.page_42[10].text}
          isMulti={false}
          isSearchable={false}
          inputData={legData}
          setInputData={(e) => {
            setLegData(e);
            setData_42({
              ...data_42,
              leg: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[11].options}
          placeholder={styleQuizData_M.page_42[11].text}
          isMulti={false}
          isSearchable={false}
          inputData={upBodyData}
          setInputData={(e) => {
            setUpBodyData(e);
            setData_42({
              ...data_42,
              upBody: e.value,
            });
          }}
        />
        <Picker
          options={styleQuizData_M.page_42[12].options}
          placeholder={styleQuizData_M.page_42[12].text}
          isMulti={false}
          isSearchable={false}
          inputData={ratioData}
          setInputData={(e) => {
            setRatioData(e);
            setData_42({
              ...data_42,
              ratio: e.value,
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>얼굴형</Text>
        <Picker
          options={styleQuizData_M.page_43.face}
          placeholder="얼굴형을 선택해주세요"
          isMulti={false}
          isSearchable={false}
          inputData={faceShapeData}
          setInputData={(e) => {
            setFaceShapeData(e);
            setData_43({
              ...data_43,
              face: e.value,
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>피부색</Text>
        <Picker
          options={styleQuizData_M.page_43.skin}
          placeholder="피부색을 선택해주세요"
          isMulti={false}
          isSearchable={false}
          inputData={skinData}
          setInputData={(e) => {
            setSkinData(e);
            setData_43({
              ...data_43,
              skin: e.value,
            });
          }}
        />
        <div style={{ height: "2.4rem" }} />
        <Text>어깨 모양</Text>
        <Picker
          options={styleQuizData_M.page_43.face}
          placeholder="어깨 모양을 선택해주세요"
          isMulti={false}
          isSearchable={false}
          inputData={shoulderShapeData}
          setInputData={(e) => {
            setShoulderShapeData(e);
            setData_43({
              ...data_43,
              shoulder: e.value,
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
