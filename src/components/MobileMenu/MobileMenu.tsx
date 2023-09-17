import React from 'react';
import {Link} from "react-scroll";
import {useMobileMenu} from '../MobileMenuProvider/MobileMenuProvider';
import "./MobileMenu.scss"

import Img_facebook from "../../assets/icons/facebook.svg";
import Img_vk from "../../assets/icons/vk.svg";
import Img_in from "../../assets/icons/in.svg";
import Img_twitter from "../../assets/icons/twitter.svg";
import Img_instagram from "../../assets/icons/instagram.svg";
import Img_pinterest from "../../assets/icons/pinterest.svg";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu: React.FC = () => {
    const {isOpen, toggleMenu} = useMobileMenu();

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className={"blur"}/>
            <nav className={"mobile-menu__content"}>
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <Link to="rools" smooth={true} duration={1000} spy={true} offset={-150} onClick={toggleMenu}>
                            Правила
                        </Link>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="#">Призы</a>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="#">Победители</a>
                    </li>
                </ul>
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <a href="#">Обратная связь</a>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="#">Правила акции</a>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="#">FAQ</a>
                    </li>
                </ul>
                <div className={"join-us"}>
                    <span>
                        Присоединяйтесь к нам
                    </span>
                    <ul className={"join-us__c-media-container"}>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_facebook} alt={"facebook"}/>
                        </li>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_vk} alt={"vk"}/>
                        </li>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_in} alt={"in"}/>
                        </li>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_twitter} alt={"twitter"}/>
                        </li>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_instagram} alt={"instagram"}/>
                        </li>
                        <li className="c-media" id={"mobile-menu__c-media"}>
                            <img src={Img_pinterest} alt={"pinterest"}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

