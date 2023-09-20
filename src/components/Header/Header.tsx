import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import Img_logo from '../../assets/header/logo.svg'

import { useMobileMenu } from '../MobileMenuProvider/MobileMenuProvider'
import { Modal } from '../Modal/Modal'

export const Header: React.FC = () => {
  const { isOpen, toggleMenu } = useMobileMenu()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Функция для открытия модального окна
  const openModal = (): void => {
    setIsModalOpen(true)
  }

  // Функция для закрытия модального окна
  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  return (
        <header className={'is-fixed'}>
            <button className="mobile-menu-button" onClick={toggleMenu}>
                {isOpen ? <FaTimes className={'burger-open'}/> : <FaBars className={'burger-close'}/>}
            </button>
            <div className={'header__logo'}>
                <a href={'/'} className={'logo__home-link--active'}>
                    <img src={Img_logo} alt="oltermanni"/>
                </a>
            </div>
            <nav className={'Main-nav'}>
                <ul className={'Main-nav__menu'}>
                    <li className={'Main-nav__link--active'}>
                        <Link to="rules" smooth={true} duration={1000} spy={true} offset={-150} className={'Main-nav__link--active'}>
                            правила
                        </Link>
                    </li>
                    <li className={'Main-nav__link--active'}>
                        <Link to="footer" smooth={true} duration={1200} spy={true} offset={0} className={'Main-nav__link--active'}>
                            призы
                        </Link>
                    </li>
                    <li className={'Main-nav__link--active'}>
                        <Link to="footer" smooth={true} duration={1200} spy={true} offset={0} className={'Main-nav__link--active'}>
                            победители
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={'header__auth-container'}>
                <a className={'header__auth'} onClick={openModal}>
                    вход
                </a>
                <a className={'header__registration'} onClick={openModal}>
                    регистрация
                </a>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </header>
  )
}
