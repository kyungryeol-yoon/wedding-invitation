import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { invitation } from '../data/invitation'

// src/assets/gallery/ 폴더 안의 모든 사진을 자동으로 가져옵니다.
// 파일을 폴더에 넣고 커밋만 하면 갤러리에 자동으로 노출됩니다.
// 노출 순서는 파일명 알파벳/숫자 순 (01.jpg, 02.jpg, 03.jpg ...)
const galleryModules = import.meta.glob(
  '../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,svg,SVG}',
  { eager: true, import: 'default' },
)
const autoGallery = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url)

export default function Gallery() {
  // invitation.js 의 gallery 배열이 비어있지 않으면 그것을 우선 사용
  const gallery =
    invitation.gallery && invitation.gallery.length > 0
      ? invitation.gallery
      : autoGallery
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  if (!gallery || gallery.length === 0) return null

  return (
    <section className="gallery">
      <span className="punch-right" />
      <div className="section-eyebrow">GALLERY</div>
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
            <img src={src} alt={`gallery-${i + 1}`} loading="lazy" />
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

      <div className="gallery-caption">← SWIPE · TAP THUMBNAIL →</div>
    </section>
  )
}
