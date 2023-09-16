import React, {useRef,  useState, useEffect} from "react";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./pages/MainPage/MainPage"
import "./App.scss"

import {useMobileMenu} from "./components/MobileMenuProvider/MobileMenuProvider";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import { useSwipeable } from 'react-swipeable';
import {Element} from "react-scroll";

function App() {
    const { isOpen, toggleMenu } = useMobileMenu();
    const appRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen && !isScrolling) {
                toggleMenu(); // Закрываем мобильное меню при прокручивании
                setIsScrolling(true);
                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000); // Можно настроить задержку перед следующим закрытием
            }
        };

        if (appRef.current) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (appRef.current) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, [isOpen, toggleMenu, isScrolling]);


    return (
        <div className="App" ref={appRef}>
                <Header/>
                {isOpen && <MobileMenu/>}
                <MainPage/>
            <Element className={"footer"} name="footer">
                <Footer/>
            </Element>
        </div>
    );
}

export default App;
