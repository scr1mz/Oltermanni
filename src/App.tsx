import React, {useRef} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./pages/MainPage"
import "./App.scss"

function App() {

    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
