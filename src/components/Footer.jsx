export default function Footer({ onShare }) {
  async function share() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: '저희 결혼합니다',
          text: '모바일 청첩장을 보내드립니다.',
          url,
        })
      } catch {
        // user cancelled
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
    <footer className="footer">
      <div className="share">
        <button type="button" onClick={share}>
          청첩장 공유하기
        </button>
      </div>
      <div>made with ❤︎</div>
    </footer>
  )
}
