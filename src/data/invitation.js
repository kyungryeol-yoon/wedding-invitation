// 청첩장 정보 - 이 파일만 수정하면 청첩장 내용이 모두 바뀝니다.
export const invitation = {
  groom: {
    name: '윤경렬',
    father: null, // 표시 안 함
    mother: '손명숙',
    role: '아들',
    accounts: [
      { bank: '카카오뱅크', number: '3333-04-1801503', holder: '윤경렬' },
      { bank: '카카오뱅크', number: '3333-37-3530578', holder: '손명숙' },
    ],
  },
  bride: {
    name: '김호정',
    father: '김종두',
    mother: '차옥순',
    role: '딸',
    accounts: [
      { bank: '카카오뱅크', number: '3333-08-0351406', holder: '김호정' },
    ],
  },

  wedding: {
    dateISO: '2026-09-13T12:00:00+09:00',
    displayDate: '2026. 09. 13. SUNDAY · 12:00',
    displayDateKo: '2026년 9월 13일 일요일 낮 12시',
    venueName: '롯데월드 전통혼례',
    venueDetail: '롯데월드 어드벤처 3F · 민속박물관 내',
    address: '서울 송파구 올림픽로 240 롯데월드 어드벤처 3F',
    lat: 37.5111,
    lng: 127.0982,
    naverMapUrl: 'https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EB%AF%BC%EC%86%8D%EB%B0%95%EB%AC%BC%EA%B4%80',
    kakaoMapUrl: 'https://map.kakao.com/?q=%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EB%AF%BC%EC%86%8D%EB%B0%95%EB%AC%BC%EA%B4%80',
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

  // 갤러리 이미지
  // - 기본: src/assets/gallery/ 폴더에 사진을 떨어뜨리면 자동으로 가져옵니다.
  //   (파일명 순으로 정렬되므로 01.jpg, 02.jpg 처럼 번호를 붙이면 순서 제어 가능)
  // - 수동으로 경로 지정하고 싶다면 아래 배열에 경로를 채워주세요.
  gallery: [],

  // 메인 사진 — public/gallery/hero.jpg 로 파일 떨어뜨리면 자동 표시
  // (없으면 hero.svg 플레이스홀더가 표시됩니다)
  heroImage: '/wedding-invitation/gallery/hero.jpg',
  heroImageFallback: '/wedding-invitation/gallery/hero.svg',
  heroTagline: 'You & Me, Always',

  // 종이 청첩장 컨셉
  subBrand: 'LOTTE WORLD · TRADITIONAL WEDDING',

  // 전통 일러스트 경로
  // - 실제 PNG를 public/ornaments/ 에 같은 이름으로 올리면 자동 적용
  // - PNG 가 없으면 .svg 플레이스홀더로 자동 폴백 (onError)
  // - 다른 이름으로 올리려면 src 값만 바꾸면 됩니다.
  ornaments: {
    cloud1: {
      src: '/wedding-invitation/ornaments/cloud-1.png',
      fallback: '/wedding-invitation/ornaments/cloud-1.svg',
    },
    cloud2: {
      src: '/wedding-invitation/ornaments/cloud-2.png',
      fallback: '/wedding-invitation/ornaments/cloud-2.svg',
    },
    cloud3: {
      src: '/wedding-invitation/ornaments/cloud-3.png',
      fallback: '/wedding-invitation/ornaments/cloud-3.svg',
    },
    palanquin: {
      src: '/wedding-invitation/ornaments/palanquin.png',
      fallback: '/wedding-invitation/ornaments/palanquin.svg',
    },
    horseRider: {
      src: '/wedding-invitation/ornaments/horse-rider.gif',
      fallback: '/wedding-invitation/ornaments/horse-rider.svg',
    },
  },
}
