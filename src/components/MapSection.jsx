import { invitation } from '../data/invitation'

export default function MapSection() {
  const { wedding } = invitation
  return (
    <section className="map">
      <span className="punch-right" />
      <div className="section-eyebrow">LOCATION</div>
      <h2 className="section-title">오시는 길</h2>

      <div className="map-embed">SUBWAY · LINE 2 · 8 · JAMSIL · EXIT 4</div>

      <div className="map-buttons">
        <a href={wedding.naverMapUrl} target="_blank" rel="noreferrer">
          NAVER
        </a>
        <a href={wedding.kakaoMapUrl} target="_blank" rel="noreferrer">
          KAKAO
        </a>
        <a href={wedding.tmapUrl} target="_blank" rel="noreferrer">
          T MAP
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
