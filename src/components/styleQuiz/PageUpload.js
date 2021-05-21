import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// components
import { Bottom, InputBoxBig } from "../common";
// assets
import ic_upload from "../../assets/icons/ic-upload.svg";
import ic_delete from "../../assets/icons/btn-remove.svg";

const PageUpload = ({ inputData, setInputData, onBackClick, onNextClick }) => {
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);
  // for file delete
  const file = useRef();

  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      text: value,
    });
  };

  const handleInputFile = (e) => {
    const len = e.target.files.length;
    const files = e.target.files;
    let urls = inputData[e.target.id];
    if (inputData[e.target.id].length + len <= 5) {
      for (let i = 0; i < len; i++) {
        let img_url = URL.createObjectURL(files[i]);
        urls = urls.concat([img_url]);
      }
      setInputData({
        ...inputData,
        [e.target.id]: urls,
      });
    } else {
      file.current.value = "";
    }
  };

  const handleFaceDelClick = async (e) => {
    file.current.value = "";
    setInputData({
      ...inputData,
      img_face: inputData.img_face.filter((item, idx) => {
        return e.target.id != String(idx);
      }),
    });
  };

  const handleBodyDelClick = async (e) => {
    file.current.value = "";
    setInputData({
      ...inputData,
      img_body: inputData.img_body.filter((item, idx) => {
        return e.target.id != String(idx);
      }),
    });
  };

  // for bottom shadow
  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);

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
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "-0.04rem",
          }}
        >
          본인에 대해 더 이야기하고 싶은 게 있으신가요?
        </Text>
        <Text>답변은 선택사항입니다.</Text>
        <InputBoxBig
          text="placeholder 입니다."
          value={inputData.text}
          onChange={handleInputChange}
        />
        <div style={{ height: "4rem" }} />
        <Text
          style={{
            marginBottom: "0.8rem",
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "-0.04rem",
          }}
        >
          본인의 사진을 업로드해주세요.
        </Text>
        <Text>
          답변은 선택사항입니다. 업로드 된 이미지는 보다 정확한 스타일링을 위해
          전담 큐레이터에게 전달됩니다. 이외 목적으로는 절대 사용되지 않습니다.
          최대한 실물과 가까운 사진을 업로드해주세요. (각 최대 5장)
        </Text>
        <ImgContainer id="img_container">
          <ImgWrap id="img_wrap">
            <ImgInputBox htmlFor="img_face" id="img_inputbox">
              <img
                id="ic_upload"
                src={ic_upload}
                style={{ marginBottom: "0.9rem" }}
              />
              <Text
                style={{
                  marginBottom: "0",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"얼굴 사진을\n업로드 해주세요."}
              </Text>
            </ImgInputBox>
            <input
              type="file"
              id="img_face"
              accept="image/jpeg, image/jpg, image/png"
              multiple={true}
              ref={file}
              onChange={handleInputFile}
              style={{ width: "0", height: "0" }}
            />
            {inputData.img_face.map((item, idx) => {
              return (
                <Picture className="input_img" id={idx} key={idx} src={item}>
                  <DelIcon
                    className="img_del_icon"
                    id={idx}
                    src={ic_delete}
                    onClick={handleFaceDelClick}
                  />
                </Picture>
              );
            })}
          </ImgWrap>
        </ImgContainer>
        <ImgContainer id="img_container" style={{ marginTop: "16.2rem" }}>
          <ImgWrap id="img_wrap">
            <ImgInputBox htmlFor="img_body" id="img_inputbox">
              <img
                id="ic_upload"
                src={ic_upload}
                style={{ marginBottom: "0.9rem" }}
              />
              <Text
                style={{
                  marginBottom: "0",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"전신 사진을\n업로드 해주세요."}
              </Text>
            </ImgInputBox>
            <input
              type="file"
              id="img_body"
              accept="image/jpeg, image/jpg, image/png"
              multiple={true}
              ref={file}
              onChange={handleInputFile}
              style={{ width: "0", height: "0" }}
            />
            {inputData.img_body.map((item, idx) => {
              return (
                <Picture className="input_img" id={idx} key={idx} src={item}>
                  <DelIcon
                    className="img_del_icon"
                    id={idx}
                    src={ic_delete}
                    onClick={handleBodyDelClick}
                  />
                </Picture>
              );
            })}
          </ImgWrap>
        </ImgContainer>
        <div
          style={{
            position: "absolute",
            left: "0",
            zIndex: "2",
            width: "100%",
            height: "13.2rem",
            marginTop: "30.2rem",
          }}
          ref={target}
        />
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

export default PageUpload;

const Container = styled.div`
  width: 100%;
  margin-top: 8.7rem;
  padding: 4rem 2.4rem;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  word-break: break-all;
`;

const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 14rem;
  overflow-x: scroll;
`;

const ImgWrap = styled.div`
  position: absolute;
  padding-left: 2.4rem;
  padding-right: 1.2rem;
  display: flex;
  flex-direction: row;
`;

const ImgInputBox = styled.label`
  width: 14rem;
  height: 14rem;
  margin-right: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_1};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.div`
  width: 14rem;
  height: 14rem;
  margin-right: 1.2rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
  border-radius: 0.8rem;
  background: url(${(props) => props.src}) center center / cover;
`;

const DelIcon = styled.img`
  position: relative;
  top: 0rem;
  left: 78%;

  width: 3rem;
  height: 3rem;
`;
