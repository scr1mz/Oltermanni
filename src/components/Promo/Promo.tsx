import React from 'react'

import './Promo.scss'

import { ProductSwiper } from '../PromoSwiper/PromoSwiper'

export const Promo: React.FC = () => {
  return (
        <section className={'body-content__promo-section'}>
            <h1>в акции участвуют</h1>
            <div className={'promo-section__slider-container'}>
                <ProductSwiper/>
            </div>
        </section>
  )
}
