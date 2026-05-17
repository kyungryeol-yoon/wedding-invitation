import { useEffect, useRef, useState } from 'react'
import OrnamentImg from './OrnamentImg'
import { invitation } from '../data/invitation'
import { effectsConfig } from '../config/effects'

function rand(min, max) {
  return min + Math.random() * (max - min)
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function buildPlan(config, pageH, viewportH) {
  const pages = Math.max(1, pageH / Math.max(viewportH, 1))
  const count =
    typeof config.count === 'number'
      ? config.count
      : Math.max(3, Math.round(config.density * pages))

  return Array.from({ length: count }, (_, i) => {
    const base = ((i + 0.5) / count) * 100 // 균등 분포
    const jitter = rand(-config.verticalJitter, config.verticalJitter) / count
    const top = Math.max(0, Math.min(100, base + jitter * count * 0.5))

    return {
      top: `${top}%`,
      size: Math.round(rand(config.sizeMin, config.sizeMax)),
      dir: Math.random() < config.rightwardRatio ? 1 : -1,
      dur: rand(config.speedMin, config.speedMax),
      delay: -rand(0, config.speedMax),
      opacity: rand(config.opacityMin, config.opacityMax),
      sway: rand(config.swayAmount * 0.4, config.swayAmount),
      key: pick(config.variants),
    }
  })
}

export default function FloatingClouds() {
  const config = effectsConfig.clouds
  const { ornaments } = invitation
  const layerRef = useRef(null)
  const [plan, setPlan] = useState([])

  useEffect(() => {
    if (!config.enabled) return

    let cancelled = false
    const measure = () => {
      if (cancelled) return
      const parent = layerRef.current?.parentElement
      if (!parent) return
      const pageH = parent.scrollHeight
      const vH = window.innerHeight
      setPlan(buildPlan(config, pageH, vH))
    }

    // 폰트·이미지가 어느 정도 로드된 뒤 한 번만 측정 → 구름이 흔들리지 않음
    const t1 = setTimeout(measure, 250)
    let t2
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        t2 = setTimeout(measure, 150)
      })
    }
    return () => {
      cancelled = true
      clearTimeout(t1)
      if (t2) clearTimeout(t2)
    }
  }, [config])

  if (!config.enabled) return null

  return (
    <div className="cloud-layer" aria-hidden="true" ref={layerRef}>
      {plan.map((c, i) => (
        <div
          key={i}
          className={`floating-cloud ${c.dir > 0 ? 'drift-right' : 'drift-left'}`}
          style={{
            top: c.top,
            width: `${c.size}px`,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
            opacity: c.opacity,
            '--sway': `${c.sway}px`,
          }}
        >
          <OrnamentImg asset={ornaments[c.key]} alt="" />
        </div>
      ))}
    </div>
  )
}
