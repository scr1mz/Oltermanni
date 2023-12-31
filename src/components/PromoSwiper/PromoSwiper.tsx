import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './PromoSwiper.scss'

// Импорт картинок
import product1Image from '../../assets/content/promo/product1.png'
import product2Image from '../../assets/content/promo/product2.png'
import product3Image from '../../assets/content/promo/product3.png'
import product4Image from '../../assets/content/promo/product4.png'
import product5Image from '../../assets/content/promo/product2.png'

export const ProductSwiper: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: product1Image,
      title: 'Лёгкий, брусок 180 г'
    },
    {
      id: 2,
      image: product2Image,
      title: 'Лёгкий, слайсы 120 г'
    },
    {
      id: 3,
      image: product3Image,
      title: 'Сливочный, брусок 200 г'
    },
    {
      id: 4,
      image: product4Image,
      title: 'Сливочный, слайсы 130 г'
    },
    {
      id: 5,
      image: product5Image,
      title: 'Лёгкий, слайсы 225 г'
    },
    {
      id: 6,
      image: product4Image,
      title: 'Сливочный, слайсы 250 г'
    },
    {
      id: 7,
      image: product3Image,
      title: 'Сливочный брусок, 300 г'
    },
    {
      id: 8,
      image: product5Image,
      title: 'Лёгкий, слайсы 300 г'
    }
  ]

  return (
        <div className="product-slider">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                loop={'true'}
                navigation
                pagination={{ clickable: true }}
                effect={'coverflow'}
                grabcursor={'true'}
                onSwiper={(swiper) => { console.log(swiper) }}
                onSlideChange={() => { console.log('slide change') }}
                breakpoints= {{
                  // ширина >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 0
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 0
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  }
                }
                }
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="product">
                            <img src={slide.image} alt={slide.title} />
                            <h2>{slide.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  )
}
