import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {LazyAboutPage} from "./pages/AboutPage/index.async";
import {LazyMainPage} from "./pages/MainPage/index.async";
import {useTheme} from "./theme/useTheme";
import {className} from "./helpers/className";
import {Theme} from "./theme/ThemeContext";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    const newTheme = theme || Theme.LIGHT;
    return (
        <div className={className('app', {hovered: true}, [newTheme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
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
