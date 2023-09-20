import React, { useState, createContext, useContext } from 'react'

interface MobileMenuContextType {
  isOpen: boolean
  toggleMenu: () => void
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

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
        <MobileMenuContext.Provider value={{ isOpen, toggleMenu }}>
            {children}
        </MobileMenuContext.Provider>
  )
}
