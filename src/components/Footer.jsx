import { invitation } from '../data/invitation'

export default function Footer({ onShare }) {
  async function share() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: '윤경렬 ♥ 김호정 결혼합니다',
          text: '2026. 09. 13. SUN 12:00 · 롯데월드 전통혼례',
          url,
        })
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        onShare?.('링크가 복사되었어요')
      } catch {
        onShare?.('복사에 실패했어요')
      }
    }
  }

  return (
    <section className="footer">
      <span className="punch-right" />
      <div className="share">
        <button type="button" onClick={share}>
          SHARE INVITATION
        </button>
      </div>
      <div>{invitation.subBrand}</div>
    </section>
  )
}
