import { useState } from 'react'
import { invitation } from '../data/invitation'
import { Greek, Procession } from './Ornaments'
import { compareNatural } from '../utils/naturalSort'

// src/assets/hero/ 폴더에 hero1.png, hero2.jpg 등을 올리면 새로고침마다 랜덤 표시.
// 폴더가 비어 있으면 invitation.heroImage 한 장으로 폴백.
const heroModules = import.meta.glob(
  '../assets/hero/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
  { eager: true, import: 'default' },
)
const heroPool = Object.entries(heroModules)
  .sort(([a], [b]) => compareNatural(a, b))
  .map(([, url]) => url)

function pickHero(fallback) {
  if (heroPool.length === 0) return fallback
  return heroPool[Math.floor(Math.random() * heroPool.length)]
}

export default function Hero() {
  const { groom, bride, wedding, subBrand, heroImage, heroImageFallback } = invitation
  const [src, setSrc] = useState(() => pickHero(heroImage))

  return (
    <section className="hero">
      <div className="hero-photo">
        <img
          src={src}
          alt={`${groom.name} & ${bride.name}`}
          onError={() => {
            // 풀에서 고른 사진 로드 실패 → 단일 heroImage → SVG 플레이스홀더 순으로 폴백
            if (src !== heroImage && heroImage) {
              setSrc(heroImage)
            } else if (heroImageFallback && src !== heroImageFallback) {
              setSrc(heroImageFallback)
            }
          }}
        />
      </div>

      <div className="hero-meta">
        <h1 className="names">
          <span>{groom.name}</span>
          <span className="amp">&amp;</span>
          <span>{bride.name}</span>
        </h1>

        <div className="date">{wedding.displayDate}</div>

        <div className="ornament">
          <Greek />
        </div>

        <div className="venue">{wedding.venueName}</div>
        <div className="venue-detail">{wedding.venueDetail}</div>

        <div className="procession">
          <Procession />
        </div>

        <div className="sub-brand">{subBrand}</div>
      </div>
    </section>
  )
}
