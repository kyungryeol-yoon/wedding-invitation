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
    venueName: '롯데월드 민속박물관 전통혼례장',
    venueDetail: '롯데월드 민속박물관 3층 · 전통혼례장',
    address: '서울 송파구 올림픽로 240 롯데월드 민속박물관 3층',
    lat: 37.5111,
    lng: 127.0982,
    naverMapUrl: 'https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EB%AF%BC%EC%86%8D%EB%B0%95%EB%AC%BC%EA%B4%80',
    kakaoMapUrl: 'https://map.kakao.com/?q=%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%20%EB%AF%BC%EC%86%8D%EB%B0%95%EB%AC%BC%EA%B4%80',
  },

  // 오시는 길 상세 경로 (오시는 길 섹션에서 접기/펼치기)
  // - imgs 에 사진 경로를 넣으면 단계마다 사진이 표시됩니다. (한 단계에 2장까지 나란히 표시)
  // - imgs 를 [] 로 두면 사진 없이 글만 나옵니다. (나중에 파일만 채워 넣으면 됩니다)
  // - 사진은 public/directions/ 에 올리고 경로는 /wedding-invitation/directions/... 로 적어주세요.
  // - sub: 단계에 덧붙이는 보조 설명 (작은 글씨). 없으면 생략하세요.
  // - notes: 경로 맨 아래 안내 문구들. '※' 로 시작하면 강조 표시됩니다.
  // - alert: 경로 펼치면 맨 위에 뜨는 경고 상자. 꼭 먼저 읽어야 하는 내용만 넣으세요.
  directions: [
    {
      key: 'walk',
      label: '지상',
      title: '롯데월드 정문으로 오시는 길',
      lead: '잠실역 4번 출구 → 롯데월드 정문 → 신데렐라 계단 뒤쪽 엘리베이터 → 3층',
      steps: [
        {
          text: '잠실역(2호선) 4번 출구로 나와서 직진하세요.',
          imgs: ['/wedding-invitation/directions/exit4.jpg'],
        },
        {
          text: '나온 방향 그대로, 롯데백화점을 지나 롯데월드 어드벤처 정문으로 입장합니다.',
          imgs: ['/wedding-invitation/directions/walk-2.jpg'],
        },
        {
          text: '정면의 신데렐라 계단 뒤쪽에 엘리베이터가 있습니다.',
          imgs: ['/wedding-invitation/directions/walk-3.jpg'],
        },
        {
          text: '왼쪽은 롯데백화점, 오른쪽은 롯데 하이마트입니다.',
          imgs: [
            '/wedding-invitation/directions/walk-4a.jpg',
            '/wedding-invitation/directions/walk-4b.jpg',
          ],
        },
        {
          text: '계단 뒤편에 있는 엘리베이터를 이용하여 3층으로 올라갑니다.',
          imgs: ['/wedding-invitation/directions/walk-5.jpg'],
        },
        {
          text: '3층의 민속박물관 초입이 보이면 도착입니다.',
          imgs: ['/wedding-invitation/directions/arrival.jpg'],
        },
      ],
      notes: [],
    },
    {
      key: 'transit',
      label: '지하',
      title: '지하상가로 오시는 길',
      lead: '잠실역 4번 출구 방향 직진 → 지하상가 5분 → 로티로리 광장 → 엘리베이터 → 3층',
      steps: [
        {
          text: '잠실역(2호선) 4번 출구 방향으로 직진합니다.',
          imgs: ['/wedding-invitation/directions/exit4.jpg'],
        },
        {
          text: '지하상가들을 양옆으로 5분 정도 직진합니다.',
          imgs: ['/wedding-invitation/directions/transit-2.jpg'],
        },
        {
          text: '감성 교복에서 좌회전하면 로티로리 광장이 나옵니다.',
          imgs: ['/wedding-invitation/directions/transit-3.jpg'],
        },
        {
          text: '광장 뒤편의 엘리베이터를 이용하여 3층으로 올라갑니다.',
          imgs: ['/wedding-invitation/directions/transit-4.jpg'],
        },
        {
          text: '3층의 민속박물관 초입이 보이면 도착입니다.',
          imgs: ['/wedding-invitation/directions/arrival.jpg'],
        },
      ],
      notes: ['비가 오거나 더운 날에는 지하 경로가 편합니다.'],
    },
    {
      key: 'car',
      label: '자가용',
      title: '주차 후 오시는 길',
      lead: '지하주차장 M구역 주차 → 롯데마트(제타플렉스) → 3층 저자거리',
      alert: {
        title: '예식일은 롯데마트 휴무일입니다',
        body: '9월 13일(둘째 일요일)은 롯데마트 제타플렉스 휴무일이라 아래 ④~⑦단계의 마트 내부 통로를 이용하실 수 없습니다. 주차하신 뒤 지하 1층 로티로리 광장으로 올라오셔서, 민속박물관 엘리베이터로 3층까지 오시면 됩니다. (‘지하상가로 오시는 길’ ③~⑤단계와 동일)',
      },
      steps: [
        {
          text: '롯데마트 제타플렉스 지하 주차장으로 진입하세요.',
          sub: '롯데월드 어드벤처 · 롯데백화점 · 롯데호텔 · 롯데마트가 모두 연결되어 있습니다.',
          imgs: ['/wedding-invitation/directions/car-1.jpg'],
        },
        {
          text: '분홍색 주차영역을 지나, 바닥의 안내표시대로 천천히 이동하세요.',
          imgs: ['/wedding-invitation/directions/car-2.jpg'],
        },
        {
          text: '초록색 영역인 M주차구역에 주차하세요.',
          imgs: ['/wedding-invitation/directions/car-3.jpg'],
        },
        {
          text: '롯데마트(제타플렉스) 입구로 입장하세요.',
          imgs: ['/wedding-invitation/directions/car-4.jpg'],
        },
        {
          text: '엘리베이터를 타고 3층으로 이동합니다.',
          sub: '안내문에 표시된 3층의 데카트론 · 탑텐 매장 방향으로 이동하세요.',
          imgs: ['/wedding-invitation/directions/car-5.jpg'],
        },
        {
          text: '에스컬레이터를 가운데 두고, 데카트론과 탑텐 매장의 반대편 방향으로 쭉 들어오세요.',
          imgs: ['/wedding-invitation/directions/car-6.jpg'],
        },
        {
          text: '전통 한식당 저자거리 입구가 보이면 도착입니다.',
          imgs: ['/wedding-invitation/directions/car-7.jpg'],
        },
      ],
      notes: [
        '지하주차장 A구역에 주차하셨다면, 롯데월드 매표소 뒤편 엘리베이터로 3층까지 오실 수 있습니다.',
        '※ 롯데월드타워 주차장은 무료주차가 적용되지 않습니다.',
      ],
    },
  ],

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

  guestbook: {
    title: '레고 방명록',
    body: `행복한 기억으로 남을 수 있도록
레고 방명록을 준비했습니다.
오셔서 한 조각씩 함께 쌓아주세요.`,
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
      src: '/wedding-invitation/ornaments/palanquin.gif',
      fallback: '/wedding-invitation/ornaments/palanquin.svg',
    },
    horseRider: {
      src: '/wedding-invitation/ornaments/horse-rider.gif',
      fallback: '/wedding-invitation/ornaments/horse-rider.svg',
    },
  },
}
