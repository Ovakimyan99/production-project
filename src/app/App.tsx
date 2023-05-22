import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

// Pages
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import {className} from "shared/lib";
import {useTheme} from "./provider/ThemeProvider";
import {Theme} from "./provider/ThemeProvider/lib/ThemeContext";
import { AppRouter } from "./provider/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    const newTheme = theme || Theme.LIGHT;
    return (
        <div className={className('app', {hovered: true}, [newTheme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter />
        </div>
    );
};

export default App;
