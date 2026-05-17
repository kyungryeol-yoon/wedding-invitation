import { invitation } from '../data/invitation'

export default function MapSection() {
  const { wedding } = invitation
  return (
    <section className="map">
      <span className="punch-right" />
      <div className="section-eyebrow">LOCATION</div>
      <h2 className="section-title">오시는 길</h2>

      <div className="map-embed">SUBWAY · LINE 2 · JAMSIL · EXIT 4</div>

      <ul className="map-info-list">
        <li>지하철 2호선 · 8호선 잠실역 4번 출구와 바로 연결됩니다.</li>
        <li>롯데월드 어드벤처 B1F (잠실역에서 도보 약 3분)</li>
        <li>자가용 이용 시 지하주차장(A·H·M주차장) 이용 가능합니다.</li>
      </ul>

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
    </section>
  )
}
