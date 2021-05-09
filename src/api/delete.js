import axios from "axios";

const deleteData = async (id) => {
  try {
    const { data } = await axios({
      API_DOMAIN,
      url: `/api/${id}`,
      method: "delete",
    });
    console.log("[SUCCESS] DELETE", data);
    return data;
  } catch (e) {
    console.log("[FAIL] DELETE", e);
    return e;
  }
};

const deleteApi = {
  deleteData,
};

export default deleteApi;
