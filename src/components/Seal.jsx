// 빨간 사각 도장(印章) 마크 — 재사용 가능
export default function Seal({ text = '謹邀' }) {
  return (
    <div className="seal-mark" aria-hidden="true">
      <span className="seal">{text}</span>
    </div>
  )
}
