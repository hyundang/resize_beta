import { atom, atomFamily, selector } from "recoil";
import { UserState } from "./register";

export const StyleQuizPageNumState = atom({
  key: "StyleQuizPageNumState",
  default: 0,
});

export const StyleQuizInputState_1 = atom({
  key: "StyleQuizInputState_1",
  default: {
    purpose: [],
    age: -1,
  },
});

export const StyleQuizInputState_28 = atom({
  key: "StyleQuizInputState_28",
  default: {
    looks: [],
    looks_ect: "",
  },
});

export const StyleQuizInputState_29 = atom({
  key: "StyleQuizInputState_29",
  default: {
    goods: [],
    goods_ect: "",
  },
});

export const StyleQuizInputState_Cody = atom({
  key: "StyleQuizInputState_Cody",
  default: {
    0: -1,
    1: -1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
    6: -1,
    7: -1,
    8: -1,
    9: -1,
    10: -1,
    11: -1,
    12: -1,
    13: -1,
    14: -1,
  },
});

export const StyleQuizInputState_33 = atom({
  key: "StyleQuizInputState_33",
  default: {
    top_1: [],
    top_2: [],
    top_3: [],
    bra_1: [],
    bra_2: [],
  },
});

export const StyleQuizInputState_34 = atom({
  key: "StyleQuizInputState_34",
  default: {
    pants_1: [],
    pants_2: [],
    pants_3: -1,
    shoes: [],
  },
});

export const StyleQuizInputState_42 = atom({
  key: "StyleQuizInputState_42",
  default: {
    face: -1,
    neck: -1,
    shoulder: -1,
    arm: -1,
    chest: -1,
    waist: -1,
    pelvis: -1,
    hip: -1,
    thigh: -1,
    calf: -1,
    leg: -1,
    upBody: -1,
    ratio: -1,
  },
});

export const StyleQuizInputState_43 = atom({
  key: "StyleQuizInputState_43",
  default: {
    face: -1,
    skin: -1,
    shoulder: -1,
  },
});

export const StyleQuizInputState_44 = atom({
  key: "StyleQuizInputState_44",
  default: {
    tshirts: [],
    shirts: [],
    neat: [],
    pants: [],
    jacket: [],
    coat: [],
    shoes: [],
    bag: [],
  },
});

export const StyleQuizInputState_45 = atom({
  key: "StyleQuizInputState_45",
  default: {
    text: "",
    img_face: [],
    img_body: [],
  },
});

export const StyleQuizInputState_46 = atom({
  key: "StyleQuizInputState_46",
  default: {
    job: -1,
    industry: -1,
    industry_ect: "",
    task: -1,
    task_ect: "",
  },
});

export const StyleQuizInputState_arr = atomFamily({
  key: "StyleQuizInputState_arr",
  default: [-1],
});

export const StyleQuizInputState_num = atomFamily({
  key: "StyleQuizInputState_num",
  default: -1,
});

export const StyleQuizInputState_str = atomFamily({
  key: "StyleQuizInputState_str",
  default: "",
});

export const StyleQuizPostState = selector({
  key: "StyleQuizPostState",
  get: ({ get }) => {
    return {
      user: get(UserState),
      page_1: get(StyleQuizInputState_1),
      color_tone: get(StyleQuizInputState_arr(0)),
      color: get(StyleQuizInputState_arr(1)),
      pattern: get(StyleQuizInputState_arr(2)),
      detail: get(StyleQuizInputState_arr(3)),
      material: get(StyleQuizInputState_arr(4)),
      neck: get(StyleQuizInputState_arr(5)),
      cody: get(StyleQuizInputState_Cody),
      top: get(StyleQuizInputState_arr(6)),
      pants: get(StyleQuizInputState_arr(7)),
      skirt: get(StyleQuizInputState_arr(8)),
      outer: get(StyleQuizInputState_arr(9)),
      prefer: get(StyleQuizInputState_num(0)),
      often_cody: get(StyleQuizInputState_arr(10)),
      try_cody: get(StyleQuizInputState_arr(11)),
      brand_1: get(StyleQuizInputState_arr(12)),
      brand_2: {
        name: get(StyleQuizInputState_str(0)),
        popular: get(StyleQuizInputState_num(1)),
      },
      body_size: {
        height: get(StyleQuizInputState_str(1)),
        weight: get(StyleQuizInputState_str(2)),
      },
      top_size: get(StyleQuizInputState_33),
      bottom_size: get(StyleQuizInputState_34),
      top_len: get(StyleQuizInputState_arr(13)),
      top_fit: get(StyleQuizInputState_arr(14)),
      pants_fit: get(StyleQuizInputState_arr(15)),
      patns_len: get(StyleQuizInputState_arr(16)),
      skirt_type: get(StyleQuizInputState_arr(17)),
      skirt_len: get(StyleQuizInputState_arr(18)),
      shoes_type: get(StyleQuizInputState_arr(19)),
      body_type: get(StyleQuizInputState_42),
      face_type: get(StyleQuizInputState_43),
      payment: get(StyleQuizInputState_44),
      ect: get(StyleQuizInputState_45).text,
      job: get(StyleQuizInputState_46),
    };
  },
});
