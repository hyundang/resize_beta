import React, { useState } from "react";
import styled from "styled-components";
// address api
import DaumPostcode from "react-daum-postcode";

const SigninPage = () => {
  const [isAddress, setIsAddress] = useState("");
  const [isZoneCode, setIsZoneCode] = useState();

  const handleComplete = () => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsZoneCode(data.zonecode);
    setIsAddress(fullAddress);
    setIsPostOpen(false);
  };

  return (
    <>
      <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
    </>
  );
};

export default SigninPage;

const postCodeStyle = {
  display: "block",
  position: "absolute",
  width: "30rem",
  height: "50rem",
  padding: "1rem",
};
