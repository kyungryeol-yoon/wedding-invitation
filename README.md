# 모바일 청첩장 (Wedding Invitation)

React + Vite 로 만든 모바일 청첩장입니다. GitHub Pages 에 자동 배포됩니다.

## 🌐 배포 URL

`main` 브랜치에 push 하면 GitHub Actions 가 자동으로 빌드하여
`https://<github-username>.github.io/wedding-invitation/` 에 배포합니다.

> 처음 한 번은 GitHub 저장소 **Settings → Pages → Build and deployment → Source** 를
> **GitHub Actions** 로 설정해주세요.

## 🛠️ 로컬 개발

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

## ✏️ 내용 수정

청첩장 데이터는 모두 한 파일에서 수정합니다.

- **`src/data/invitation.js`** — 신랑/신부 이름, 부모님, 예식 일시·장소, 인사말, 계좌번호, 갤러리 경로, 일러스트 경로
- `public/favicon.svg` — 브라우저 탭 아이콘

## 📷 사진 교체 (가장 자주 하는 작업)

### 메인 사진
1. 가로 1600~2000px, JPG 품질 80~85% (~300KB ~ 1MB 권장) 로 압축
2. `public/gallery/hero.jpg` 로 업로드 (깃허브 웹 UI에서 드래그&드롭 가능)
3. 끝. 파일만 같은 이름이면 자동 적용.

### 갤러리 사진 (자동 인식 — 파일만 떨어뜨리면 끝)
1. **`src/assets/gallery/`** 폴더에 사진을 업로드합니다.
2. 끝. 파일명 순으로 자동 정렬되어 갤러리에 표시됩니다.

```
src/assets/gallery/
  01.jpg
  02.jpg
  03.jpg
  ...
```

> - 순서 제어가 필요하면 `01.jpg`, `02.jpg` 처럼 번호 prefix 추천 (앞에 0 붙여야 10장 넘을 때도 안 꼬임)
> - 어떤 파일명이든 OK (`first.jpg`, `proposal.jpg` 등도 가능)
> - 지원 포맷: `jpg`, `jpeg`, `png`, `webp`, `svg`
> - 권장 압축: 가로 1600~2000px · JPG 품질 78~82% · 1장당 300~700KB

수동으로 경로 지정하고 싶다면 `src/data/invitation.js` 의 `gallery` 배열에 경로를 채우면
자동 인식이 무시되고 그 경로들만 사용됩니다.

## 🎨 전통 일러스트(구름·가마·말) 교체

일러스트는 PNG(투명 배경) 로 `public/ornaments/` 에 올리면 됩니다.

| 파일명 | 용도 |
| --- | --- |
| `cloud-1.png` `cloud-2.png` `cloud-3.png` | 배경에 떠다니는 길상문 구름 (3종 순환) |
| `palanquin.png` | 메인 화면 가마(사인교) 행렬 |
| `horse-rider.png` | 메인 화면 말 탄 신랑 |

- 같은 파일명으로 덮어쓰면 자동 반영됩니다.
- 파일이 아직 없으면 SVG 플레이스홀더로 자동 폴백됩니다 (`onError`).
- 다른 이름/위치로 올리고 싶다면 `src/data/invitation.js` 의 `ornaments.<key>.src` 만 바꾸세요.

## 📁 구조

```
public/
  gallery/
    hero.jpg          # 메인 사진 (단일 파일)
  ornaments/          # 전통 일러스트 (png 권장, svg 폴백)
    cloud-1.png, cloud-2.png, cloud-3.png
    palanquin.png
    horse-rider.png
  favicon.svg

src/
  assets/
    gallery/          # 갤러리 사진 (자동 인식 — 파일만 떨어뜨리면 끝)
      01.jpg, 02.jpg, 03.jpg ...
  App.jsx                    # 전체 페이지 구성
  data/invitation.js         # 청첩장 데이터 (여기만 수정)
  components/
    Hero.jsx                 # 메인 (full-bleed 사진 + 이름/날짜/장소)
    Greeting.jsx             # 인사말 + 양가 부모님
    EventInfo.jsx            # 예식 일시·장소 + 달력 + D-day
    MapSection.jsx           # 지도 (네이버/카카오/티맵 링크)
    Gallery.jsx              # 사진 스와이프 + 하단 썸네일
    Account.jsx              # 계좌번호 (복사 버튼)
    Footer.jsx               # 공유 버튼
    FloatingClouds.jsx       # 배경에 떠다니는 구름 레이어
    Ornaments.jsx            # 전통 일러스트 (가마/말/회문)
    OrnamentImg.jsx          # PNG → SVG 자동 폴백 헬퍼
```

## ☁️ 배경 효과 튜닝 (떠다니는 구름)

구름 개수·속도·간격·흔들림 등은 **`src/config/effects.js`** 한 파일에서 조절합니다.

```js
// src/config/effects.js
export const effectsConfig = {
  clouds: {
    enabled: true,         // 켜기/끄기
    count: null,           // 숫자 = 고정 개수 / null = 페이지 길이 따라 자동
    density: 4,            // 한 화면당 구름 몇 개 (count: null 일 때)
    verticalJitter: 35,    // 세로 간격을 얼마나 흔들지 (0=균등, 50=자유분방)
    sizeMin: 80,
    sizeMax: 170,          // 크기 px 범위
    speedMin: 60,
    speedMax: 120,         // 한 번 가로지르는 시간(초). 작을수록 빠름
    swayAmount: 8,         // 위아래 둥실거리는 폭(px), 0 이면 일직선
    opacityMin: 0.05,
    opacityMax: 0.12,      // 투명도 (0.04~0.15 권장)
    rightwardRatio: 0.5,   // 오른쪽 방향 비율 (0~1)
    variants: ['cloud1', 'cloud2', 'cloud3'],  // 사용할 구름 종류
  },
}
```

**자주 쓰는 조정**

| 원하는 변화 | 어떻게 |
| --- | --- |
| 구름을 더 많이 보고 싶음 | `density` 를 4 → 6 으로 |
| 구름이 너무 빠름 / 산만함 | `speedMin/Max` 를 80 / 160 으로 |
| 구름을 좀 더 또렷하게 | `opacityMax` 를 0.12 → 0.18 |
| 더 둥실둥실 흔들리게 | `swayAmount` 를 8 → 16 |
| 일정한 간격으로 정렬 | `verticalJitter` 를 0 |
| 모든 구름이 한 방향 | `rightwardRatio` 를 1 또는 0 |
| 잠시 끄기 | `enabled: false` |

## 🎨 컬러 팔레트

`src/index.css` 의 `:root` 변수에서 변경 가능합니다.

| 변수 | 색상 | 용도 |
| --- | --- | --- |
| `--paper` | `#faf6ed` | 배경 (아이보리) |
| `--ink` | `#2c2620` | 본문 글자 |
| `--accent` | `#b8332a` | 포인트 (단청 주칠) |
| `--sky` | `#a8c8de` | 사진 톤과 호응하는 보조색 |
