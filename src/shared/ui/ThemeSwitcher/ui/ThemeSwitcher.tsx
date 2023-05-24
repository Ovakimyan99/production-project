import {classNames} from 'shared/lib';
import {useTheme, ThemeTypes} from "app/provider/ThemeProvider";
import cls from './ThemeSwitcher.module.scss';
import Theme from 'shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <Theme className={classNames(cls.themeIcon, {[cls.dark]: theme === ThemeTypes.DARK}, [])} />
        </button>
    );
};
