import axios from "axios";

const getData = async (id) => {
  try {
    const { data } = await axios({
      API_DOMAIN,
      url: `/api/${id}`,
      method: "get",
    });
    console.log("[SUCCESS] GET", data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET", e);
    return e;
  }
};

const getApi = {
  getData,
};

export default getApi;
