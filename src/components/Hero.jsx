import { invitation } from '../data/invitation'

export default function Hero() {
  const { groom, bride, wedding, heroImage } = invitation
  return (
    <section className="hero">
      <div className="hero-mark">WE ARE GETTING MARRIED</div>
      {heroImage && (
        <img className="hero-image" src={heroImage} alt="wedding hero" />
      )}
      <div className="hero-names">
        <span>{groom.name}</span>
        <span className="amp">&</span>
        <span>{bride.name}</span>
      </div>
      <div className="hero-date">{wedding.displayDate}</div>
      <div className="hero-venue">
        {wedding.venueName} · {wedding.venueDetail}
      </div>
    </section>
  )
}
