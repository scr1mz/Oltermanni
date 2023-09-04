import React from "react";
import {Link} from "react-scroll";

import "./Footer.scss"
import "/src/fonts.scss"

export const Footer = () => {
    return (
        <footer>
            <div className={"footer__content"}>
                <div className={"footer__contacts"}>
                    <h4>Информационная линия</h4>
                    <span className={"footer__number"}>8 800 333-15-25</span>
                    <p>2020 ООО "Валио"</p>
                </div>
                <div className={"footer__nav"}>
                    <ul className={"footer-nav__menu"}>
                        <li>
                            Обратная связь
                        </li>
                        <li>
                            <Link to="rools" smooth={true} duration={1000} spy={true} offset={-150}>
                                Правила акции
                            </Link>
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
                <div className={"footer__join-us"}>
                    <span>
                        Присоединяйтесь к нам
                    </span>
                    <ul className={"join-us__c-media-container"}>
                        <li className="c-media">
                            <img src="/images/facebook.svg"/>
                        </li>
                        <li className="c-media">
                            <img src="/images/vk.svg"/>
                        </li>
                        <li className="c-media">
                            <img src="/images/in.svg"/>
                        </li>
                        <li className="c-media">
                            <img src="/images/twitter.svg"/>
                        </li>
                        <li className="c-media">
                            <img src="/images/instagram.svg"/>
                        </li>
                        <li className="c-media">
                            <img src="/images/pinterest.svg"/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};