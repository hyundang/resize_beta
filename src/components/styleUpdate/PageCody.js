import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom } from "../common";
import Image from "next/image";
// assets
import btn_good from "../../assets/icons/btn-good.svg";
import btn_soso from "../../assets/icons/btn-soso.svg";
import btn_bad from "../../assets/icons/btn-bad.svg";
import btn_good_active from "../../assets/icons/btn-good-active.svg";
// import btn_soso_active from "../../assets/icons/btn-soso-active.svg";
// import btn_bad_active from "../../assets/icons/btn-bad-active.svg";
// recoil
import { useRecoilState } from "recoil";
import { StyleQuizInputState_Cody } from "../../states/styleQuiz";
// data
import { styleQuizData_M } from "../../lib/data/styleQuiz_M";

const PageCody = ({ onNextClick, onBackClick }) => {
  // for input datas
  const [data, setData] = useRecoilState(StyleQuizInputState_Cody);
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
          코디 정보 수정
        </Text>
        <Text style={{ marginBottom: "4rem", fontWeight: "400" }}>
          마이페이지에서 언제든지 업데이트가 가능합니다.
        </Text>
        <CodyContainer>
          {styleQuizData_M.style.map((item, idx) => {
            return (
              <Cody
                src={item}
                data={data[idx]}
                setData={(param) =>
                  setData({
                    ...data,
                    [idx]: param,
                  })
                }
              />
            );
          })}
        </CodyContainer>
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

export default PageCody;

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

const CodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const Cody = ({ src, data, setData }) => {
  return (
    <CodyBox>
      <Image src={src} width={135} height={135} loading="lazy" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Btn
          src={data === 0 ? btn_good_active : btn_good}
          onClick={() => setData(0)}
        />
        <Btn src={btn_soso} onClick={() => setData(1)} />
        <Btn src={btn_bad} onClick={() => setData(2)} />
      </div>
    </CodyBox>
  );
};

const CodyBox = styled.div`
  width: 13.5rem;
  margin-bottom: 1.6rem;

  display: flex;
  flex-direction: column;
`;

const Btn = styled.img`
  width: 4.5rem;
  height: 4.6rem;
`;
