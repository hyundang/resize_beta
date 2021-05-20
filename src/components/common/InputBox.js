import React, { useState, useEffect } from "react";
import styled from "styled-components";
// assets
import ic_del from "../../assets/icons/ic-delete.svg";

const InputBox = ({ placeholder, input, type, maxLength, unit }) => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  useEffect(() => {
    input.value !== "" ? setIsBtnShown(true) : setIsBtnShown(false);
  }, [input.value]);

  return (
    <Wrap>
      <Box
        isShown={isBtnShown}
        placeholder={placeholder}
        onChange={input.onChange}
        value={input.value}
        type={type === "number" ? "number" : "text"}
        pattern={type === "number" ? "d*" : "none"}
        maxLength={maxLength ? maxLength : "none"}
      />
      {type === "number" ? (
        <UnitText>{unit}</UnitText>
      ) : (
        <DelBtn
          isShown={isBtnShown}
          onClick={() => input.setValue("")}
          src={ic_del}
        />
      )}
    </Wrap>
  );
};

export default InputBox;

const Wrap = styled.div`
  position: relative;
  
  width: 100%;
  height: 4.4rem;
`;

const DelBtn = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  width: 4.2rem;
  height: 4.2rem;
  padding: 1.2rem;

  display: ${(props) => (props.isShown ? "box" : "none")};
`;

const Box = styled.input`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 4.4rem;
  padding-left: 1.2rem;
  padding-right: ${(props) =>
    props.type === "number" ? "6rem" : props.isShown ? "4.2rem" : "1.2rem"};
  border-radius: 0.5rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_2};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: "Noto Sans KR";
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_4};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
  }
  &:focus {
    outline: none;
    border: solid 0.1rem ${({ theme }) => theme.colors.gray_4};
  }
`;

const UnitText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  padding: 1rem 2rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_4};
`;
