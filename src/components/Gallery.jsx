import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { invitation } from '../data/invitation'

export default function Gallery() {
  const { gallery } = invitation
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
