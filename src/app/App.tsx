import {classNames} from "shared/lib";
import {useTheme} from "./provider/ThemeProvider";
import {Theme} from "./provider/ThemeProvider/lib/ThemeContext";
import {AppRouter} from "./provider/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    const newTheme = theme || Theme.LIGHT;
    return (
        <div className={classNames('app', {hovered: true}, [newTheme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default App;
