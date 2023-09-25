import React, { useRef, useEffect } from 'react'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { MainPage } from './pages/MainPage/MainPage'
import './App.scss'

import { useMobileMenu } from './components/MobileMenuProvider/MobileMenuProvider'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { Element } from 'react-scroll'

function App (): JSX.Element {
  const { isOpen, toggleMenu, updateBurgerIcon } = useMobileMenu()
  const appRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }
    window.addEventListener('scroll', toggleMenu)
    window.addEventListener('scroll', updateBurgerIcon)

    return () => {
      window.removeEventListener('scroll', toggleMenu)
      window.removeEventListener('scroll', updateBurgerIcon)
    }
  }, [isOpen, toggleMenu, updateBurgerIcon])

  return (
        <div className="App" ref={appRef}>
                <Header/>
                {isOpen && <MobileMenu/>}
                <MainPage/>
            <Element className={'footer'} name="footer">
                <Footer/>
            </Element>
        </div>
  )
}

export default App
