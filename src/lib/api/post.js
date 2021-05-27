import axios from "axios";

const postStyleQuiz = async (header, body) => {
  try {
    const { data } = await axios.post({
      baseURL: API_DOMAIN,
      header: header,
      url: `/api/styleQuiz/StyleQuiz`,
      body,
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
      header: header,
      url: `/api/user/getUserID`,
      body,
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
};

export default postApi;
