import React from "react";
import "./MainPage.scss";
import {Promo} from "../../components/Promo/Promo"
import {Element} from "react-scroll"

export const MainPage = () => {

    return (
        <div className={"body-content"}>
            <section className={"body-content__top-content"}>
                <div className={"body-content__top-content top-content__container"}>
                    <div className={"top-content__image-stack-left"}>
                        <img className={"image-stack-left__kitchen"} src="/images/kitchen.png" alt={"kitchen"}/>
                        <img className={"image-stack-left__balls"} src="/images/ballsX2.png" alt={"balls"}/>
                        <img className={"image-stack-left__intro"} src="/images/intro.svg"/>
                    </div>
                    <div className={"top-content__image-stack-right"}>
                        <img className={"oltermanni-banner"} src="/images/banner.png" alt="oltermanni-banner"/>
                        <img className={"oltermanni-tag"} src="/images/tag.png" alt="oltermanni-tag"/>
                    </div>
                </div>
                <a href="#" className={"Top-content__download-check"}>загрузить чек</a>
            </section>
            <Element name="rools">
                <section className={"body-content__info-content"}>
                    <img className={"info-content__baloon"} src="/images/baloon.svg" alt="baloon"/>
                    <img className={"info-content__decor1"} src="/images/decoration1.svg" alt="decor1"/>
                    <div className={"info-content__top-container"}>
                        <h1>нам 40 лет — вам подарки</h1>
                    </div>
                    <div className={"info-content__bottom-container"}>
                        <div className={"info-content__rool-container"}>
                            <img src="/images/basket.svg" alt="basket"/>
                            <span>Покупайте сыр Oltermanni</span>
                        </div>

                        <img className={"info-content__arrow"} src="/images/right_arrow.svg" alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src="/images/computer.svg" alt="computer"/>
                            <span>Регистрируйте чеки на сайте в период с 1 сентября по 30 ноября 2020 года</span>
                        </div>

                        <img className={"info-content__arrow"} src="/images/right_arrow.svg" alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src="/images/mobile.svg" alt="mobile"/>
                            <span>Получайте гарантированные призы — деньги на телефон</span>
                        </div>

                        <img className={"info-content__arrow"} src="/images/right_arrow.svg" alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src="/images/draw.svg" alt="draw"/>
                            <span>Участвуйте в еженедельных розыгрышах</span>
                        </div>

                        <img className={"info-content__arrow"} src="/images/right_arrow.svg" alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src="/images/ticket.svg" alt="ticket"/>
                            <span>Получите возможность выиграть 400 000 ₽ на новый интерьер</span>
                        </div>
                    </div>
                    <img className={"info-content__decor2"} src="/images/decoration2.svg" alt="decor2"/>
                </section>
            </Element>
            <Promo/>
            <div className={"body-content__body-end"}>
                <h1>ПРИЗЫ</h1>
            </div>
        </div>
    );
};