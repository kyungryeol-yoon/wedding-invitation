import { invitation } from '../data/invitation'
import { CornerCloud, Moon, Greek, Procession } from './Ornaments'

export default function Hero() {
  const { groom, bride, wedding, brand, subBrand } = invitation

  const groomParents = [groom.father, groom.mother].filter(Boolean).join(' · ')
  const brideParents = [bride.father, bride.mother].filter(Boolean).join(' · ')

  return (
    <section className="hero">
      <div className="clouds-top">
        <CornerCloud className="cloud" />
        <Moon className="moon" />
      </div>

      <div className="happy-en">HAPPY WEDDING DAY</div>
      <div className="happy-ko">{wedding.venueName}</div>

      <div className="stub-ornament">
        <Greek />
      </div>

      <div className="ticket-row">
        <div className="label">날짜</div>
        <div className="value">{wedding.displayDate}</div>
      </div>

      <div className="ticket-row">
        <div className="label">주인공</div>
        <div className="names">
          <div>
            <div className="name">{groom.name}</div>
            {groomParents && (
              <div className="parents">{groomParents}</div>
            )}
          </div>
          <div className="amp">✦</div>
          <div>
            <div className="name">{bride.name}</div>
            {brideParents && (
              <div className="parents">{brideParents}</div>
            )}
          </div>
        </div>
      </div>

      <div className="ticket-row">
        <div className="label">장소</div>
        <div className="value" style={{ fontSize: 16 }}>{wedding.venueDetail}</div>
      </div>

      <div className="procession">
        <Procession />
      </div>

      <div className="brand">{brand}</div>
      <div className="sub-brand">{subBrand}</div>

      <div className="clouds-top" style={{ marginTop: 16 }}>
        <CornerCloud className="cloud" flip />
        <CornerCloud className="cloud" />
      </div>
    </section>
  )
}
