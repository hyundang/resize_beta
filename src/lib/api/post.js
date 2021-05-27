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
    return e;
  }
};

const postStyleQuiz = async (header, body) => {
  try {
    const { data } = await axios.post({
      baseURL: API_DOMAIN,
      header,
      url: `/api/styleQuiz/StyleQuiz/`,
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
    const { data } = await axios.post({
      baseURL: API_DOMAIN,
      header,
      url: `/api/user/getUserID/`,
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
  postStyleQuiz,
  getUserID,
  login,
};

export default postApi;
