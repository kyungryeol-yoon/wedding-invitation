// 종이 청첩장의 검정 일러스트 톤을 그대로 따라가는 장식용 SVG들.

export function CloudLeft({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 50"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 30 Q5 18 18 18 Q18 8 30 10 Q36 4 44 10 Q56 8 56 20 Q66 22 64 32 Q66 42 56 42 L18 42 Q4 42 5 30 Z" />
      <circle cx="14" cy="22" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 30 Q34 26 38 30 Q42 26 46 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CloudRight({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 50"
      fill="currentColor"
      aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}
    >
      <path d="M5 30 Q5 18 18 18 Q18 8 30 10 Q36 4 44 10 Q56 8 56 20 Q66 22 64 32 Q66 42 56 42 L18 42 Q4 42 5 30 Z" />
      <circle cx="14" cy="22" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 30 Q34 26 38 30 Q42 26 46 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Moon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14" fill="currentColor" />
      <circle cx="24" cy="16" r="3" fill="var(--kraft)" opacity="0.4" />
      <circle cx="14" cy="24" r="2" fill="var(--kraft)" opacity="0.4" />
    </svg>
  )
}

export function CornerCloud({ className, flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 40"
      fill="currentColor"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M0 30 Q0 18 14 18 Q14 8 28 10 Q34 2 44 8 Q56 6 58 18 Q72 18 72 28 Q86 28 86 36 L0 36 Z" />
    </svg>
  )
}

// 한국 전통 무늬 (간략화한 회문/구름 띠) — 작은 가로 라인 장식
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

// 가마 / 행렬 (전통혼례 입장 행렬)
export function Procession({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 90"
      aria-hidden="true"
      fill="currentColor"
    >
      {/* 왼쪽: 가마 (사인교) */}
      <g>
        {/* 가마 본체 */}
        <rect x="20" y="40" width="56" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* 지붕 */}
        <path d="M14 40 L48 22 L82 40 Z" fill="currentColor" />
        <rect x="44" y="14" width="8" height="10" fill="currentColor" />
        {/* 가마꾼 다리 (앞뒤) */}
        <line x1="22" y1="68" x2="18" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="68" x2="34" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="64" y1="68" x2="68" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="68" x2="76" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* 손잡이 봉 */}
        <line x1="6" y1="56" x2="90" y2="56" stroke="currentColor" strokeWidth="2" />
        {/* 꽃 장식 */}
        <circle cx="38" cy="54" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="58" cy="54" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* 가운데: 청사초롱 든 시동 */}
      <g transform="translate(120 0)">
        <circle cx="14" cy="22" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 29 V46 L8 60 M14 46 L20 60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M14 38 L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="30" width="10" height="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="33" y1="22" x2="33" y2="30" stroke="currentColor" strokeWidth="2" />
      </g>

      {/* 오른쪽: 말 탄 신랑 + 마부 */}
      <g transform="translate(190 0)">
        {/* 말 몸통 */}
        <path d="M30 50 Q40 40 70 40 Q90 40 95 50 L95 64 Q88 66 80 64 L80 70 L70 70 L70 64 L48 64 L48 70 L38 70 L38 64 Q30 64 30 56 Z"
              fill="none" stroke="currentColor" strokeWidth="2" />
        {/* 말 머리 */}
        <path d="M95 50 L110 38 L120 40 L118 50 L106 54 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="112" cy="44" r="1.2" fill="currentColor" />
        {/* 말 꼬리 */}
        <path d="M30 50 Q22 52 24 62" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* 신랑 머리 */}
        <circle cx="62" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* 사모(모자) */}
        <path d="M53 16 H71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* 신랑 몸 */}
        <path d="M62 27 V42 L52 42 L62 42 L72 42 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* 마부 (왼쪽 사람) */}
        <circle cx="14" cy="28" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 34 V52 L8 66 M14 52 L20 66" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="14" y1="40" x2="30" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
