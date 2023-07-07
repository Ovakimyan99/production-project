/* eslint-disable i18next/no-literal-string */
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwicher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/AppButton/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// Assets
import PageMain from 'shared/assets/icons/main.svg';
import PageAbout from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t: tAbout } = useTranslation('about');
    const { t: tMain } = useTranslation('main');

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/* open / close sidebar */}
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                size={ButtonSize.L}
                square
            >
                <span>
                    { collapsed ? '>' : '<' }
                </span>
            </Button>

            {/* Navigation */}
            <div className={cls.navigation}>
                <BrowserRouter>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls['navigation-link']}
                    >
                        <PageMain className={cls.icon} />
                        <span className={classNames(cls.linkText, { [cls.collapsed]: collapsed })}>
                            {tMain('Название ссылки шапки')}
                        </span>
                    </AppLink>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls['navigation-link']}
                    >
                        <PageAbout className={cls.icon} />
                        <span className={classNames(cls.linkText, { [cls.collapsed]: collapsed })}>
                            {tAbout('Название ссылки шапки')}
                        </span>
                    </AppLink>
                </BrowserRouter>
            </div>

            {/* Buttons */}
            <div className={classNames(cls.switchers, { [cls.collapsed]: collapsed })}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={classNames(cls.lang, { [cls.collapsed]: collapsed })}
                />
            </div>
        </div>
    );
};
