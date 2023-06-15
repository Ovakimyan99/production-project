/* eslint-disable react/jsx-max-props-per-line */
import { classNames } from 'shared/lib';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;

    const themeClass = theme ? cls[theme] : '';

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, themeClass])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
