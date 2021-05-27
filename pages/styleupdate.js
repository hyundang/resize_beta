import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// components
import { Picker, Tags } from "../src/components/common";
import {
  Header,
  PageSize,
  PageMy,
  PageStyle,
  PagePayment,
  PageCody,
} from "../src/components/styleUpdate";
import TransitionPage from "../src/components/PageTransition";
// data
import { styleQuizData_M } from "../src/lib/data/styleQuiz_M";
import { styleQuizData_W } from "../src/lib/data/styleQuiz_W";
// recoil
import { useRecoilValue } from "recoil";
import { StyleQuizPostState } from "../src/states/styleQuiz";
// api
import { postApi } from "../src/lib/api";

const styleUpdate = () => {
  // for page routing
  const [pageNum, setPageNum] = useState(0);
  // for post data
  const router = useRouter();
  const postData = useRecoilValue(StyleQuizPostState);

  const handleSubmit = () => {
    console.log(postData);
    // api submit
    postApi.postStyleQuiz(
      { Authorization: localStorage.getItem("userToken") },
      postData
    );
    router.push("/");
  };

  switch (pageNum) {
    case 1:
      return (
        <>
          <Header pageNum={pageNum} setPageNum={setPageNum} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageStyle
              onBackClick={() => setPageNum(0)}
              onNextClick={() => setPageNum(2)}
            />
          </TransitionPage>
        </>
      );
    case 2:
      return (
        <>
          <Header pageNum={pageNum} setPageNum={setPageNum} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageCody
              onBackClick={() => setPageNum(1)}
              onNextClick={() => setPageNum(3)}
            />
          </TransitionPage>
        </>
      );
    case 3:
      return (
        <>
          <Header pageNum={pageNum} setPageNum={setPageNum} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageSize
              onBackClick={() => setPageNum(2)}
              onNextClick={() => setPageNum(4)}
            />
          </TransitionPage>
        </>
      );
    case 4:
      return (
        <>
          <Header pageNum={pageNum} setPageNum={setPageNum} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PagePayment
              onBackClick={() => setPageNum(3)}
              onNextClick={handleSubmit}
            />
          </TransitionPage>
        </>
      );
    default:
      return (
        <>
          <Header pageNum={pageNum} setPageNum={setPageNum} />
          <TransitionPage type="page" pagenum={pageNum}>
            <PageMy onNextClick={() => setPageNum(1)} />
          </TransitionPage>
        </>
      );
  }
};

export default styleUpdate;
