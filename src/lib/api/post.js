import axios from "axios";

const login = async (body) => {
  try {
    const { data } = await axios.post({
      baseURL: API_DOMAIN,
      url: `/api/token/`,
      data: body,
    });
    console.log("[SUCCESS] LOGIN", data);
    return data;
  } catch (e) {
    console.log("[FAIL] LOGIN", e);
  }
};

const signup = async (body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/api/user/register`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] SIGN UP", data);
    return data;
  } catch (e) {
    console.log("[FAIL] SIGN UP", e);
    return e;
  }
};

const phoneCheck = async (body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/api/user/phoneCheck`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] PHONE NUMBER CHECK", data);
    return data;
  } catch (e) {
    console.log("[FAIL] PHONE NUMBER CHECK", e);
    return e;
  }
};

const reqCode = async (body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/api/user/sendSMS`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] REQUEST CODE", data);
    return data;
  } catch (e) {
    console.log("[FAIL] REQUEST CODE", e);
    return e;
  }
};

const codeCheck = async (body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/api/user/vertifySMS`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] CODE NUMBER CHECK", data);
    return data;
  } catch (e) {
    console.log("[FAIL] CODE NUMBER CHECK", e);
    return e;
  }
};

const postStyleQuiz = async (header, body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      header: header,
      url: `/api/styleQuiz/StyleQuiz`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] POST STYLE QUIZ DATA", data);
    return data;
  } catch (e) {
    console.log("[FAIL] POST STYLE QUIZ DATA", e);
    return e;
  }
};

const getUserID = async (header, body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      header: header,
      url: `/api/user/getUserID`,
      method: "post",
      data: body,
    });
    console.log("[SUCCESS] GET USER ID", data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET USER ID", e);
    return e;
  }
};

const postApi = {
  login,
  signup,
  phoneCheck,
  reqCode,
  codeCheck,
  postStyleQuiz,
  getUserID,
};

export default postApi;
