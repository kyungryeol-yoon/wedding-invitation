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
  // 한 묶음(group)에 경로가 하나도 없으면 그 묶음의 토글 영역이 표시되지 않습니다.
  //
  // 각 경로의 형태:
  //   key   : 고유 식별자
  //   group : 'transit'(대중교통) | 'car'(자차)
  //           오시는 길 안내표에서 어느 묶음 아래에 붙을지 정합니다.
  //   label : 왼쪽 작은 칩. 경로끼리 구분되는 부분만 짧게.
  //   title : 경로 제목. 묶음 제목이 '대중교통 / 자차'를 이미 말해주므로
  //           여기서는 반복하지 않고 그 안에서 갈리는 부분만 씁니다.
  //   lead  : 제목 아래 한 줄 요약 (전체 동선)
  //   alert : { title, body } — 펼치면 맨 위에 뜨는 경고 상자. 꼭 먼저 읽어야 할 때만.
  //   steps : [{ text, sub?, imgs: [] }]
  //           - sub  : 단계에 덧붙이는 보조 설명 (작은 글씨)
  //           - imgs : 사진 경로 배열. 걸어가는 순서대로 위에서 아래로 쌓입니다.
  //                    [] 로 두면 사진 없이 글만 나옵니다.
  //   notes : 경로 맨 아래 안내 문구들. '※' 로 시작하면 강조 표시.
  //
  // 경로를 펼치면 맨 위에 venueMap(아래 참고)이 함께 표시됩니다.
  //
  // 사진은 public/directions/ 에 올리고
  // 경로는 /wedding-invitation/directions/... 로 적어주세요.
  directions: [
    {
      key: 'transit-indoor',
      group: 'transit',
      label: '실내',
      title: '실내로 걸어오시는 길',
      lead: '잠실역 4번 출구 방향 직진 → BUTTER 매장 앞 좌회전 → 로티로리 조형물 → 기둥 뒤편 엘리베이터 → 3층',
      steps: [
        {
          text: '잠실역(2호선) 4번 출구 방향으로 직진하세요.',
          imgs: ['/wedding-invitation/directions/indoor-1.jpg'],
        },
        {
          text: '계속 직진하며 상가를 지나다 BUTTER 매장 앞에서 왼쪽으로 꺾어주세요.',
          imgs: [
            '/wedding-invitation/directions/indoor-2.jpg',
            '/wedding-invitation/directions/indoor-3.jpg',
            '/wedding-invitation/directions/indoor-4.jpg',
          ],
        },
        {
          text: '로티로리 조형물까지 직진하세요.',
          imgs: [
            '/wedding-invitation/directions/indoor-5.jpg',
            '/wedding-invitation/directions/indoor-6.jpg',
          ],
        },
        {
          text: '기둥 뒤편 엘리베이터 탑승 후 3층에서 하차하세요.',
          imgs: [
            '/wedding-invitation/directions/indoor-7.jpg',
            '/wedding-invitation/directions/indoor-8.jpg',
          ],
        },
        {
          text: '민속박물관 · 저자거리 입구를 지나 우측 안쪽으로 쭉 들어가면 전통혼례장이 나옵니다.',
          imgs: [
            '/wedding-invitation/directions/indoor-9.jpg',
            '/wedding-invitation/directions/indoor-10.jpg',
            '/wedding-invitation/directions/indoor-11.jpg',
            '/wedding-invitation/directions/indoor-12.jpg',
          ],
        },
      ],
      notes: [],
    },
    {
      key: 'transit-outdoor',
      group: 'transit',
      label: '실외',
      title: '실외로 걸어오시는 길',
      lead: '잠실역 4번 출구로 나가기 → 롯데월드 어드벤처 입구 → 나선형 계단 뒤편 엘리베이터 → 3층',
      steps: [
        {
          text: '잠실역(2호선) 4번 출구를 통해 밖으로 나갑니다.',
          imgs: ['/wedding-invitation/directions/outdoor-1.jpg'],
        },
        {
          text: '롯데월드 어드벤처 입구까지 직진하세요.',
          imgs: ['/wedding-invitation/directions/outdoor-2.jpg'],
        },
        {
          text: '입구로 들어와 나선형 계단 뒤편 엘리베이터 탑승 후 3층에서 하차하세요.',
          sub: '롯데백화점과 하이마트 사이에 엘리베이터가 있습니다.',
          imgs: [
            '/wedding-invitation/directions/outdoor-3.jpg',
            '/wedding-invitation/directions/outdoor-4.jpg',
            '/wedding-invitation/directions/outdoor-5.jpg',
            '/wedding-invitation/directions/outdoor-6.jpg',
          ],
        },
        {
          text: '민속박물관 · 저자거리 입구를 지나 우측 안쪽으로 쭉 들어가면 전통혼례장이 나옵니다.',
          imgs: [
            '/wedding-invitation/directions/outdoor-7.jpg',
            '/wedding-invitation/directions/outdoor-8.jpg',
            '/wedding-invitation/directions/outdoor-9.jpg',
            '/wedding-invitation/directions/outdoor-10.jpg',
          ],
        },
      ],
      notes: [],
    },
    {
      key: 'park-basement',
      group: 'car',
      label: '지하',
      title: '지하주차장에서 오시는 길',
      lead: 'M(마트) 구역 주차 → B1층 롯데월드 어드벤처 정문 방향 → 로티로리 광장 → 공차 앞 엘리베이터 → 3층',
      steps: [
        {
          text: '롯데월드 단지 주차장 M(마트) 구역에 주차해주세요.',
          sub: '이동이 편한 위치는 B1층 M143, B2층 M243, B3층 M343입니다.',
          imgs: [
            '/wedding-invitation/directions/park-b-1.jpg',
            '/wedding-invitation/directions/park-b-2.jpg',
          ],
        },
        {
          text: 'B1층 롯데월드 어드벤처 정문 방향으로 이동해주세요.',
          sub: 'B2 · B3 · B4층에 주차하신 경우 B1층으로 이동한 후 어드벤처(정문) 방향으로 가시면 됩니다.',
          imgs: [
            '/wedding-invitation/directions/park-b-3.jpg',
            '/wedding-invitation/directions/park-b-4.jpg',
            '/wedding-invitation/directions/park-b-5.jpg',
            '/wedding-invitation/directions/park-b-6.jpg',
          ],
        },
        {
          text: '롯데월드 어드벤처 정문을 등지고 로티로리 광장 쪽으로 직진하세요.',
          imgs: ['/wedding-invitation/directions/park-b-7.jpg'],
        },
        {
          text: '공차 앞 엘리베이터 탑승 후 3층에서 하차하세요.',
          imgs: [
            '/wedding-invitation/directions/park-b-8.jpg',
            '/wedding-invitation/directions/park-b-9.jpg',
          ],
        },
        {
          text: '민속박물관 · 저자거리 입구를 지나 우측 안쪽으로 쭉 들어가면 전통혼례장이 나옵니다.',
          imgs: [
            '/wedding-invitation/directions/park-b-10.jpg',
            '/wedding-invitation/directions/park-b-11.jpg',
            '/wedding-invitation/directions/park-b-12.jpg',
            '/wedding-invitation/directions/park-b-13.jpg',
          ],
        },
      ],
      notes: [
        '롯데월드 단지 전체에 주차하실 수 있지만, 이 안내는 M(마트) 구역 기준으로 작성되었습니다.',
        '※ 위 경로는 롯데마트 휴무일(예식일) 기준입니다. 마트 3층 연결통로로는 입장하실 수 없습니다.',
      ],
    },
    {
      key: 'park-outdoor',
      group: 'car',
      label: '옥외',
      title: '옥외지상주차장에서 오시는 길',
      lead: '옥외주차장 → KFC · 메가커피 사이 진입 → B1층 → 로티로리 광장 → 공차 앞 엘리베이터 → 3층',
      alert: {
        title: '옥외주차장에는 엘리베이터가 없습니다',
        body: '유모차나 휠체어를 이용하시는 분은 계단 이동이 어려울 수 있습니다. 그런 경우 지하주차장 M(마트) 구역을 이용해 주세요.',
      },
      steps: [
        {
          text: '주차장에 주차 후 1층으로 내려온 뒤 어드벤처 방향(건너편)으로 이동하세요.',
          imgs: ['/wedding-invitation/directions/park-o-1.jpg'],
        },
        {
          text: '육교 옆 KFC와 메가커피 사이로 진입하세요.',
          imgs: ['/wedding-invitation/directions/park-o-2.jpg'],
        },
        {
          text: '어드벤처(정문) 방향으로 입장 후 직진하다가 에스컬레이터를 타고 B1층으로 내려가세요.',
          imgs: ['/wedding-invitation/directions/park-o-3.jpg'],
        },
        {
          text: '롯데월드 어드벤처 정문 방향으로 이동하세요.',
          imgs: [
            '/wedding-invitation/directions/park-o-4.jpg',
            '/wedding-invitation/directions/park-o-5.jpg',
            '/wedding-invitation/directions/park-o-6.jpg',
          ],
        },
        {
          text: '롯데월드 어드벤처 정문을 등지고 로티로리 광장 쪽으로 직진하세요.',
          imgs: ['/wedding-invitation/directions/park-o-7.jpg'],
        },
        {
          text: '공차 앞 엘리베이터 탑승 후 3층에서 하차하세요.',
          imgs: [
            '/wedding-invitation/directions/park-o-8.jpg',
            '/wedding-invitation/directions/park-o-9.jpg',
          ],
        },
        {
          text: '민속박물관 · 저자거리 입구를 지나 우측 안쪽으로 쭉 들어가면 전통혼례장이 나옵니다.',
          imgs: [
            '/wedding-invitation/directions/park-o-10.jpg',
            '/wedding-invitation/directions/park-o-11.jpg',
            '/wedding-invitation/directions/park-o-12.jpg',
            '/wedding-invitation/directions/park-o-13.jpg',
          ],
        },
      ],
      notes: [
        '※ 위 경로는 롯데마트 휴무일(예식일) 기준입니다. 마트 3층 연결통로로는 입장하실 수 없습니다.',
      ],
    },
  ],

  // 경로를 펼치면 맨 위에 뜨는 층별 안내도.
  // 경로마다 다른 길을 그리는 게 아니라, 마지막에 헤매지 않도록
  // '혼례장이 대략 여기' 를 먼저 보여주는 용도라 네 경로 모두 이 그림 하나를 씁니다.
  // null 로 두면 안내도가 표시되지 않습니다.
  //
  // 좌표는 모두 안내도 원본 크기(1160x640) 기준입니다.
  //   mark  : 빨간 동그라미의 중심과 그 아래 붙는 글자.
  //           동그라미 크기 · 글자 크기 · 글자 위치는 잘라낸 폭에 맞춰
  //           컴포넌트가 계산하므로 여기서는 중심만 잡아주면 됩니다.
  //   crops : 경로 묶음(group)별로 잘라 보여줄 범위.
  //           'x y 폭 높이' 로 적고, 넓게 자를수록 글씨는 작아집니다.
  venueMap: {
    src: '/wedding-invitation/directions/lotte-b1f.jpg',
    mark: { x: 615, y: 161, text: '전통혼례장 (3층)' },
    // 안내도를 눌러 크게 볼 때는 자르지 않고 전체를 보여줍니다.
    fullAlt: '롯데월드 지하 1층 전체 안내도. 주차 구역과 층별 시설이 표시되어 있고, 롯데마트 오른편에 전통혼례장 위치가 빨간 동그라미로 표시되어 있습니다.',
    crops: {
      // 걸어오시는 분은 잠실역에서부터의 실내 지형지물이 기준입니다.
      transit: {
        viewBox: '360 10 660 300',
        caption: '혼례장은 롯데월드 3층 민속박물관 안에 있습니다. 안내도의 이 부근에서 3층으로 올라오시면 됩니다.',
        alt: '롯데월드 지하 1층 안내도의 잠실역~어드벤처 구간. 롯데마트 오른편 로티로리 광장 부근에 전통혼례장 위치가 빨간 동그라미로 표시되어 있습니다.',
      },
      // 차로 오시는 분은 단지 어느 쪽에 대야 하는지가 먼저라,
      // 건물 안 상세보다 단지 전체 모양이 보이도록 넓게 자릅니다.
      car: {
        viewBox: '45 5 1070 615',
        caption: '혼례장은 롯데월드 3층 민속박물관 안에 있습니다. 단지 전체에서 보면 롯데마트 오른편, 이 부근의 위층입니다.',
        alt: '롯데월드 지하 1층 단지 전체 안내도. 주차 구역과 함께, 롯데마트 오른편에 전통혼례장 위치가 빨간 동그라미로 표시되어 있습니다.',
      },
    },
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

  // 배경음악
  // - src 를 null 로 두면 플로팅 버튼이 아예 표시되지 않습니다.
  // - 브라우저 정책상 소리 있는 자동 재생이 막히므로,
  //   하객의 첫 조작(탭 · 스크롤)에 맞춰 재생을 시작합니다.
  // - volume: 0 ~ 1. 놀라지 않도록 낮게 시작합니다.
  bgm: {
    src: '/wedding-invitation/audio/bgm.mp3',
    volume: 0.07,
  },

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
