// 청첩장 정보 - 이 파일만 수정하면 청첩장 내용이 모두 바뀝니다.
export const invitation = {
  groom: {
    name: '윤경렬',
    father: null, // 표시 안 함
    mother: '손명숙',
    role: '아들', // '장남' / '아들' 등
    accounts: [
      { bank: '신한은행', number: '110-000-000000', holder: '윤경렬' },
    ],
  },
  bride: {
    name: '김호정',
    father: '김종두',
    mother: '차옥순',
    role: '딸',
    accounts: [
      { bank: '국민은행', number: '000-00-0000-000', holder: '김호정' },
    ],
  },

  wedding: {
    dateISO: '2026-09-13T12:00:00+09:00',
    displayDate: '2026. 09. 13. SUN  12:00',
    displayDateKo: '2026년 9월 13일 일요일 낮 12시',
    venueName: '롯데월드 전통혼례',
    venueDetail: 'B1F · 잠실역 4번 출구',
    address: '서울특별시 송파구 올림픽로 240 롯데월드 B1F',
    lat: 37.5111,
    lng: 127.0982,
    naverMapUrl: 'https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EC%A0%84%ED%86%B5%ED%98%BC%EB%A1%80',
    kakaoMapUrl: 'https://map.kakao.com/?q=%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EC%A0%84%ED%86%B5%ED%98%BC%EB%A1%80',
    tmapUrl: 'https://tmap.life/route?goalname=%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C',
  },

  greeting: {
    eyebrow: 'OUR INVITATION',
    title: '소중한 분들을 모십니다',
    body: `귀한 인연으로 만난 두 사람이
오랜 약속을 지키며 한 길을 걷고자 합니다.

전통의 예를 갖추어 올리는
저희의 새로운 시작에
귀한 걸음으로 함께해 주시면
더없는 기쁨이 되겠습니다.`,
  },

  // 갤러리 이미지 — public/gallery 에 파일을 넣고 경로만 적어주세요.
  gallery: [
    '/wedding-invitation/gallery/sample-1.svg',
    '/wedding-invitation/gallery/sample-2.svg',
    '/wedding-invitation/gallery/sample-3.svg',
    '/wedding-invitation/gallery/sample-4.svg',
  ],

  // 메인 사진 (없으면 null)
  heroImage: null,

  // 종이 청첩장 컨셉 (티켓 하단 표기)
  brand: 'H.R WEDDING',
  subBrand: 'LOTTE WORLD · TRADITIONAL WEDDING',
}
