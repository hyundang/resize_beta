import { atom, selector } from "recoil";

export const UserState = atom({
  key: "UserState",
  default: -1,
});

export const getUserSelector = selector({
  key: "user/get",
  get: async () => {
    const { data } = await axios.post({
      baseURL: API_DOMAIN,
      header: localStorage.getItem("token"),
      url: `/api/user/getUserID`,
      data: { phone: localStorage.getItem("phone") },
    });
    return data.id;
  },
  set: ({ set }, newValue) => {
    set(UserState, newValue);
  },
});
