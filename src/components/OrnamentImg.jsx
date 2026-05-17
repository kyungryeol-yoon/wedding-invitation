import { useState } from 'react'

// 사용자가 PNG 를 아직 업로드하지 않은 경우 자동으로 SVG 플레이스홀더로 폴백
export default function OrnamentImg({ asset, alt = '', className, style }) {
  const [src, setSrc] = useState(asset.src)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        if (asset.fallback && src !== asset.fallback) {
          setSrc(asset.fallback)
        }
      }}
      draggable={false}
    />
  )
}
