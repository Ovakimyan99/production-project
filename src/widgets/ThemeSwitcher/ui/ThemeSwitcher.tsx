import { classNames } from 'shared/lib';
import { useTheme, ThemeTypes } from 'app/provider/ThemeProvider';
import Theme from 'shared/assets/icons/theme.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <Theme
                className={
                    classNames(cls.themeIcon, {
                        [cls.dark]: theme === ThemeTypes.DARK,
                    }, [])
                }
            />
        </button>
    );
};
