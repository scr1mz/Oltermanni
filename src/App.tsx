import React, {useRef} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./pages/MainPage"
import "./App.scss"
import {MobileMenuProvider, useMobileMenu} from "./components/MobileMenuProvider/MobileMenuProvider";
import {MobileMenu} from "./components/MobileMenu";

function App() {
    const {isOpen} = useMobileMenu();

    return (
        <div className="App">
                <Header/>
                {isOpen && <MobileMenu/>}
                <MainPage/>
                <Footer/>
        </div>
    );
}

export default App;
