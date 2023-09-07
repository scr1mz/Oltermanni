import React, {useState} from "react";
import "./Header.scss"
import "../../fonts.scss"
import {Link} from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa";

import Img_logo from "../../../public/images/logo.svg"

import {MobileMenu} from "../MobileMenu/MobileMenu";
import {useMobileMenu} from "../MobileMenuProvider/MobileMenuProvider";


export const Header: React.FC = () => {
    const {isOpen, toggleMenu} = useMobileMenu();

    return (
        <header className={"is-fixed"}>
            <button className="mobile-menu-button" onClick={toggleMenu}>
                {isOpen ? <FaTimes className={"burger-open"}/> : <FaBars className={"burger-close"}/>}
            </button>
            <div className={"header__logo"}>
                <a href={"/"} className={"logo__home-link--active"}>
                    <img src={Img_logo} alt="oltermanni"/>
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
                        <a href={"#"}>призы</a>
                    </li>
                    <li className={"Main-nav__link--active"}>
                        <a href={"#"}>победители</a>
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