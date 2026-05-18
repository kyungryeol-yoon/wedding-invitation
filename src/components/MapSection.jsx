import { invitation } from '../data/invitation'
import NaverMap from './NaverMap'

function NaverIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#03C75A" />
      <path
        d="M9 6.5 H12 L15 12.6 V6.5 H17 V17.5 H14 L11 11.4 V17.5 H9 Z"
        fill="#ffffff"
      />
    </svg>
  )
}

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#FEE500" />
      <path
        d="M12 6.4 C7.6 6.4 4 9.1 4 12.5 C4 14.7 5.4 16.6 7.5 17.7 L6.7 20.7 C6.6 21 7 21.2 7.2 21.1 L10.8 18.6 C11.2 18.6 11.6 18.7 12 18.7 C16.4 18.7 20 16 20 12.5 C20 9.1 16.4 6.4 12 6.4 Z"
        fill="#3A1D1D"
      />
    </svg>
  )
}

export default function MapSection() {
  const { wedding } = invitation
  return (
    <section className="map">
      <span className="punch-right" />
      <div className="section-eyebrow">LOCATION</div>
      <h2 className="section-title">오시는 길</h2>

      <NaverMap />

      <div className="map-buttons">
        <a
          href={wedding.naverMapUrl}
          target="_blank"
          rel="noreferrer"
          className="brand-btn brand-naver"
          aria-label="네이버 지도에서 보기"
        >
          <NaverIcon />
          <span>네이버 지도</span>
        </a>
        <a
          href={wedding.kakaoMapUrl}
          target="_blank"
          rel="noreferrer"
          className="brand-btn brand-kakao"
          aria-label="카카오맵에서 보기"
        >
          <KakaoIcon />
          <span>카카오맵</span>
        </a>
      </div>

      <div className="map-info">
        <div className="map-info-row">
          <div className="map-info-label">지하철</div>
          <div className="map-info-body">
            2호선 · 8호선 <b>잠실역 4번 출구</b>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">도보</div>
          <div className="map-info-body">
            잠실역 4번 출구에서 지하로 연결되어 있습니다.<br />
            <b>롯데마트 제타플렉스</b> 방향으로 직진 →
            <b> 롯데월드 민속박물관</b> 방향으로 이동 →
            엘리베이터로 <b>3층</b>까지 올라오시면 됩니다.
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">주차</div>
          <div className="map-info-body">
            롯데월드 어드벤처 주차장 이용 가능 <br />
            <span className="muted">(혼례 이용 시 무료 2시간 제공)</span>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">참고</div>
          <div className="map-info-body muted">
            혼례 시간대(오전~정오)는 주차장과 출입 동선이 혼잡할 수 있습니다.
            여유 있게 출발 부탁드립니다.
          </div>
        </div>
      </div>
    </section>
  )
}
