import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Zoom, Navigation, Pagination, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  // 라이트박스가 열려있는 동안 페이지 스크롤 잠금
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // ESC 로 닫기
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // .app 에 mask 가 걸려 있어 position: fixed 가 viewport 기준이 안 되므로
  // document.body 로 포털 렌더링해 마스크 영향에서 벗어나게 한다.
  return createPortal(
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="사진 확대 보기">
      <div className="lightbox-toolbar">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>
      </div>

      <Swiper
        modules={[Zoom, Navigation, Pagination, A11y, Keyboard]}
        zoom={{ maxRatio: 4, toggle: true }}
        navigation
        pagination={{ type: 'fraction' }}
        keyboard={{ enabled: true }}
        initialSlide={initialIndex}
        spaceBetween={20}
        className="lightbox-swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-zoom-container">
              <img src={src} alt={`사진 ${i + 1}`} draggable={false} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lightbox-hint">
        손가락 두 개로 확대 · 두 번 탭해도 확대 · 좌우로 넘기기
      </div>
    </div>,
    document.body,
  )
}
