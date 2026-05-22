import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { invitation } from '../data/invitation'
import Lightbox from './Lightbox'

// src/assets/gallery/ 폴더 안의 모든 사진을 자동으로 가져옵니다.
const galleryModules = import.meta.glob(
  '../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,svg,SVG}',
  { eager: true, import: 'default' },
)
const autoGallery = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url)

export default function Gallery() {
  const gallery =
    invitation.gallery && invitation.gallery.length > 0
      ? invitation.gallery
      : autoGallery
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [lightboxIdx, setLightboxIdx] = useState(null)

  if (!gallery || gallery.length === 0) return null

  return (
    <section className="gallery">
      <span className="punch-right" />
      <div className="section-eyebrow">寫眞</div>
      <h2 className="section-title">갤러리</h2>

      <Swiper
        modules={[Pagination, Navigation, A11y, Thumbs]}
        pagination={{ clickable: true }}
        navigation
        loop={gallery.length > 1}
        spaceBetween={8}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="main-swiper"
      >
        {gallery.map((src, i) => (
          <SwiperSlide key={i}>
            <button
              type="button"
              className="gallery-slide-btn"
              onClick={() => setLightboxIdx(i)}
              aria-label={`사진 ${i + 1} 확대 보기`}
            >
              <img src={src} alt={`gallery-${i + 1}`} loading="lazy" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs, A11y, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={6}
        slidesPerView={5}
        watchSlidesProgress
        freeMode
        className="thumb-swiper"
      >
        {gallery.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`thumb-${i + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery-caption">TAP TO ZOOM · SWIPE TO BROWSE</div>

      {lightboxIdx !== null && (
        <Lightbox
          images={gallery}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  )
}
