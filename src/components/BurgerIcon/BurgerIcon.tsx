import React, { useState } from 'react'
import { useMobileMenu } from '../MobileMenuProvider/MobileMenuProvider'
import './BurgerIcon.scss'

export const BurgerIcon: React.FC = () => {
  const { toggleMenu, updateBurgerIcon, burgerClass } = useMobileMenu()

  return (
    <div className="burger-button" onClick={() => { toggleMenu(); updateBurgerIcon() }}>
     <div className={burgerClass}></div>
     <div className={burgerClass}></div>
     <div className={burgerClass}></div>
    </div>
  )
}
