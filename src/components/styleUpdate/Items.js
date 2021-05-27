import React from "react";
import styled from "styled-components";
// assets
import ic_upload from "../../assets/icons/ic-upload.svg";
import ic_delete from "../../assets/icons/btn-remove.svg";

const Items = ({ options, inputData, setInputData, qtext, setIsOpen }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "18rem",
        marginBottom: "1.6rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text>{qtext}</Text>
      <ImgContainer id="img_container">
        <ImgWrap id="img_wrap">
          <ImgInputBox id="img_inputbox" onClick={() => setIsOpen(true)}>
            <img
              id="ic_upload"
              src={ic_upload}
              style={{ marginBottom: "0.9rem" }}
            />
          </ImgInputBox>
          {inputData.map((item) => {
            return (
              <Picture
                className="input_img"
                id={item}
                key={item}
                src={options[item].src}
              >
                <DelIcon
                  className="img_del_icon"
                  id={item}
                  src={ic_delete}
                  onClick={(e) =>
                    setInputData(
                      inputData.filter((item) => item !== Number(e.target.id))
                    )
                  }
                />
              </Picture>
            );
          })}
        </ImgWrap>
      </ImgContainer>
    </div>
  );
};

export default Items;

const Text = styled.div`
  position: absolute;
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;

const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 14rem;
  margin-top: 3.3rem;
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
