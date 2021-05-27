import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, InputBox } from "../common";
import { Modal, Tags, Items } from ".";
// recoil
import { useRecoilState } from "recoil";
import {
  StyleQuizInputState_28,
  StyleQuizInputState_29,
  StyleQuizInputState_arr,
  StyleQuizInputState_num,
  StyleQuizInputState_str,
} from "../../states/styleQuiz";
// hooks
import { useRecoilInput } from "../../hooks";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";
import { styleQuizData_W } from "../../lib/data/styleQuiz_W";

const sex = 0; // for male

const PageStyle = ({ onNextClick, onBackClick }) => {
  // for input datas
  const [data_2, setData_2] = useRecoilState(StyleQuizInputState_arr(0));
  const [data_3, setData_3] = useRecoilState(StyleQuizInputState_arr(1));
  const [data_4, setData_4] = useRecoilState(StyleQuizInputState_arr(2));
  const [data_5, setData_5] = useRecoilState(StyleQuizInputState_arr(3));
  const [data_6, setData_6] = useRecoilState(StyleQuizInputState_arr(4));
  const [data_7, setData_7] = useRecoilState(StyleQuizInputState_arr(5));
  const [data_23, setData_23] = useRecoilState(StyleQuizInputState_arr(6));
  const [data_24, setData_24] = useRecoilState(StyleQuizInputState_arr(7));
  const [data_25, setData_25] = useRecoilState(StyleQuizInputState_arr(8));
  const [data_26, setData_26] = useRecoilState(StyleQuizInputState_arr(9));
  const [data_27, setData_27] = useRecoilState(StyleQuizInputState_num(0));
  const [data_28, setData_28] = useRecoilState(StyleQuizInputState_28);
  const [data_29, setData_29] = useRecoilState(StyleQuizInputState_29);
  const [data_30, setData_30] = useRecoilState(StyleQuizInputState_arr(12));
  const data_31_1 = useRecoilInput(StyleQuizInputState_str(0));
  // for modal open
  const [isOpen, setIsOpen] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  });
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
          스타일 정보 수정
        </Text>
        <Text style={{ marginBottom: "4rem", fontWeight: "400" }}>
          마이페이지에서 언제든지 업데이트가 가능합니다.
        </Text>
        <Tags
          qtext="싫어하는 색상톤"
          datas={data_2}
          setData={setData_2}
          options={styleQuizData_M.page_2}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              0: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="싫어하는 색상"
          datas={data_3}
          setData={setData_3}
          options={styleQuizData_M.page_3}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              1: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="싫어하는 패턴"
          datas={data_4}
          setData={setData_4}
          options={styleQuizData_M.page_4}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              2: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="싫어하는 디테일"
          datas={data_5}
          setData={setData_5}
          options={styleQuizData_M.page_5}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              3: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="싫어하는 소재"
          datas={data_6}
          setData={setData_6}
          options={styleQuizData_M.page_6}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              4: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="싫어하는 넥라인 혹은 칼라"
          datas={data_7}
          setData={setData_7}
          options={styleQuizData_M.page_7}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              5: param,
            })
          }
        />
        <div style={{ height: "2.4rem" }} />
        <Tags
          qtext="평소 착용하는 룩"
          datas={data_28.looks}
          setData={(e) =>
            setData_28({
              ...setData_28,
              looks: e,
            })
          }
          options={styleQuizData_M.look}
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              6: param,
            })
          }
          isLook={true}
        />
        <div style={{ height: "2.4rem" }} />
        <Items
          options={styleQuizData_M.top}
          inputData={data_23}
          setInputData={setData_23}
          qtext="마음에 드는 상의"
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              7: param,
            })
          }
        />
        <Items
          options={styleQuizData_M.pants}
          inputData={data_24}
          setInputData={setData_24}
          qtext="마음에 드는 바지"
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              8: param,
            })
          }
        />
        {sex === 1 && (
          <Items
            options={styleQuizData_W.skirt}
            inputData={data_25}
            setInputData={setData_25}
            qtext="마음에 드는 치마/원피스"
            setIsOpen={(param) =>
              setIsOpen({
                ...isOpen,
                9: param,
              })
            }
          />
        )}
        <Items
          options={styleQuizData_M.top}
          inputData={data_26}
          setInputData={setData_26}
          qtext="마음에 드는 아우터"
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              10: param,
            })
          }
        />
        <Items
          options={styleQuizData_M.brand}
          inputData={data_30}
          setInputData={setData_30}
          qtext="선호하는 브랜드"
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              11: param,
            })
          }
        />
        <Text>자주 구매하는 브랜드</Text>
        <InputBox placeholder="joonj..." type="text" input={data_31_1} />
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
      {isOpen[0] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              0: param,
            })
          }
          inputData={data_2}
          setInputData={setData_2}
          qtext="싫어하는 색상톤을 선택해주세요."
          nonetext="싫어하는 색상톤이 없음"
          options={styleQuizData_M.page_2}
        />
      )}
      {isOpen[1] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              1: param,
            })
          }
          inputData={data_3}
          setInputData={setData_3}
          qtext="싫어하는 색상을 선택해주세요."
          nonetext="싫어하는 색상이 없음"
          options={styleQuizData_M.page_3}
        />
      )}
      {isOpen[2] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              2: param,
            })
          }
          inputData={data_4}
          setInputData={setData_4}
          qtext="싫어하는 패턴을 선택해주세요."
          nonetext="싫어하는 패턴이 없음"
          options={styleQuizData_M.page_4}
        />
      )}
      {isOpen[3] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              3: param,
            })
          }
          inputData={data_5}
          setInputData={setData_5}
          qtext="싫어하는 디테일을 선택해주세요."
          nonetext="싫어하는 디테일이 없음"
          options={styleQuizData_M.page_5}
        />
      )}
      {isOpen[4] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              4: param,
            })
          }
          inputData={data_6}
          setInputData={setData_6}
          qtext="싫어하는 소재를 선택해주세요."
          nonetext="싫어하는 소재가 없음"
          options={styleQuizData_M.page_6}
        />
      )}
      {isOpen[5] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              5: param,
            })
          }
          inputData={data_7}
          setInputData={setData_7}
          qtext="싫어하는 넥라인/칼라를 선택해주세요."
          nonetext="싫어하는 넥라인/칼라가 없음"
          options={styleQuizData_M.page_7}
        />
      )}
      {/* {isOpen[6] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              6: param,
            })
          }
          inputData={data_28}
          setInputData={setData_28}
          qtext="평소 착용하는 룩을 선택해주세요."
          isNoneGone={true}
          options={styleQuizData_M.look}
        />
      )} */}
      {isOpen[7] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              7: param,
            })
          }
          inputData={data_23}
          setInputData={setData_23}
          qtext="마음에 드는 상의를 선택해주세요."
          isNoneGone={true}
          isLike={true}
          options={styleQuizData_M.top}
        />
      )}
      {isOpen[8] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              8: param,
            })
          }
          inputData={data_24}
          setInputData={setData_24}
          qtext="마음에 드는 바지를 선택해주세요."
          isNoneGone={true}
          isLike={true}
          options={styleQuizData_M.pants}
        />
      )}
      {isOpen[9] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              9: param,
            })
          }
          inputData={data_25}
          setInputData={setData_25}
          qtext="마음에 드는 치마/원피스를 선택해주세요."
          isNoneGone={true}
          isLike={true}
          options={styleQuizData_W.skirt}
        />
      )}
      {isOpen[10] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              10: param,
            })
          }
          inputData={data_26}
          setInputData={setData_26}
          qtext="마음에 드는 아우터를 선택해주세요."
          isNoneGone={true}
          isLike={true}
          options={styleQuizData_M.outer}
        />
      )}
      {isOpen[11] && (
        <Modal
          setIsOpen={(param) =>
            setIsOpen({
              ...isOpen,
              11: param,
            })
          }
          inputData={data_30}
          setInputData={setData_30}
          qtext="선호하는 브랜드를 선택해주세요."
          isNoneGone={true}
          isLike={true}
          options={styleQuizData_M.brand}
        />
      )}
    </>
  );
};

export default PageStyle;

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
