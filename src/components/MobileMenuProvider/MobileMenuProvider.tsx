import React, { useState, createContext, useContext } from 'react'

interface MobileMenuContextType {
  isOpen: boolean
  toggleMenu: () => void
  updateBurgerIcon: () => void
  burgerClass: string
}

const MobileMenuContext = createContext<MobileMenuContextType | null>(null)

export const useMobileMenu = (): MobileMenuContextType => {
  const context = useContext(MobileMenuContext)
  if (context === null) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return context
}

interface MobileMenuProviderProps {
  children: React.ReactNode // Указываем тип для children
}

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const context = useContext(MobileMenuContext)
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
  const updateBurgerIcon = (): void => {
    if (!isOpen) {
      setBurgerClass('burger-bar clicked')
    } else {
      setBurgerClass('burger-bar unclicked')
    }
  }

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
        <MobileMenuContext.Provider value={{ isOpen, toggleMenu, updateBurgerIcon, burgerClass }}>
            {children}
        </MobileMenuContext.Provider>
  )
}
