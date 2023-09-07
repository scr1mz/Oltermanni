import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, onClose}) => {
    return (
        <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul className="mobile-menu__list1">
                <li className="mobile-menu__item">
                    <a href="#">Правила</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="№">Призы</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="№">Победители</a>
                </li>
            </ul>
            <ul className="mobile-menu__list1">
                <li className="mobile-menu__item">
                    <a href="#">Обратная связь</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="№">Правила акции</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="№">FAQ</a>
                </li>
            </ul>
                <button className="mobile-menu__close" onClick={onClose}>
                    Закрыть
                </button>
        </nav>
);
};

