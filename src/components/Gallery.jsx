import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { invitation } from '../data/invitation'

export default function Gallery() {
  const { gallery } = invitation
  if (!gallery || gallery.length === 0) return null

  return (
    <section className="gallery">
      <span className="punch-right" />
      <div className="section-eyebrow">GALLERY</div>
      <h2 className="section-title">우리의 순간들</h2>

      <Swiper
        modules={[Pagination, Navigation, A11y]}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={8}
        slidesPerView={1}
      >
        {gallery.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`gallery-${i + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery-caption">← SWIPE →</div>
    </section>
  )
}
