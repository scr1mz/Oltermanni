import React, {useRef,  useState, useEffect} from "react";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./pages/MainPage/MainPage"
import "./App.scss"

import {useMobileMenu} from "./components/MobileMenuProvider/MobileMenuProvider";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import {Element} from "react-scroll";

function App() {
    const { isOpen, toggleMenu } = useMobileMenu();
    const appRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen && !isScrolling) {
                toggleMenu();
                setIsScrolling(true);
                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
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
