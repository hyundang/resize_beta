// for question options
const page_1 = {
  1: [
    "최근 유행하는 옷을 입고 싶어서",
    "원하는 스타일이 있지만 찾는게 어려워서",
    "나에게 어울리는 옷을 알고 싶어서",
    "새로운 코디를 시도해보고 싶어서",
    "옷을 구매하는 게 귀찮아서",
    "중요한 행사를 앞두고 있어서",
  ],
  2: [
    { value: 0, label: "24세 이하" },
    { value: 1, label: "25-29세" },
    { value: 2, label: "30-34세" },
    { value: 3, label: "35-39세" },
    { value: 4, label: "40세 이상" },
  ],
};

const page_2 = [
  { src: "/imgs/item.png", label: "원색", value: 0 },
  { src: "/imgs/item.png", label: "파스텔색", value: 1 },
  { src: "/imgs/item.png", label: "무채색", value: 2 },
  { src: "/imgs/item.png", label: "채도 낮은 색", value: 3 },
  { src: "/imgs/item.png", label: "형광색", value: 4 },
  { src: "/imgs/item.png", label: "메탈릭", value: 5 },
];

const page_3 = [
  { value: 0, src: "/imgs/item.png", label: "화이트" },
  { value: 1, src: "/imgs/item.png", label: "아이보리" },
  { value: 2, src: "/imgs/item.png", label: "베이지" },
  { value: 3, src: "/imgs/item.png", label: "네이비" },
  { value: 4, src: "/imgs/item.png", label: "그레이" },
  { value: 5, src: "/imgs/item.png", label: "카키" },
  { value: 6, src: "/imgs/item.png", label: "블랙" },
  { value: 7, src: "/imgs/item.png", label: "레드" },
  { value: 8, src: "/imgs/item.png", label: "버건디" },
  { value: 9, src: "/imgs/item.png", label: "핑크" },
  { value: 10, src: "/imgs/item.png", label: "오렌지" },
  { value: 11, src: "/imgs/item.png", label: "옐로우" },
  { value: 12, src: "/imgs/item.png", label: "그린" },
  { value: 13, src: "/imgs/item.png", label: "스카이블루" },
  { value: 14, src: "/imgs/item.png", label: "블루" },
  { value: 15, src: "/imgs/item.png", label: "퍼플" },
  { value: 16, src: "/imgs/item.png", label: "브라운" },
];

const page_4 = [
  {
    value: 0,
    src: "/imgs/styleQuiz/patterns/horizontal_stripe.png",
    label: "가로 스트라이프",
  },
  {
    value: 1,
    src: "/imgs/styleQuiz/patterns/vertical_stripe.png",
    label: "세로 스트라이프",
  },
  { value: 2, src: "/imgs/styleQuiz/patterns/floral.png", label: "플로럴" },
  { value: 3, src: "/imgs/styleQuiz/patterns/dot.png", label: "도트" },
  { value: 4, src: "/imgs/styleQuiz/patterns/leopard.png", label: "레오파드" },
  { value: 5, src: "/imgs/styleQuiz/patterns/paisley.png", label: "페이즐리" },
  {
    value: 6,
    src: "/imgs/styleQuiz/patterns/small_check.png",
    label: "스몰 체크",
  },
  { value: 7, src: "/imgs/styleQuiz/patterns/big_check.png", label: "빅 체크" },
  { value: 8, src: "/imgs/styleQuiz/patterns/argyle.png", label: "아가일" },
  { value: 9, src: "/imgs/styleQuiz/patterns/twist.png", label: "꽈배기" },
  {
    value: 10,
    src: "/imgs/styleQuiz/patterns/military.png",
    label: "밀리터리",
  },
  {
    value: 11,
    src: "/imgs/styleQuiz/patterns/herringbone.png",
    label: "헤링본",
  },
  { value: 12, src: "/imgs/styleQuiz/patterns/quilting.png", label: "퀼팅" },
];

const page_5 = [
  { value: 0, src: "/imgs/styleQuiz/details/hood.png", label: "후드" },
  { value: 1, src: "/imgs/styleQuiz/details/item.png", label: "핀턱" },
  { value: 2, src: "/imgs/styleQuiz/details/item.png", label: "롤업" },
  { value: 3, src: "/imgs/styleQuiz/details/item.png", label: "스트링" },
  { value: 4, src: "/imgs/styleQuiz/details/item.png", label: "포켓" },
];

const page_6 = [
  { value: 0, src: "/imgs/styleQuiz/materials/leather.png", label: "가죽" },
  { value: 1, src: "/imgs/styleQuiz/materials/angora.png", label: "앙고라" },
  { value: 2, src: "/imgs/styleQuiz/materials/nylon.png", label: "나일론" },
  {
    value: 3,
    src: "/imgs/styleQuiz/materials/corduroy.png",
    label: "코듀로이",
  },
  { value: 4, src: "/imgs/styleQuiz/materials/velvet.png", label: "벨벳" },
  { value: 5, src: "/imgs/styleQuiz/materials/linen.png", label: "린넨" },
  { value: 6, src: "/imgs/styleQuiz/materials/silk.png", label: "실크(새틴)" },
  { value: 7, src: "/imgs/styleQuiz/materials/fleece.png", label: "플리스" },
  { value: 8, src: "/imgs/styleQuiz/materials/item.png", label: "데님" },
];

const page_7 = [
  { value: 0, src: "/imgs/item.png", label: "U넥" },
  { value: 1, src: "/imgs/item.png", label: "크루넥(시보리)" },
  { value: 2, src: "/imgs/item.png", label: "V넥" },
  { value: 3, src: "/imgs/item.png", label: "반폴라(모크넥)" },
  { value: 4, src: "/imgs/item.png", label: "목폴라(터틀넥)" },
  { value: 5, src: "/imgs/item.png", label: "칼라" },
  { value: 6, src: "/imgs/item.png", label: "차이나칼라" },
  { value: 7, src: "/imgs/item.png", label: "오픈칼라" },
  { value: 8, src: "/imgs/item.png", label: "헨리넥" },
];

const style = [
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
  "/imgs/item.png",
];

const top = [
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
];

const pants = [
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
];

const outer = [
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
  { src: "/imgs/item.png" },
];

const look = [
  { value: 0, label: "데이트룩" },
  { value: 1, label: "하객룩" },
  { value: 2, label: "원마일웨어룩" },
  { value: 3, label: "출근룩" },
  { value: 4, label: "운동룩" },
  { value: 5, label: "기타" },
];

const goods = [
  { value: 0, label: "V넥 티셔츠" },
  { value: 1, label: "조거팬츠" },
  { value: 2, label: "와이드핏 슬랙스" },
  { value: 3, label: "스키니진" },
  { value: 4, label: "가디건" },
  { value: 5, label: "반바지" },
  { value: 6, label: "바람막이" },
  { value: 7, label: "항공점퍼" },
  { value: 8, label: "데님자켓" },
  { value: 9, label: "트렌치코트" },
  { value: 10, label: "블레이저" },
  { value: 11, label: "코트" },
  { value: 12, label: "맨투맨" },
  { value: 13, label: "후드티셔츠" },
  { value: 14, label: "패딩" },
  { value: 15, label: "카라티셔츠" },
  { value: 16, label: "조끼" },
  { value: 17, label: "니트스웨터" },
  { value: 18, label: "기타" },
];

const brand = [
  { src: "/imgs/item.png", label: "캐주얼" },
  { src: "/imgs/item.png", label: "클래식포멀" },
  { src: "/imgs/item.png", label: "로맨틱페미닌" },
  { src: "/imgs/item.png", label: "러블리" },
  { src: "/imgs/item.png", label: "럭셔리" },
  { src: "/imgs/item.png", label: "기타" },
];

const brand_pop = [
  "유명한 브랜드가 좋아요",
  "알려지지 않은 브랜드가 좋아요",
  "브랜드는 상관 없어요",
];

const brand_pop = [
  "유명한 브랜드가 좋아요",
  "알려지지 않은 브랜드가 좋아요",
  "브랜드는 상관 없어요"
];

const size_top = [
  {
    top_1: [
      { value: 0, label: "S 이하" },
      { value: 1, label: "M" },
      { value: 2, label: "L" },
      { value: 3, label: "XL" },
      { value: 4, label: "XXL 이상" },
    ],
    label: "항목 1",
  },
  {
    top_2: [
      { value: 0, label: "90 이하" },
      { value: 1, label: "95" },
      { value: 2, label: "100" },
      { value: 3, label: "110" },
      { value: 4, label: "110 이상" },
    ],
    label: "항목 2",
  },
];

const size_bottom = [
  {
    pants_1: [
      { value: 0, label: "27 이하" },
      { value: 1, label: "28" },
      { value: 2, label: "29" },
      { value: 3, label: "30" },
      { value: 4, label: "31" },
      { value: 5, label: "32" },
      { value: 6, label: "33" },
      { value: 7, label: "34" },
      { value: 8, label: "35" },
      { value: 9, label: "36 이상" },
    ],
    label: "항목 1",
  },
  {
    pants_2: [
      { value: 0, label: "S 이하" },
      { value: 1, label: "M" },
      { value: 2, label: "L" },
      { value: 3, label: "XL" },
      { value: 4, label: "XXL 이상" },
    ],
    label: "항목 2",
  },
  {
    pants_3: [
      { value: 0, label: "허리에 맞춘다" },
      { value: 1, label: "허벅지에 맞춘다" },
    ],
    label: "항목 3",
  },
  {
    shoes: [
      { value: 0, label: "240 이하" },
      { value: 1, label: "245" },
      { value: 2, label: "250" },
      { value: 3, label: "255" },
      { value: 4, label: "260" },
      { value: 5, label: "265" },
      { value: 6, label: "270" },
      { value: 7, label: "275" },
      { value: 8, label: "280" },
      { value: 9, label: "285" },
      { value: 10, label: "290" },
      { value: 11, label: "295 이상" },
    ],
    label: "신발 사이즈",
  },
];

const page_35 = [
  { value: 0, src: "/imgs/item.png", label: "숏\n(허리에 위치)" },
  { value: 1, src: "/imgs/item.png", label: "레귤러\n(엉덩이에 위치)" },
  { value: 2, src: "/imgs/item.png", label: "롱\n(허벅지에 위치)" },
];

const page_36 = [
  { value: 0, src: "/imgs/item.png", label: "타이트핏" },
  { value: 1, src: "/imgs/item.png", label: "레귤러핏" },
  { value: 2, src: "/imgs/item.png", label: "루즈핏" },
  { value: 3, src: "/imgs/item.png", label: "오버핏" },
];

const page_37 = [
  { value: 0, src: "/imgs/item.png", label: "스키니핏" },
  { value: 1, src: "/imgs/item.png", label: "슬림핏" },
  { value: 2, src: "/imgs/item.png", label: "스트레이트핏" },
  { value: 3, src: "/imgs/item.png", label: "와이드핏" },
  { value: 4, src: "/imgs/item.png", label: "테이퍼드핏\n(배기핏)" },
  { value: 5, src: "/imgs/item.png", label: "부츠컷" },
  { value: 6, src: "/imgs/item.png", label: "벌룬핏" },
];

const page_38 = [
  { value: 0, src: "/imgs/item.png", label: "골반에 위치\n(밑위길이 짧음)" },
  {
    value: 1,
    src: "/imgs/item.png",
    label: "골반과 허리\n사이에 위치\n(밑위길이 중간)",
  },
  { value: 2, src: "/imgs/item.png", label: "허리에 위치\n(밑위길이 긺)" },
];

const page_41 = [
  { value: 0, src: "/imgs/item.png", label: "스니커즈" },
  { value: 1, src: "/imgs/item.png", label: "운동화" },
  { value: 2, src: "/imgs/item.png", label: "슬립온" },
  { value: 3, src: "/imgs/item.png", label: "샌들" },
  { value: 4, src: "/imgs/item.png", label: "옥스포드/더비슈즈" },
  { value: 5, src: "/imgs/item.png", label: "몽크스트랩" },
  { value: 6, src: "/imgs/item.png", label: "윙팁 브로그" },
  { value: 7, src: "/imgs/item.png", label: "레이스업부츠" },
  { value: 8, src: "/imgs/item.png", label: "첼시부츠" },
  { value: 9, src: "/imgs/item.png", label: "로퍼" },
  { value: 10, src: "/imgs/item.png", label: "보트슈즈" },
];

const page_42 = [
  {
    text: "얼굴 크기",
    options: [
      { value: 0, label: "얼굴이 작다" },
      { value: 1, label: "얼굴 크기가 보통" },
      { value: 2, label: "얼굴이 크다" },
    ],
  },
  {
    text: "목 길이",
    options: [
      { value: 0, label: "목이 짧다" },
      { value: 1, label: "목 길이가 보통" },
      { value: 2, label: "목이 길다" },
    ],
  },
  {
    text: "어깨 넓이",
    options: [
      { value: 0, label: "어깨가 좁다" },
      { value: 1, label: "어깨 넓이가 보통" },
      { value: 2, label: "어깨가 넓다" },
    ],
  },
  {
    text: "팔 길이",
    options: [
      { value: 0, label: "팔이 짧다" },
      { value: 1, label: "팔 길이가 보통" },
      { value: 2, label: "팔이 길다" },
    ],
  },
  {
    text: "흉부 크기",
    options: [
      { value: 0, label: "흉부가 작다" },
      { value: 1, label: "흉부 크기가 보통" },
      { value: 2, label: "흉부가 크다" },
    ],
  },
  {
    text: "허리 둘레",
    options: [
      { value: 0, label: "허리가 얇다" },
      { value: 1, label: "허리 둘레가 보통" },
      { value: 2, label: "허리가 두껍다" },
    ],
  },
  {
    text: "골반 넓이",
    options: [
      { value: 0, label: "골반이 좁다" },
      { value: 1, label: "골반 넓이가 보통" },
      { value: 2, label: "골반이 넓다" },
    ],
  },
  {
    text: "엉덩이 크기",
    options: [
      { value: 0, label: "엉덩이가 작다" },
      { value: 1, label: "엉덩이 크기가 보통" },
      { value: 2, label: "엉덩이가 크다" },
    ],
  },
  {
    text: "허벅지 두께",
    options: [
      { value: 0, label: "허벅지가 얇다" },
      { value: 1, label: "허벅지 두께가 보통" },
      { value: 2, label: "허벅지가 두껍다" },
    ],
  },
  {
    text: "종아리 두께",
    options: [
      { value: 0, label: "종아리가 얇다" },
      { value: 1, label: "종아리 두께가 보통" },
      { value: 2, label: "종아리가 두껍다" },
    ],
  },
  {
    text: "다리 길이",
    options: [
      { value: 0, label: "다리가 짧다" },
      { value: 1, label: "다리 길이가 보통" },
      { value: 2, label: "다리가 길다" },
    ],
  },
  {
    text: "상체 길이",
    options: [
      { value: 0, label: "상체가 짧다" },
      { value: 1, label: "상체 길이가 보통" },
      { value: 2, label: "상체가 길다" },
    ],
  },
  {
    text: "비율",
    options: [
      { value: 0, label: "비율이 좋지 않다" },
      { value: 1, label: "비율이 보통" },
      { value: 2, label: "비율이 좋다" },
    ],
  },
];

const page_43 = {
  face: [
    { value: 0, src: "/imgs/item.png", label: "둥근형" },
    { value: 1, src: "/imgs/item.png", label: "달걀형" },
    { value: 2, src: "/imgs/item.png", label: "긴 타원형" },
    { value: 3, src: "/imgs/item.png", label: "사각형" },
    { value: 4, src: "/imgs/item.png", label: "역삼각형" },
    { value: 5, src: "/imgs/item.png", label: "각진형" },
  ],
  skin: [
    { value: 0, src: "/imgs/item.png", label: "웜톤" },
    { value: 1, src: "/imgs/item.png", label: "쿨톤" },
  ],
  shoulder: [
    { value: 0, src: "/imgs/item.png", label: "직각 모양" },
    { value: 1, src: "/imgs/item.png", label: "삼각형 모양" },
    { value: 2, src: "/imgs/item.png", label: "둥근 모양" },
  ],
};

const payment = [
  {
    label: "티셔츠",
    options: [
      { value: 0, label: "5만원 이하" },
      { value: 1, label: "5-10만원" },
      { value: 2, label: "10-30만원" },
      { value: 3, label: "30만원 이상" },
    ],
  },
  {
    label: "셔츠",
    options: [
      { value: 0, label: "10만원 이하" },
      { value: 1, label: "10-20만원" },
      { value: 2, label: "20-50만원" },
      { value: 3, label: "50만원 이상" },
    ],
  },
  {
    label: "니트",
    options: [
      { value: 0, label: "10만원 이하" },
      { value: 1, label: "10-20만원" },
      { value: 2, label: "20-50만원" },
      { value: 3, label: "50만원 이상" },
    ],
  },
  {
    label: "바지",
    options: [
      { value: 0, label: "10만원 이하" },
      { value: 1, label: "10-20만원" },
      { value: 2, label: "20-50만원" },
      { value: 3, label: "50만원 이상" },
    ],
  },
  {
    label: "자켓",
    options: [
      { value: 0, label: "10만원 이하" },
      { value: 1, label: "10-20만원" },
      { value: 2, label: "20-50만원" },
      { value: 3, label: "50만원 이상" },
    ],
  },
  {
    label: "코트",
    options: [
      { value: 0, label: "20만원 이하" },
      { value: 1, label: "20-50만원" },
      { value: 2, label: "50-100만원" },
      { value: 3, label: "100만원 이상" },
    ],
  },
  {
    label: "신발",
    options: [
      { value: 0, label: "10만원 이하" },
      { value: 1, label: "10-20만원" },
      { value: 2, label: "20-50만원" },
      { value: 3, label: "50만원 이상" },
    ],
  },
  {
    label: "가방",
    options: [
      { value: 0, label: "50만원 이하" },
      { value: 1, label: "50-100만원" },
      { value: 2, label: "100-200만원" },
      { value: 3, label: "200만원 이상" },
    ],
  },
];

const job = {
  job: ["직장인", "전문직", "학생", "프리랜서", "사업가", "공무원", "무직"],
  industry: [
    "유통",
    "건설",
    "제조",
    "금융",
    "법률",
    "의료",
    "패션",
    "판매, 영업",
    "미디어, 방송",
    "예술",
    "IT",
    "식품",
    "교육",
    "항공",
    "기타",
  ],
  task: [
    "경영, 관리, 인사",
    "IT 개발",
    "디자인",
    "고객 상담, 영업",
    "연구",
    "기획",
    "생산",
    "교육",
    "특수직무",
    "기타",
  ],
};

export const styleQuizData_M = {
  page_1,
  page_2,
  page_3,
  page_4,
  page_5,
  page_6,
  page_7,
  style,
  top,
  pants,
  outer,
  look,
  goods,
  brand,
  brand_pop,
  size_top,
  size_bottom,
  page_35,
  page_36,
  page_37,
  page_38,
  page_41,
  page_42,
  page_43,
  payment,
  job,
};
