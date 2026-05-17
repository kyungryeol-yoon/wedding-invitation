import OrnamentImg from './OrnamentImg'
import { invitation } from '../data/invitation'

// 가마 + 말 탄 신랑 행렬 — 사용자 업로드 이미지(없으면 SVG)로 렌더
export function Procession({ className }) {
  const { palanquin, horseRider } = invitation.ornaments
  return (
    <div className={`procession-imgs ${className || ''}`}>
      <OrnamentImg asset={palanquin} alt="전통 가마 행렬" className="proc-palanquin" />
      <OrnamentImg asset={horseRider} alt="말 탄 신랑" className="proc-horse" />
    </div>
  )
}

// 코너 장식용 구름 (현재는 사용 안 함, 호환을 위해 보존)
export function CornerCloud({ className, flip = false, asset }) {
  const target = asset || invitation.ornaments.cloud1
  return (
    <OrnamentImg
      asset={target}
      alt=""
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    />
  )
}

// 단청 회문 라인 (디바이더용) — 작고 단순해서 인라인 SVG 유지
export function Greek({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 7 H10 V2 H18 V12 H26 V2 H34 V12 H42 V2 H50 V12 H58 V2 H66 V12 H74 V2 H82 V12 H90 V2 H98 V12 H106 V2 H114 V7 H118" />
    </svg>
  )
}

// 달 (현재는 사용 안 함, 호환을 위해 보존)
export function Moon({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="14" fill="currentColor" />
      <circle cx="24" cy="16" r="3" fill="var(--paper)" opacity="0.4" />
      <circle cx="14" cy="24" r="2" fill="var(--paper)" opacity="0.4" />
    </svg>
  )
}
