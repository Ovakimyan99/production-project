import {classNames} from 'shared/lib';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    const themeClass = theme ? cls[theme] : '';

    return (
        <button className={classNames(cls.Button, {}, [className, themeClass])} {...otherProps}>
            {children}
        </button>
    );
};
