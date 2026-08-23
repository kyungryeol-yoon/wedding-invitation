import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Zoom, Navigation, Pagination, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/* 사진 여러 장은 images 로, 사진이 아닌 것(예: 안내도 SVG)은 slides 로 넘깁니다.
   확대·이동은 Swiper 의 Zoom 이 맡는데, .swiper-zoom-container 안의
   img 뿐 아니라 svg 도 대상으로 잡아주므로 안내도도 그대로 확대됩니다. */
export default function Lightbox({
  images,
  slides,
  initialIndex = 0,
  onClose,
  label = '사진 확대 보기',
  hint = '손가락 두 개로 확대 · 두 번 탭해도 확대 · 좌우로 넘기기',
}) {
  const items =
    slides ??
    images.map((src, i) => (
      <img key={src} src={src} alt={`사진 ${i + 1}`} draggable={false} />
    ))
  // 한 장뿐이면 넘길 곳이 없으므로 화살표와 쪽번호를 숨깁니다.
  const many = items.length > 1

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
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={label}>
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
        navigation={many}
        pagination={many ? { type: 'fraction' } : false}
        keyboard={{ enabled: true }}
        initialSlide={initialIndex}
        spaceBetween={20}
        className="lightbox-swiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-zoom-container">{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lightbox-hint">{hint}</div>
    </div>,
    document.body,
  )
}
