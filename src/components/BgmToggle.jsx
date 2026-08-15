import { useEffect, useRef, useState } from 'react'
import { invitation } from '../data/invitation'

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        d="M9 18.5 A2.5 2.5 0 1 1 9 13.5 A2.5 2.5 0 0 1 9 18.5 Z M11.5 16 V5.5 L19 4 V14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17 A2.5 2.5 0 1 1 19 12 A2.5 2.5 0 0 1 19 17 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        d="M9 18.5 A2.5 2.5 0 1 1 9 13.5 A2.5 2.5 0 0 1 9 18.5 Z M11.5 16 V5.5 L19 4 V14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17 A2.5 2.5 0 1 1 19 12 A2.5 2.5 0 0 1 19 17 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 4 L21 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function BgmToggle() {
  const { bgm } = invitation
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  // 하객이 직접 끈 뒤에는 자동 재생이 다시 끼어들지 않도록 기억합니다.
  const dismissedRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio && typeof bgm?.volume === 'number') audio.volume = bgm.volume
  }, [bgm])

  // 브라우저가 소리 있는 자동 재생을 막기 때문에,
  // 하객의 첫 조작(탭 · 스크롤 · 키 입력)을 신호로 삼아 재생을 시작합니다.
  useEffect(() => {
    if (!bgm?.src) return
    const audio = audioRef.current
    if (!audio) return

    async function start() {
      if (dismissedRef.current) return
      try {
        await audio.play()
        setPlaying(true)
        detach()
      } catch {
        // 아직 허용되지 않았다면 다음 조작을 기다립니다.
      }
    }

    const events = ['pointerdown', 'touchstart', 'keydown', 'scroll']
    function detach() {
      events.forEach((e) => window.removeEventListener(e, start))
    }
    events.forEach((e) =>
      window.addEventListener(e, start, { passive: true }),
    )

    start()
    return detach
  }, [bgm])

  if (!bgm?.src) return null

  async function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      dismissedRef.current = false
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    } else {
      dismissedRef.current = true
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={bgm.src}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className={`bgm-btn ${playing ? 'on' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? '배경음악 끄기' : '배경음악 켜기'}
        title={playing ? '배경음악 끄기' : '배경음악 켜기'}
      >
        {playing ? <NoteIcon /> : <MutedIcon />}
      </button>
    </>
  )
}
