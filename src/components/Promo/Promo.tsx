import React from "react";

import "./Promo.scss"
import "/src/fonts.scss"
import {ProductSlider} from "../PromoSlider/PromoSlider";

export const Promo = () => {
    return(
        <section className={"body-content__promo-section"}>
            <h1>в акции участвуют</h1>
            <div className={"promo-section__slider-container"}>
                <ProductSlider/>
            </div>
        </section>
    );
};