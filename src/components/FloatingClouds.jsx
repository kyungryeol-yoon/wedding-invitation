import OrnamentImg from './OrnamentImg'
import { invitation } from '../data/invitation'

// 구름 배치 — top(%) / 너비(px) / 방향 / 속도(sec) / 지연(sec) / 투명도 / 사용할 구름 종류
const PLAN = [
  { top: '4%',  size: 130, dir:  1, dur: 70,  delay: 0,   opacity: 0.10, key: 'cloud1' },
  { top: '12%', size: 90,  dir: -1, dur: 90,  delay: -25, opacity: 0.08, key: 'cloud3' },
  { top: '22%', size: 150, dir:  1, dur: 110, delay: -40, opacity: 0.07, key: 'cloud2' },
  { top: '32%', size: 100, dir: -1, dur: 80,  delay: -10, opacity: 0.10, key: 'cloud1' },
  { top: '42%', size: 120, dir:  1, dur: 100, delay: -55, opacity: 0.07, key: 'cloud2' },
  { top: '52%', size: 95,  dir: -1, dur: 75,  delay: -30, opacity: 0.09, key: 'cloud3' },
  { top: '62%', size: 140, dir:  1, dur: 95,  delay: -15, opacity: 0.08, key: 'cloud1' },
  { top: '72%', size: 95,  dir: -1, dur: 85,  delay: -45, opacity: 0.10, key: 'cloud3' },
  { top: '82%', size: 125, dir:  1, dur: 105, delay: -20, opacity: 0.07, key: 'cloud2' },
  { top: '92%', size: 90,  dir: -1, dur: 78,  delay: -5,  opacity: 0.09, key: 'cloud1' },
]

export default function FloatingClouds() {
  const { ornaments } = invitation
  return (
    <div className="cloud-layer" aria-hidden="true">
      {PLAN.map((c, i) => (
        <div
          key={i}
          className={`floating-cloud ${c.dir > 0 ? 'drift-right' : 'drift-left'}`}
          style={{
            top: c.top,
            width: `${c.size}px`,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
            opacity: c.opacity,
          }}
        >
          <OrnamentImg asset={ornaments[c.key]} alt="" />
        </div>
      ))}
    </div>
  )
}
