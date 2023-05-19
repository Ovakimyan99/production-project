import { Suspense } from "react";
import {Link, Route, Routes} from "react-router-dom";
import {LazyAboutPage} from "./pages/AboutPage/index.async";
import {LazyMainPage} from "./pages/MainPage/index.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<LazyAboutPage />} />
                    <Route path={'/'} element={<LazyMainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
