import React, { useEffect } from "react";
// components
import {
  Page_0,
  Page_1,
  Page_28,
  Page_29,
  PageItems,
  PagePreferSorP,
  PageCody,
  PageBrand,
  PageBodySize,
  PageTopSize,
  PageBottomSize,
  PageBodyType,
  PageFaceType,
  PagePayment,
  PageUpload,
  PageJob,
} from "../src/components/styleQuiz";
import { Bar, Header } from "../src/components/common";
import TransitionPage from "../src/components/PageTransition";
// recoil
import { useRecoilState } from "recoil";
import {
  StyleQuizPageNumState,
  StyleQuizInputState_arr,
  StyleQuizInputState_num,
  StyleQuizInputState_str,
  StyleQuizInputState_1,
  StyleQuizInputState_28,
  StyleQuizInputState_29,
  StyleQuizInputState_33,
  StyleQuizInputState_34,
  StyleQuizInputState_42,
  StyleQuizInputState_43,
  StyleQuizInputState_44,
  StyleQuizInputState_45,
  StyleQuizInputState_46,
  StyleQuizInputState_Cody,
} from "../src/states/styleQuiz";
// data
import { styleQuizData_M } from "../src/lib/data/styleQuiz_M";
import { styleQuizData_W } from "../src/lib/data/styleQuiz_W";
// for figuring the input data property
import { props } from "../src/lib/data/properties";
// hooks
import { useRecoilInput } from "../src/hooks";
// router
import {useRouter} from 'next/router';

const sex = 0; // only man

const styleQuiz = () => {
  // for page
  const [pageNum, setPageNum] = useRecoilState(StyleQuizPageNumState);
  // for inputs
  const [data_1, setData_1] = useRecoilState(StyleQuizInputState_1);
  const [data_2, setData_2] = useRecoilState(StyleQuizInputState_arr(0));
  const [data_3, setData_3] = useRecoilState(StyleQuizInputState_arr(1));
  const [data_4, setData_4] = useRecoilState(StyleQuizInputState_arr(2));
  const [data_5, setData_5] = useRecoilState(StyleQuizInputState_arr(3));
  const [data_6, setData_6] = useRecoilState(StyleQuizInputState_arr(4));
  const [data_7, setData_7] = useRecoilState(StyleQuizInputState_arr(5));
  const [data_cody, setData_cody] = useRecoilState(StyleQuizInputState_Cody);
  const [data_23, setData_23] = useRecoilState(StyleQuizInputState_arr(6));
  const [data_24, setData_24] = useRecoilState(StyleQuizInputState_arr(7));
  const [data_25, setData_25] = useRecoilState(StyleQuizInputState_arr(8));
  const [data_26, setData_26] = useRecoilState(StyleQuizInputState_arr(9));
  const [data_27, setData_27] = useRecoilState(StyleQuizInputState_num(0));
  const [data_28, setData_28] = useRecoilState(StyleQuizInputState_28);
  const [data_29, setData_29] = useRecoilState(StyleQuizInputState_29);
  const [data_30, setData_30] = useRecoilState(StyleQuizInputState_arr(12));
  const data_31_1 = useRecoilInput(StyleQuizInputState_str(0));
  const [data_31_2, setData_31_2] = useRecoilState(StyleQuizInputState_num(1));
  const data_32_1 = useRecoilInput(StyleQuizInputState_str(1));
  const data_32_2 = useRecoilInput(StyleQuizInputState_str(2));
  const [data_33, setData_33] = useRecoilState(StyleQuizInputState_33);
  const [data_34, setData_34] = useRecoilState(StyleQuizInputState_34);
  const [data_35, setData_35] = useRecoilState(StyleQuizInputState_arr(13));
  const [data_36, setData_36] = useRecoilState(StyleQuizInputState_arr(14));
  const [data_37, setData_37] = useRecoilState(StyleQuizInputState_arr(15));
  const [data_38, setData_38] = useRecoilState(StyleQuizInputState_arr(16));
  const [data_39, setData_39] = useRecoilState(StyleQuizInputState_arr(17));
  const [data_40, setData_40] = useRecoilState(StyleQuizInputState_arr(18));
  const [data_41, setData_41] = useRecoilState(StyleQuizInputState_arr(19));
  const [data_42, setData_42] = useRecoilState(StyleQuizInputState_42);
  const [data_43, setData_43] = useRecoilState(StyleQuizInputState_43);
  const [data_44, setData_44] = useRecoilState(StyleQuizInputState_44);
  const [data_45, setData_45] = useRecoilState(StyleQuizInputState_45);
  const [data_46, setData_46] = useRecoilState(StyleQuizInputState_46);

  // for router
  const router = useRouter();

  // prevent refresh
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "refresh";
    });
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pageNum]);

  switch (pageNum) {
    case 1:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <Page_1
              options={styleQuizData_M.page_1}
              inputData={data_1}
              setInputData={setData_1}
              onBackClick={() => setPageNum(0)}
              onNextClick={() => setPageNum(2)}
            />
          </TransitionPage>
        </>
      );
    case 2:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={styleQuizData_M.page_2}
              qText={"싫어하는 색상톤이 있으신가요?"}
              inputData={data_2}
              setInputData={setData_2}
              onBackClick={() => setPageNum(1)}
              onNextClick={() => setPageNum(3)}
            />
          </TransitionPage>
        </>
      );
    case 3:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={styleQuizData_M.page_3}
              qText={"싫어하는 색상이 있으신가요?"}
              inputData={data_3}
              setInputData={setData_3}
              onBackClick={() => setPageNum(2)}
              onNextClick={() => setPageNum(4)}
            />
          </TransitionPage>
        </>
      );
    case 4:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_4 : styleQuizData_W.page_4
              }
              qText={"싫어하는 패턴이 있으신가요?"}
              inputData={data_4}
              setInputData={setData_4}
              onBackClick={() => setPageNum(3)}
              onNextClick={() => setPageNum(5)}
            />
          </TransitionPage>
        </>
      );
    case 5:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_5 : styleQuizData_W.page_5
              }
              qText={"싫어하는 디테일이 있으신가요?"}
              inputData={data_5}
              setInputData={setData_5}
              onBackClick={() => setPageNum(4)}
              onNextClick={() => setPageNum(6)}
            />
          </TransitionPage>
        </>
      );
    case 6:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_6 : styleQuizData_W.page_6
              }
              qText={"싫어하는 소재가 있으신가요?"}
              inputData={data_6}
              setInputData={setData_6}
              onBackClick={() => setPageNum(5)}
              onNextClick={() => setPageNum(7)}
            />
          </TransitionPage>
        </>
      );
    case 7:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_7 : styleQuizData_W.page_7
              }
              qText={"싫어하는 넥라인 혹은 칼라가 있으신가요?"}
              inputData={data_7}
              setInputData={setData_7}
              onBackClick={() => setPageNum(6)}
              onNextClick={() => setPageNum(8)}
            />
          </TransitionPage>
        </>
      );
    case 8:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[0] : styleQuizData_W.style[0]
              }
              inputData={data_cody[0]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  0: param,
                })
              }
              onBackClick={() => setPageNum(7)}
              onNextClick={() => setPageNum(9)}
            />
          </TransitionPage>
        </>
      );
    case 9:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[1] : styleQuizData_W.style[1]
              }
              inputData={data_cody[1]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  1: param,
                })
              }
              onBackClick={() => setPageNum(8)}
              onNextClick={() => setPageNum(10)}
            />
          </TransitionPage>
        </>
      );
    case 10:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[2] : styleQuizData_W.style[2]
              }
              inputData={data_cody[2]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  2: param,
                })
              }
              onBackClick={() => setPageNum(9)}
              onNextClick={() => setPageNum(11)}
            />
          </TransitionPage>
        </>
      );
    case 11:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[3] : styleQuizData_W.style[3]
              }
              inputData={data_cody[3]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  3: param,
                })
              }
              onBackClick={() => setPageNum(10)}
              onNextClick={() => setPageNum(12)}
            />
          </TransitionPage>
        </>
      );
    case 12:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[4] : styleQuizData_W.style[4]
              }
              inputData={data_cody[4]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  4: param,
                })
              }
              onBackClick={() => setPageNum(11)}
              onNextClick={() => setPageNum(13)}
            />
          </TransitionPage>
        </>
      );
    case 13:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[5] : styleQuizData_W.style[5]
              }
              inputData={data_cody[5]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  5: param,
                })
              }
              onBackClick={() => setPageNum(12)}
              onNextClick={() => setPageNum(14)}
            />
          </TransitionPage>
        </>
      );
    case 14:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[6] : styleQuizData_W.style[6]
              }
              inputData={data_cody[6]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  6: param,
                })
              }
              onBackClick={() => setPageNum(13)}
              onNextClick={() => setPageNum(15)}
            />
          </TransitionPage>
        </>
      );
    case 15:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[7] : styleQuizData_W.style[7]
              }
              inputData={data_cody[7]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  7: param,
                })
              }
              onBackClick={() => setPageNum(14)}
              onNextClick={() => setPageNum(16)}
            />
          </TransitionPage>
        </>
      );
    case 16:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[8] : styleQuizData_W.style[8]
              }
              inputData={data_cody[8]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  8: param,
                })
              }
              onBackClick={() => setPageNum(15)}
              onNextClick={() => setPageNum(17)}
            />
          </TransitionPage>
        </>
      );
    case 17:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0 ? styleQuizData_M.style[9] : styleQuizData_W.style[9]
              }
              inputData={data_cody[9]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  9: param,
                })
              }
              onBackClick={() => setPageNum(16)}
              onNextClick={() => setPageNum(18)}
            />
          </TransitionPage>
        </>
      );
    case 18:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0
                  ? styleQuizData_M.style[10]
                  : styleQuizData_W.style[10]
              }
              inputData={data_cody[10]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  10: param,
                })
              }
              onBackClick={() => setPageNum(17)}
              onNextClick={() => setPageNum(19)}
            />
          </TransitionPage>
        </>
      );
    case 19:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0
                  ? styleQuizData_M.style[11]
                  : styleQuizData_W.style[11]
              }
              inputData={data_cody[11]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  11: param,
                })
              }
              onBackClick={() => setPageNum(18)}
              onNextClick={() => setPageNum(20)}
            />
          </TransitionPage>
        </>
      );
    case 20:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0
                  ? styleQuizData_M.style[12]
                  : styleQuizData_W.style[12]
              }
              inputData={data_cody[12]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  12: param,
                })
              }
              onBackClick={() => setPageNum(19)}
              onNextClick={() => setPageNum(21)}
            />
          </TransitionPage>
        </>
      );
    case 21:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0
                  ? styleQuizData_M.style[13]
                  : styleQuizData_W.style[13]
              }
              inputData={data_cody[13]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  13: param,
                })
              }
              onBackClick={() => setPageNum(20)}
              onNextClick={() => setPageNum(22)}
            />
          </TransitionPage>
        </>
      );
    case 22:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              src={
                sex === 0
                  ? styleQuizData_M.style[14]
                  : styleQuizData_W.style[14]
              }
              inputData={data_cody[14]}
              setInputData={(param) =>
                setData_cody({
                  ...data_cody,
                  14: param,
                })
              }
              onBackClick={() => setPageNum(21)}
              onNextClick={() => setPageNum(23)}
            />
          </TransitionPage>
        </>
      );
    case 23:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={sex === 0 ? styleQuizData_M.top : styleQuizData_W.top}
              qText={"다음 중 마음에 드는 상의를 모두 골라주세요."}
              inputData={data_23}
              setInputData={setData_23}
              isNoneGone={true}
              isLike={true}
              isTwo={true}
              onBackClick={() => setPageNum(22)}
              onNextClick={() => setPageNum(24)}
            />
          </TransitionPage>
        </>
      );
    case 24:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.pants : styleQuizData_W.pants
              }
              qText={"다음 중 마음에 드는 바지를 모두 골라주세요."}
              inputData={data_24}
              setInputData={setData_24}
              isNoneGone={true}
              isLike={true}
              isTwo={true}
              onBackClick={() => setPageNum(23)}
              onNextClick={() => {
                sex === 0 ? setPageNum(26) : setPageNum(25);
              }}
            />
          </TransitionPage>
        </>
      );
    case 25:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={styleQuizData_W.skirt}
              qText={"다음 중 마음에 드는 치마/원피스를 모두 골라주세요."}
              inputData={data_25}
              setInputData={setData_25}
              isNoneGone={true}
              isLike={true}
              isTwo={true}
              onBackClick={() => setPageNum(24)}
              onNextClick={() => setPageNum(26)}
            />
          </TransitionPage>
        </>
      );
    case 26:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 1 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.outer : styleQuizData_W.outer
              }
              qText={"다음 중 마음에 드는 아우터를 모두 골라주세요."}
              inputData={data_26}
              setInputData={setData_26}
              isNoneGone={true}
              isLike={true}
              isTwo={true}
              onBackClick={() => {
                sex === 0 ? setPageNum(24) : setPageNum(25);
              }}
              onNextClick={() => {
                sex === 0 ? setPageNum(28) : setPageNum(27);
              }}
            />
          </TransitionPage>
        </>
      );
    case 27:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PagePreferSorP
              inputData={data_27}
              setInputData={setData_27}
              onBackClick={() => setPageNum(26)}
              onNextClick={() => setPageNum(28)}
            />
          </TransitionPage>
        </>
      );
    case 28:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <Page_28
              options={styleQuizData_M.look}
              inputData={data_28}
              setInputData={setData_28}
              onBackClick={() => {
                sex === 0 ? setPageNum(26) : setPageNum(27);
              }}
              onNextClick={() => setPageNum(29)}
            />
          </TransitionPage>
        </>
      );
    case 29:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <Page_29
              options={styleQuizData_M.goods}
              inputData={data_29}
              setInputData={setData_29}
              onBackClick={() => setPageNum(28)}
              onNextClick={() => setPageNum(30)}
            />
          </TransitionPage>
        </>
      );
    case 30:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.brand : styleQuizData_W.brand
              }
              qText={"선호하는 브랜드가 있으신가요?"}
              inputData={data_30}
              setInputData={setData_30}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(29)}
              onNextClick={() => setPageNum(31)}
            />
          </TransitionPage>
        </>
      );
    case 31:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageBrand
              inputData={data_31_1}
              inputData_2={data_31_2}
              setInputData_2={setData_31_2}
              placeholder={sex === 0 ? "maje, Juun.J..." : "maje, Juun.J..."}
              onBackClick={() => setPageNum(30)}
              onNextClick={() => setPageNum(32)}
            />
          </TransitionPage>
        </>
      );
    case 32:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageBodySize
              inputData_1={data_32_1}
              inputData_2={data_32_2}
              onBackClick={() => setPageNum(31)}
              onNextClick={() => setPageNum(33)}
            />
          </TransitionPage>
        </>
      );
    case 33:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageTopSize
              options={
                sex === 0 ? styleQuizData_M.size_top : styleQuizData_W.size_top
              }
              inputData={data_33}
              setInputData={setData_33}
              props={sex === 0 ? props.size_top_M : props.size_top_W}
              onBackClick={() => setPageNum(32)}
              onNextClick={() => setPageNum(34)}
            />
          </TransitionPage>
        </>
      );
    case 34:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageBottomSize
              options={
                sex === 0
                  ? styleQuizData_M.size_bottom
                  : styleQuizData_W.size_bottom
              }
              inputData={data_34}
              setInputData={setData_34}
              props={props.size_bottom}
              onBackClick={() => setPageNum(33)}
              onNextClick={() => setPageNum(35)}
            />
          </TransitionPage>
        </>
      );
    case 35:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_35 : styleQuizData_W.page_35
              }
              qText={"어떤 기장의 상의를 선호하시나요?"}
              inputData={data_35}
              setInputData={setData_35}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(34)}
              onNextClick={() => setPageNum(36)}
            />
          </TransitionPage>
        </>
      );
    case 36:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_36 : styleQuizData_W.page_36
              }
              qText={"어떤 핏의 상의를 선호하시나요?"}
              inputData={data_36}
              setInputData={setData_36}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(35)}
              onNextClick={() => setPageNum(37)}
            />
          </TransitionPage>
        </>
      );
    case 37:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_37 : styleQuizData_W.page_37
              }
              qText={"어떤 핏의 바지를 선호하시나요?"}
              inputData={data_37}
              setInputData={setData_37}
              isNoneGone={true}
              isLike={true}
              isBig={true}
              onBackClick={() => setPageNum(36)}
              onNextClick={() => setPageNum(38)}
            />
          </TransitionPage>
        </>
      );
    case 38:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_38 : styleQuizData_W.page_38
              }
              qText={"어떤 밑위길이를 선호하시나요?"}
              inputData={data_38}
              setInputData={setData_38}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(37)}
              onNextClick={() => {
                sex === 0 ? setPageNum(41) : setPageNum(39);
              }}
            />
          </TransitionPage>
        </>
      );
    case 39:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={styleQuizData_W.page_39}
              qText={"어떤 종류의 치마를 선호하시나요?"}
              inputData={data_39}
              setInputData={setData_39}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(38)}
              onNextClick={() => setPageNum(40)}
            />
          </TransitionPage>
        </>
      );
    case 40:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={styleQuizData_W.page_40}
              qText={"어떤 기장의 치마를 선호하시나요?"}
              inputData={data_40}
              setInputData={setData_40}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => setPageNum(39)}
              onNextClick={() => setPageNum(41)}
            />
          </TransitionPage>
        </>
      );
    case 41:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 4 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageItems
              options={
                sex === 0 ? styleQuizData_M.page_41 : styleQuizData_W.page_41
              }
              qText={"어떤 종류의 신발을 선호하시나요?"}
              inputData={data_41}
              setInputData={setData_41}
              isNoneGone={true}
              isLike={true}
              onBackClick={() => {
                sex === 0 ? setPageNum(38) : setPageNum(40);
              }}
              onNextClick={() => setPageNum(42)}
            />
          </TransitionPage>
        </>
      );
    case 42:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageBodyType
              options={styleQuizData_M.page_42}
              inputData={data_42}
              setInputData={setData_42}
              props={props.body_type}
              onBackClick={() => setPageNum(41)}
              onNextClick={() => setPageNum(43)}
            />
          </TransitionPage>
        </>
      );
    case 43:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageFaceType
              options={styleQuizData_M.page_43}
              inputData={data_43}
              setInputData={setData_43}
              onBackClick={() => setPageNum(42)}
              onNextClick={() => setPageNum(44)}
            />
          </TransitionPage>
        </>
      );
    case 44:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PagePayment
              options={
                sex === 0 ? styleQuizData_M.payment : styleQuizData_W.payment
              }
              inputData={data_44}
              setInputData={setData_44}
              props={props.payment}
              onBackClick={() => setPageNum(43)}
              onNextClick={() => setPageNum(45)}
            />
          </TransitionPage>
        </>
      );
    case 45:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageUpload
              inputData={data_45}
              setInputData={setData_45}
              onBackClick={() => setPageNum(44)}
              onNextClick={() => setPageNum(46)}
            />
          </TransitionPage>
        </>
      );
    case 46:
      return (
        <>
          <Header
            className="header"
            style={{ justifyContent: "center", fontSize: "2rem" }}
          >
            Style Quiz
          </Header>
          <Bar pageNum={sex === 0 ? pageNum - 2 : pageNum} maxNum={46} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageJob
              options={styleQuizData_M.job}
              inputData={data_46}
              setInputData={setData_46}
              onBackClick={() => setPageNum(45)}
              onNextClick={() => router.replace('/styleupdate')}
            />
          </TransitionPage>
        </>
      );
    default:
      return (
        <TransitionPage type="page" pagenum={pageNum}>
          <Page_0 onNextClick={() => setPageNum(1)} />
        </TransitionPage>
      );
  }
};

export default styleQuiz;

// url 직접 접근 방지
// export async function getServerSideProps({ req, res, params }) {
//   if (!req.headers.referer) {
//     res.statusCode = 462;
//     res.setHeader("Location", `/`); // Replace <link> with your url link
//     res.end();
//   }
//   return { props: {} };
// }
