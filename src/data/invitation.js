// 청첩장 정보 - 이 파일만 수정하면 청첩장 내용이 모두 바뀝니다.
export const invitation = {
  groom: {
    name: '신랑이름',
    father: '아버지',
    mother: '어머니',
    accounts: [
      { bank: '신한은행', number: '110-000-000000', holder: '신랑이름' },
    ],
  },
  bride: {
    name: '신부이름',
    father: '아버지',
    mother: '어머니',
    accounts: [
      { bank: '국민은행', number: '000-00-0000-000', holder: '신부이름' },
    ],
  },

  wedding: {
    // 예식 일시 (ISO 형식)
    dateISO: '2026-10-10T11:00:00+09:00',
    displayDate: '2026년 10월 10일 토요일 오전 11시',
    venueName: '○○ 전통혼례원',
    venueDetail: '본관 마당',
    address: '서울특별시 ○○구 ○○로 000',
    // 지도 좌표 (네이버/카카오 지도 링크에 사용)
    lat: 37.5665,
    lng: 126.9780,
    naverMapUrl: 'https://map.naver.com/',
    kakaoMapUrl: 'https://map.kakao.com/',
    tmapUrl: 'https://tmap.life/',
  },

  greeting: {
    title: '소중한 분들을 모십니다',
    body: `예로부터 이어져 온 귀한 인연으로
저희 두 사람이 한 길을 걷고자 합니다.

귀한 걸음 하시어
저희의 새로운 시작을
축복해 주시면 더없는 기쁨이 되겠습니다.`,
  },

  // 갤러리 이미지 — public/gallery 에 파일을 넣고 경로만 적어주세요.
  // 예: '/wedding-invitation/gallery/1.jpg'
  gallery: [
    '/wedding-invitation/gallery/sample-1.svg',
    '/wedding-invitation/gallery/sample-2.svg',
    '/wedding-invitation/gallery/sample-3.svg',
    '/wedding-invitation/gallery/sample-4.svg',
  ],

  // 메인 사진 (없으면 null)
  heroImage: '/wedding-invitation/gallery/sample-1.svg',
}
