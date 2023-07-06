/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwicher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/AppButton/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                size={ButtonSize.L}
                square
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
