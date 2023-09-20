import React from 'react'
import './MainPage.scss'
import { Element } from 'react-scroll'

import { Promo } from '../../components/Promo/Promo'

import Img_kitchen from '../../assets/content/topContent/kitchen.png'
import Img_balls from '../../assets/content/topContent/balls.png'
import Img_ballsX2 from '../../assets/content/topContent/ballsX2.png'
import Img_intro from '../../assets/content/topContent/intro.svg'
import Img_banner from '../../assets/content/topContent/banner.png'
import Img_tag from '../../assets/content/topContent/tag.png'
import Img_balloonX2 from '../../assets/content/decorations/balloon.svg'
import Img_decor1 from '../../assets/content/decorations/decoration1.svg'
import Img_decor2 from '../../assets/content/decorations/decoration2.svg'
import Img_basket from '../../assets/content/rules/basket.svg'
import Img_right_arrow from '../../assets/icons/right_arrow.svg'
import Img_computer from '../../assets/content/rules/computer.svg'
import Img_mobile from '../../assets/content/rules/mobile.svg'
import Img_draw from '../../assets/content/rules/draw.svg'
import Img_ticket from '../../assets/content/rules/ticket.svg'

export const MainPage: React.FC = () => {
  return (
        <div className={'body-content'}>
            <section className={'body-content__top-content'}>
                <div className={'body-content__top-content top-content__container'}>
                    <div className={'top-content__image-stack-left'}>
                        <img className={'image-stack-left__kitchen'} src={Img_kitchen} alt={'kitchen'}/>
                        <img className={'image-stack-left__balls'} src={Img_balls} srcSet={Img_ballsX2} alt={'balls'}/>
                        <img className={'image-stack-left__intro'} src={Img_intro} alt={'intro'}/>
                    </div>
                    <div className={'top-content__image-stack-right'}>
                        <img className={'oltermanni-banner'} src={Img_banner} alt="oltermanni-banner"/>
                        <img className={'oltermanni-tag'} src={Img_tag} alt="oltermanni-tag"/>
                    </div>
                </div>
                <a href="#" className={'Top-content__download-check'}>загрузить чек</a>
            </section>
            <Element className={'rules'} name="rules">
                <section className={'body-content__info-content'}>
                    <img className={'info-content__balloon'} src={Img_balloonX2} alt="balloon"/>
                    <img className={'info-content__decor1'} src={Img_decor1} alt="decor1"/>
                    <div className={'info-content__top-container'}>
                        <h1>нам 40 лет — вам подарки</h1>
                    </div>
                    <div className={'info-content__bottom-container'}>
                        <div className={'info-content__rule-container'}>
                            <img src={Img_basket} alt="basket"/>
                            <span>Покупайте сыр Oltermanni</span>
                        </div>

                        <img className={'info-content__arrow'} src={Img_right_arrow} alt="arrow"/>

                        <div className={'info-content__rule-container'}>
                            <img src={Img_computer} alt="computer"/>
                            <span>Регистрируйте чеки на сайте в период с 1 сентября по 30 ноября 2020 года</span>
                        </div>

                        <img className={'info-content__arrow'} src={Img_right_arrow} alt="arrow"/>

                        <div className={'info-content__rule-container'}>
                            <img src={Img_mobile} alt="mobile"/>
                            <span>Получайте гарантированные призы — деньги на телефон</span>
                        </div>

                        <img className={'info-content__arrow'} src={Img_right_arrow} alt="arrow"/>

                        <div className={'info-content__rule-container'}>
                            <img src={Img_draw} alt="draw"/>
                            <span>Участвуйте в еженедельных розыгрышах</span>
                        </div>

                        <img className={'info-content__arrow'} src={Img_right_arrow} alt="arrow"/>

                        <div className={'info-content__rule-container'}>
                            <img src={Img_ticket} alt="ticket"/>
                            <span>Получите возможность выиграть 400 000 ₽ на новый интерьер</span>
                        </div>
                    </div>
                    <img className={'info-content__decor2'} src={Img_decor2} alt="decor2"/>
                </section>
            </Element>
            <Promo/>
            <div className={'body-content__body-end'}>

            </div>
        </div>
  )
}
