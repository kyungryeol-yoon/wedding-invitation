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

청첩장 내용은 모두 한 파일에서 수정합니다.

- `src/data/invitation.js` — 신랑/신부 이름, 부모님, 예식 일시·장소, 인사말, 계좌번호, 갤러리 경로
- `public/gallery/` — 사진 파일 (jpg/png). 파일을 넣은 뒤 `invitation.js` 의 `gallery` 배열 경로를 수정
- `public/favicon.svg` — 브라우저 탭 아이콘

## 📁 구조

```
src/
  App.jsx              # 전체 페이지 구성
  data/invitation.js   # 청첩장 데이터 (여기만 수정)
  components/
    Hero.jsx           # 메인 (이름/날짜/사진)
    Greeting.jsx       # 인사말 + 양가 부모님
    EventInfo.jsx      # 예식 일시·장소 + 달력
    MapSection.jsx     # 지도 (네이버/카카오/티맵 링크)
    Gallery.jsx        # 사진 스와이프
    Account.jsx        # 계좌번호 (복사 버튼)
    Footer.jsx         # 공유 버튼
```

## 🎨 디자인

전통 한지 컬러 팔레트 사용 (`src/index.css` 의 `:root` 변수 수정으로 변경 가능).

| 변수 | 색상 | 용도 |
| --- | --- | --- |
| `--paper` | `#f5efe0` | 배경 (한지) |
| `--ink` | `#2c2826` | 본문 글자 (먹) |
| `--accent-red` | `#a8322a` | 포인트 (단청 주칠) |
| `--accent-blue` | `#1e5673` | 보조 (단청 청) |
| `--gold` | `#b8956a` | 장식 (금) |
