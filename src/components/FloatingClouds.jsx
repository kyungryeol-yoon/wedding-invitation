// 조선 길상문 구름 — 둥둥 떠다니는 배경 레이어용
function CloudShape({ variant = 0 }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 110 50" aria-hidden="true">
        <path
          d="M8 38 Q3 26 14 22 Q14 10 28 12 Q34 4 46 10 Q56 6 60 18 Q74 18 76 30 Q90 30 90 40 Q90 46 80 46 L20 46 Q8 46 8 38 Z"
          fill="currentColor"
        />
        <circle cx="20" cy="30" r="2.2" fill="none" stroke="var(--kraft)" strokeWidth="1" />
        <circle cx="56" cy="22" r="1.8" fill="none" stroke="var(--kraft)" strokeWidth="1" />
      </svg>
    )
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 90 44" aria-hidden="true">
        <path
          d="M6 32 Q2 20 12 18 Q14 8 26 12 Q36 4 46 12 Q60 12 62 22 Q76 24 74 34 Q76 40 66 40 L16 40 Q6 40 6 32 Z"
          fill="currentColor"
        />
        <path
          d="M22 28 Q26 24 30 28 Q34 24 38 28"
          fill="none"
          stroke="var(--kraft)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  // variant 0 — 가장 클래식한 운두(雲頭)
  return (
    <svg viewBox="0 0 100 46" aria-hidden="true">
      <path
        d="M8 34 Q4 22 14 20 Q14 10 26 12 Q34 4 44 10 Q54 6 58 18 Q70 18 72 28 Q84 28 84 36 Q84 42 74 42 L18 42 Q8 42 8 34 Z"
        fill="currentColor"
      />
      <circle cx="16" cy="26" r="2" fill="none" stroke="var(--kraft)" strokeWidth="1" />
      <circle cx="52" cy="20" r="1.6" fill="none" stroke="var(--kraft)" strokeWidth="1" />
    </svg>
  )
}

// 구름 배치 — top(%) / 크기(px) / 방향 / 속도(sec) / 지연(sec) / 투명도 / 모양 변종
const CLOUDS = [
  { top: '4%',  size: 95,  dir:  1, dur: 70,  delay: 0,   opacity: 0.10, variant: 0 },
  { top: '12%', size: 55,  dir: -1, dur: 90,  delay: -25, opacity: 0.07, variant: 2 },
  { top: '22%', size: 110, dir:  1, dur: 110, delay: -40, opacity: 0.08, variant: 1 },
  { top: '32%', size: 70,  dir: -1, dur: 80,  delay: -10, opacity: 0.10, variant: 0 },
  { top: '42%', size: 90,  dir:  1, dur: 100, delay: -55, opacity: 0.07, variant: 2 },
  { top: '52%', size: 60,  dir: -1, dur: 75,  delay: -30, opacity: 0.09, variant: 1 },
  { top: '62%', size: 100, dir:  1, dur: 95,  delay: -15, opacity: 0.08, variant: 0 },
  { top: '72%', size: 65,  dir: -1, dur: 85,  delay: -45, opacity: 0.10, variant: 2 },
  { top: '82%', size: 85,  dir:  1, dur: 105, delay: -20, opacity: 0.07, variant: 1 },
  { top: '92%', size: 55,  dir: -1, dur: 78,  delay: -5,  opacity: 0.09, variant: 0 },
]

export default function FloatingClouds() {
  return (
    <div className="cloud-layer" aria-hidden="true">
      {CLOUDS.map((c, i) => (
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
          <CloudShape variant={c.variant} />
        </div>
      ))}
    </div>
  )
}
