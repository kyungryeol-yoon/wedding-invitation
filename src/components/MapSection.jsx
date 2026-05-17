import { invitation } from '../data/invitation'

export default function MapSection() {
  const { wedding } = invitation
  return (
    <section className="map">
      <div className="section-title">LOCATION</div>
      <h2 className="section-subtitle">오시는 길</h2>

      <div className="map-embed">지도 영역 (네이버/카카오 SDK 키 설정 후 표시)</div>

      <div className="map-buttons">
        <a href={wedding.naverMapUrl} target="_blank" rel="noreferrer">
          네이버 지도
        </a>
        <a href={wedding.kakaoMapUrl} target="_blank" rel="noreferrer">
          카카오맵
        </a>
        <a href={wedding.tmapUrl} target="_blank" rel="noreferrer">
          티맵
        </a>
      </div>
    </section>
  )
}
