import React from "react";

import "./Footer.scss"
import "/src/fonts.scss"

export const Footer = () => {
    return (
        <footer>
            <div className={"footer__content"}>
                <div className={"footer__contacts"}>
                    <span>Информационная линия</span>
                    <span className={"footer__number"}>8 800 333-15-25</span>
                    <p>2020 ООО "Валио"</p>
                </div>
                <div className={"footer__nav"}>
                    <ul className={"footer-nav__menu"}>
                        <li>
                            Обратная связь
                        </li>
                        <li>
                            Правила
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
                <div className={"footer__join-us"}>

                </div>
            </div>
        </footer>
    );
};