import React from "react";
import "./MainPage.scss";
import {Element} from "react-scroll"

import {Promo} from "../../components/Promo/Promo"

import Img_kitchen from "../../../public/images/kitchen.png"
import Img_balls from "../../../public/images/balls.png"
import Img_ballsX2 from "../../../public/images/ballsX2.png"
import Img_intro from "../../../public/images/intro.svg"
import Img_banner from "../../../public/images/banner.png"
import Img_tag from "../../../public/images/tag.png"
import Img_baloonX2 from "../../../public/images/baloon.svg"
import Img_decor1 from "../../../public/images/decoration1.svg"
import Img_decor2 from "../../../public/images/decoration2.svg"
import Img_basket from "../../../public/images/basket.svg"
import Img_right_arrow from "../../../public/images/right_arrow.svg"
import Img_computer from "../../../public/images/computer.svg"
import Img_mobile from "../../../public/images/mobile.svg"
import Img_draw from "../../../public/images/draw.svg"
import Img_ticket from "../../../public/images/ticket.svg"
import {useMobileMenu} from "../../components/MobileMenuProvider/MobileMenuProvider";

export const MainPage: React.FC = () => {
    return (
        <div className={"body-content"}>
            <section className={"body-content__top-content"}>
                <div className={"body-content__top-content top-content__container"}>
                    <div className={"top-content__image-stack-left"}>
                        <img className={"image-stack-left__kitchen"} src={Img_kitchen} alt={"kitchen"}/>
                        <img className={"image-stack-left__balls"} src={Img_balls} srcSet={Img_ballsX2} alt={"balls"}/>
                        <img className={"image-stack-left__intro"} src={Img_intro} alt={"intro"}/>
                    </div>
                    <div className={"top-content__image-stack-right"}>
                        <img className={"oltermanni-banner"} src={Img_banner} alt="oltermanni-banner"/>
                        <img className={"oltermanni-tag"} src={Img_tag} alt="oltermanni-tag"/>
                    </div>
                </div>
                <a href="#" className={"Top-content__download-check"}>загрузить чек</a>
            </section>
            <Element className={"rools"} name="rools">
                <section className={"body-content__info-content"}>
                    <img className={"info-content__baloon"} src={Img_baloonX2} alt="baloon"/>
                    <img className={"info-content__decor1"} src={Img_decor1} alt="decor1"/>
                    <div className={"info-content__top-container"}>
                        <h1>нам 40 лет — вам подарки</h1>
                    </div>
                    <div className={"info-content__bottom-container"}>
                        <div className={"info-content__rool-container"}>
                            <img src={Img_basket} alt="basket"/>
                            <span>Покупайте сыр Oltermanni</span>
                        </div>

                        <img className={"info-content__arrow"} src={Img_right_arrow} alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src={Img_computer} alt="computer"/>
                            <span>Регистрируйте чеки на сайте в период с 1 сентября по 30 ноября 2020 года</span>
                        </div>

                        <img className={"info-content__arrow"} src={Img_right_arrow} alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src={Img_mobile} alt="mobile"/>
                            <span>Получайте гарантированные призы — деньги на телефон</span>
                        </div>

                        <img className={"info-content__arrow"} src={Img_right_arrow} alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src={Img_draw} alt="draw"/>
                            <span>Участвуйте в еженедельных розыгрышах</span>
                        </div>

                        <img className={"info-content__arrow"} src={Img_right_arrow} alt="arrow"/>

                        <div className={"info-content__rool-container"}>
                            <img src={Img_ticket} alt="ticket"/>
                            <span>Получите возможность выиграть 400 000 ₽ на новый интерьер</span>
                        </div>
                    </div>
                    <img className={"info-content__decor2"} src={Img_decor2} alt="decor2"/>
                </section>
            </Element>
            <Promo/>
            <div className={"body-content__body-end"}>

            </div>
        </div>
    );
};