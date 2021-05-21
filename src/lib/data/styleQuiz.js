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
  2: ["24세 이하", "25-29세", "30-34세", "35-39세", "40세 이상"],
};

const page_2 = [
  { src: "/imgs/item.png", text: "원색" },
  { src: "/imgs/item.png", text: "파스텔색" },
  { src: "/imgs/item.png", text: "무채색" },
  { src: "/imgs/item.png", text: "채도 낮은 색" },
  { src: "/imgs/item.png", text: "형광색" },
  { src: "/imgs/item.png", text: "메탈릭" },
];

const page_3 = [
  { src: "/imgs/item.png", text: "화이트" },
  { src: "/imgs/item.png", text: "아이보리" },
  { src: "/imgs/item.png", text: "베이지" },
  { src: "/imgs/item.png", text: "네이비" },
  { src: "/imgs/item.png", text: "그레이" },
  { src: "/imgs/item.png", text: "카키" },
  { src: "/imgs/item.png", text: "블랙" },
  { src: "/imgs/item.png", text: "레드" },
  { src: "/imgs/item.png", text: "버건디" },
  { src: "/imgs/item.png", text: "핑크" },
  { src: "/imgs/item.png", text: "오렌지" },
  { src: "/imgs/item.png", text: "옐로우" },
  { src: "/imgs/item.png", text: "그린" },
  { src: "/imgs/item.png", text: "스카이블루" },
  { src: "/imgs/item.png", text: "블루" },
  { src: "/imgs/item.png", text: "퍼플" },
  { src: "/imgs/item.png", text: "브라운" },
];

const page_4 = [
  { src: "/imgs/styleQuiz/patterns/horizontal_stripe.png", text: "가로 스트라이프" },
  { src: "/imgs/styleQuiz/patterns/vertical_stripe.png", text: "세로 스트라이프" },
  { src: "/imgs/styleQuiz/patterns/floral.png", text: "플로럴" },
  { src: "/imgs/styleQuiz/patterns/dot.png", text: "도트" },
  { src: "/imgs/styleQuiz/patterns/leopard.png", text: "레오파드" },
  { src: "/imgs/styleQuiz/patterns/paisley.png", text: "페이즐리" },
  { src: "/imgs/styleQuiz/patterns/small_check.png", text: "스몰 체크" },
  { src: "/imgs/styleQuiz/patterns/big_check.png", text: "빅 체크" },
  { src: "/imgs/styleQuiz/patterns/argyle.png", text: "아가일" },
  { src: "/imgs/styleQuiz/patterns/twist.png", text: "꽈배기" },
  { src: "/imgs/styleQuiz/patterns/military.png", text: "밀리터리" },
  { src: "/imgs/styleQuiz/patterns/herringbone.png", text: "헤링본" },
  { src: "/imgs/styleQuiz/patterns/quilting.png", text: "퀼팅" },
];

const page_5 = [
  { src: "/imgs/styleQuiz/details/lace.png", text: "레이스" },
  { src: "/imgs/styleQuiz/details/frill.png", text: "프릴" },
  { src: "/imgs/styleQuiz/details/pearl.png", text: "진주" },
  { src: "/imgs/styleQuiz/details/shirring.png", text: "셔링" },
  { src: "/imgs/styleQuiz/details/ribbon.png", text: "리본" },
  { src: "/imgs/styleQuiz/details/seethrough.png", text: "시스루" },
  { src: "/imgs/styleQuiz/details/puff.png", text: "퍼프" },
  { src: "/imgs/styleQuiz/details/hood.png", text: "후드" },
  { src: "/imgs/styleQuiz/details/item.png", text: "핀턱" },
  { src: "/imgs/styleQuiz/details/item.png", text: "롤업" },
  { src: "/imgs/styleQuiz/details/item.png", text: "랩" },
];

const page_6 = [
  { src: "/imgs/styleQuiz/materials/leather.png", text: "가죽" },
  { src: "/imgs/styleQuiz/materials/angora.png", text: "앙고라" },
  { src: "/imgs/styleQuiz/materials/nylon.png", text: "나일론" },
  { src: "/imgs/styleQuiz/materials/corduroy.png", text: "코듀로이" },
  { src: "/imgs/styleQuiz/materials/velvet.png", text: "벨벳" },
  { src: "/imgs/styleQuiz/materials/linen.png", text: "린넨" },
  { src: "/imgs/styleQuiz/materials/slik.png", text: "실크(새틴)" },
  { src: "/imgs/styleQuiz/materials/chiffon.png", text: "쉬폰" },
  { src: "/imgs/styleQuiz/materials/tweed.png", text: "트위드" },
  { src: "/imgs/styleQuiz/materials/fleece.png", text: "플리스" },
  { src: "/imgs/styleQuiz/materials/item.png", text: "데님" },
];

const page_7 = [
  { src: "/imgs/item.png", text: "U넥" },
  { src: "/imgs/item.png", text: "크루넥(시보리)" },
  { src: "/imgs/item.png", text: "V넥" },
  { src: "/imgs/item.png", text: "스퀘어넥" },
  { src: "/imgs/item.png", text: "보트넥" },
  { src: "/imgs/item.png", text: "반폴라(모크넥)" },
  { src: "/imgs/item.png", text: "목폴라(터틀넥)" },
  { src: "/imgs/item.png", text: "오프숄더" },
  { src: "/imgs/item.png", text: "홀터넥" },
  { src: "/imgs/item.png", text: "칼라" },
  { src: "/imgs/item.png", text: "차이나칼라" },
  { src: "/imgs/item.png", text: "오픈칼라" },
  { src: "/imgs/item.png", text: "보우칼라" },
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
];

const skirt = [
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
];

const cody = [
  { src: "/imgs/item.png", text: "캐주얼" },
  { src: "/imgs/item.png", text: "클래식포멀" },
  { src: "/imgs/item.png", text: "로맨틱페미닌" },
  { src: "/imgs/item.png", text: "러블리" },
  { src: "/imgs/item.png", text: "럭셔리" },
  { src: "/imgs/item.png", text: "기타" },
];

const brand = [
  { src: "/imgs/item.png", text: "캐주얼" },
  { src: "/imgs/item.png", text: "클래식포멀" },
  { src: "/imgs/item.png", text: "로맨틱페미닌" },
  { src: "/imgs/item.png", text: "러블리" },
  { src: "/imgs/item.png", text: "럭셔리" },
  { src: "/imgs/item.png", text: "기타" },
];

const size_top = [
  { top_1: ["XXS 이하", "XS", "S", "M", "L", "XL", "XXL"], text: "항목 1" },
  {
    top_2: ["80 이하", "85", "90", "95", "100", "110", "110 이상"],
    text: "항목 2",
  },
  { top_3: ["33 이하", "44", "55", "66", "77 이상"], text: "항목 3" },
  {
    bra_1: ["65 이하", "70", "75", "80", "85", "90", "95"],
    text: "밑가슴둘레",
  },
  { bra_2: ["AA 이하", "A", "B", "C", "D", "E", "F 이상"], text: "컵 사이즈" },
];

const size_bottom = [
  {
    pants_1: [
      "22 이하",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
    ],
    text: "항목 1",
  },
  { pants_2: ["XS 이하", "S", "M", "L", "XL", "XXL 이상"], text: "항목 2" },
  { pants_3: ["허리에 맞춘다", "허벅지에 맞춘다"], text: "항목 3" },
  {
    shoes: [
      "215 이하",
      "220",
      "225",
      "230",
      "235",
      "240",
      "245",
      "250",
      "255",
      "260 이상",
    ],
    text: "신발 사이즈",
  },
];

const page_35 = [
  { src: "/imgs/item.png", text: "크롭\n(허리에 위치)" },
  { src: "/imgs/item.png", text: "레귤러\n(엉덩이에 위치)" },
  { src: "/imgs/item.png", text: "롱\n(허벅지에 위치)" },
];

const page_36 = [
  { src: "/imgs/item.png", text: "타이트핏" },
  { src: "/imgs/item.png", text: "스트레이트핏" },
  { src: "/imgs/item.png", text: "루즈핏" },
  { src: "/imgs/item.png", text: "오버핏" },
];

const page_37 = [
  { src: "/imgs/item.png", text: "스키니핏" },
  { src: "/imgs/item.png", text: "슬림핏" },
  { src: "/imgs/item.png", text: "스트레이트핏" },
  { src: "/imgs/item.png", text: "와이드핏" },
  { src: "/imgs/item.png", text: "테이퍼드핏\n(배기핏)" },
  { src: "/imgs/item.png", text: "부츠컷" },
  { src: "/imgs/item.png", text: "벌룬핏" },
];

const page_38 = [
  { src: "/imgs/item.png", text: "골반에 위치\n(밑위길이 짧음)" },
  { src: "/imgs/item.png", text: "골반과 허리\n사이에 위치\n(밑위길이 중간)" },
  { src: "/imgs/item.png", text: "허리에 위치\n(밑위길이 긺)" },
];

const page_39 = [
  { src: "/imgs/item.png", text: "A라인" },
  { src: "/imgs/item.png", text: "H라인" },
  { src: "/imgs/item.png", text: "머메이드 라인" },
  { src: "/imgs/item.png", text: "플레어" },
  { src: "/imgs/item.png", text: "플리츠" },
];

const page_40 = [
  { src: "/imgs/item.png", text: "미니스커트\n(허벅지 중간 위치)" },
  { src: "/imgs/item.png", text: "미디스커트\n(무릎 위치)" },
  { src: "/imgs/item.png", text: "롱 스커트\n(종아리 중간 위치)" },
  { src: "/imgs/item.png", text: "맥시 롱스커트\n(발목 위치)" },
];

const page_41 = [
  { src: "/imgs/item.png", text: "펌프스" },
  { src: "/imgs/item.png", text: "플랫" },
  { src: "/imgs/item.png", text: "앵클부츠" },
  { src: "/imgs/item.png", text: "샌들" },
  { src: "/imgs/item.png", text: "힐" },
  { src: "/imgs/item.png", text: "스니커즈" },
  { src: "/imgs/item.png", text: "운동화" },
  { src: "/imgs/item.png", text: "로퍼" },
  { src: "/imgs/item.png", text: "롱부츠" },
];

const page_42 = [
  {
    text: "얼굴 크기",
    options: ["얼굴이 작다", "얼굴 크기가 보통", "얼굴이 크다"],
  },
  {
    text: "목 길이",
    options: ["목길이가 짧다", "목 길이가 보통", "목이 길다"],
  },
  {
    text: "어깨 넓이",
    options: ["어깨가 좁다", "어깨가 보통", "어깨가 넓다"],
  },
  {
    text: "팔 길이",
    options: ["팔이 짧다", "팔 길이가 보통", "팔이 길다"],
  },
  {
    text: "흉부 크기",
    options: ["흉부가 작다", "흉부 크기가 보통", "흉부가 크다"],
  },
  {
    text: "허리 둘레",
    options: ["허리가 얇다", "허리 둘레가 보통", "허리가 두껍다"],
  },
  {
    text: "골반 넓이",
    options: ["골반이 좁다", "골반이 보통", "골반이 넓다"],
  },
  {
    text: "엉덩이 크기",
    options: ["엉덩이가 작다", "엉덩이 크기가 보통", "엉덩이가 크다"],
  },
  {
    text: "허벅지 두께",
    options: ["허벅지가 얇다", "허벅지 두께가 보통", "허벅지가 두껍다"],
  },
  {
    text: "종아리 두께",
    options: ["종아리가 얇다", "종아리 두께가 보통", "종아리가 두껍다"],
  },
  {
    text: "다리 길이",
    options: ["다리가 짧다", "다리 길이가 보통", "다리가 길다"],
  },
  {
    text: "상체 길이",
    options: ["상체가 짧다", "상체 길이가 보통", "상체가 길다"],
  },
  {
    text: "비율",
    options: ["상체가 짧다", "상체 길이가 보통", "상체가 길다"],
  },
];

const page_43 = {
  face: [
    { src: "/imgs/item.png", text: "둥근형" },
    { src: "/imgs/item.png", text: "달걀형" },
    { src: "/imgs/item.png", text: "긴 타원형" },
    { src: "/imgs/item.png", text: "사각형" },
    { src: "/imgs/item.png", text: "역삼각형" },
    { src: "/imgs/item.png", text: "각진형" },
  ],
  skin: [
    { src: "/imgs/item.png", text: "웜톤" },
    { src: "/imgs/item.png", text: "쿨톤" },
  ],
  shoulder: [
    { src: "/imgs/item.png", text: "직각 모양" },
    { src: "/imgs/item.png", text: "삼각형 모양" },
    { src: "/imgs/item.png", text: "둥근 모양" },
  ],
};

const payment = [
  {
    text: "티셔츠",
    options: ["5만원 이하", "5-10만원", "10-30만원", "30만원 이상"],
  },
  {
    text: "블라우스/셔츠",
    options: ["10만원 이하", "10-20만원", "20-50만원", "50만원 이상"],
  },
  {
    text: "니트",
    options: ["10만원 이하", "10-20만원", "20-50만원", "50만원 이상"],
  },
  {
    text: "바지/스커트",
    options: ["10만원 이하", "10-20만원", "20-50만원", "50만원 이상"],
  },
  {
    text: "자켓",
    options: ["10만원 이하", "10-20만원", "20-50만원", "50만원 이상"],
  },
  {
    text: "코트",
    options: ["20만원 이하", "20-50만원", "50-100만원", "100만원 이상"],
  },
  {
    text: "신발",
    options: ["10만원 이하", "10-20만원", "20-50만원", "50만원 이상"],
  },
  {
    text: "가방",
    options: ["50만원 이하", "50-100만원", "100-200만원", "200만원 이상"],
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

export const styleQuizData = {
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
  skirt,
  outer,
  cody,
  brand,
  size_top,
  size_bottom,
  page_35,
  page_36,
  page_37,
  page_38,
  page_39,
  page_40,
  page_41,
  page_42,
  page_43,
  payment,
  job,
};
