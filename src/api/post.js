import axios from "axios";

const postData = async (id) => {
  try {
    const { data } = await axios({
      API_DOMAIN,
      url: `/api/${id}`,
      method: "post",
    });
    console.log("[SUCCESS] POST", data);
    return data;
  } catch (e) {
    console.log("[FAIL] POST", e);
    return e;
  }
};

const postApi = {
  postData,
};

export default postApi;
