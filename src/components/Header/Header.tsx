import React from "react";
import "./Header.scss"
import "../../fonts.scss"
import {Link} from "react-scroll";

export const Header = () => {

    return (
        <header className={"is-fixed"}>
            <div className={"header__logo"}>
                <a href={"/"} className={"logo__home-link--active"}>
                    <img src="/images/logo.svg" alt="oltermanni"/>
                </a>
            </div>
            <nav className={"Main-nav"}>
                <ul className={"Main-nav__menu"}>
                    <li className={"Main-nav__link--active"}>
                        <Link to="rools" smooth={true} duration={1000} spy={true} offset={-150}>
                            правила
                        </Link>
                    </li>
                    <li className={"Main-nav__link--active"}>
                        призы
                    </li>
                    <li className={"Main-nav__link--active"}>
                        победители
                    </li>
                </ul>
            </nav>
            <div className={"header__auth-container"}>
                <a className={"header__auth"}>
                    вход
                </a>
                <a className={"header__registration"}>
                    регистрация
                </a>
            </div>
        </header>
    );
};