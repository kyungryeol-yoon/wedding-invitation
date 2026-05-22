import { useState } from 'react'
import { invitation } from '../data/invitation'
import { Greek, Procession } from './Ornaments'

export default function Hero() {
  const { groom, bride, wedding, subBrand, heroImage, heroImageFallback } = invitation
  const [src, setSrc] = useState(heroImage)

  return (
    <section className="hero">
      <div className="hero-photo">
        <img
          src={src}
          alt={`${groom.name} & ${bride.name}`}
          onError={() => {
            if (heroImageFallback && src !== heroImageFallback) {
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
