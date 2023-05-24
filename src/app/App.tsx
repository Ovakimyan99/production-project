import {classNames} from "shared/lib";
import {useTheme} from "./provider/ThemeProvider";
import {Theme} from "./provider/ThemeProvider/lib/ThemeContext";
import {AppRouter} from "./provider/router";
import {Navbar} from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    const newTheme = theme || Theme.LIGHT;
    return (
        <div className={classNames('app', {hovered: true}, [newTheme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
            <AppRouter />
        </div>
    );
};

export default App;
