import React, { useState } from 'react'
import { useMobileMenu } from '../MobileMenuProvider/MobileMenuProvider'
import './BurgerIcon.scss'

export const BurgerIcon: React.FC = () => {
  const { isOpen, toggleMenu } = useMobileMenu()
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')

  const updateMenu = (): void => {
    if (!isOpen) {
      setBurgerClass('burger-bar clicked')
    } else {
      setBurgerClass('burger-bar unclicked')
    }
  }

  return (
    <div className="burger-button" onClick={() => { toggleMenu(); updateMenu() }}>
     <div className={burgerClass}></div>
     <div className={burgerClass}></div>
     <div className={burgerClass}></div>
    </div>
  )
}
