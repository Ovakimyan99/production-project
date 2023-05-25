import {classNames} from "shared/lib";
import {useTheme} from "./provider/ThemeProvider";
import {Theme} from "./provider/ThemeProvider/lib/ThemeContext";
import {AppRouter} from "./provider/router";
import {Navbar} from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
    const {theme} = useTheme();

    const newTheme = theme || Theme.LIGHT;
    return (
        <div className={classNames('app', {hovered: true}, [newTheme])}>
            <Suspense fallback="loading...">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
