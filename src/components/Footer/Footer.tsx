import React from 'react'
import { Link } from 'react-scroll'

import './Footer.scss'

import Img_facebook from '../../assets/icons/facebook.svg'
import Img_vk from '../../assets/icons/vk.svg'
import Img_in from '../../assets/icons/in.svg'
import Img_twitter from '../../assets/icons/twitter.svg'
import Img_instagram from '../../assets/icons/instagram.svg'
import Img_pinterest from '../../assets/icons/pinterest.svg'

export const Footer: React.FC = () => {
  return (
        <footer>
            <div className={'footer__content'}>
                <div className={'footer__contacts'}>
                    <h4>Информационная линия</h4>
                    <span className={'footer__number'}>8 800 333-15-25</span>
                    <p className={'footer__author'}>2020 ООО "Валио"</p>
                </div>
                <div className={'footer__nav'}>
                    <ul className={'footer-nav__menu'}>
                        <li>
                            Обратная связь
                        </li>
                        <li>
                            <Link className={'footer-nav__rules-link'} to="rules" smooth={true} duration={1000} spy={true} offset={-150}>
                                Правила акции
                            </Link>
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
                <div className={'join-us'}>
                    <span>
                        Присоединяйтесь к нам
                    </span>
                    <ul className={'join-us__c-media-container'}>
                        <li className="c-media">
                            <img src={Img_facebook} alt={'facebook'}/>
                        </li>
                        <li className="c-media">
                            <img src={Img_vk} alt={'vk'}/>
                        </li>
                        <li className="c-media">
                            <img src={Img_in} alt={'in'}/>
                        </li>
                        <li className="c-media">
                            <img src={Img_twitter} alt={'twitter'}/>
                        </li>
                        <li className="c-media">
                            <img src={Img_instagram} alt={'instagram'}/>
                        </li>
                        <li className="c-media">
                            <img src={Img_pinterest} alt={'pinterest'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}
