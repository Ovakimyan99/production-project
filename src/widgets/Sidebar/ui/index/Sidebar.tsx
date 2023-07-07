/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwicher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/AppButton/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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
                { collapsed ? '>' : '<' }
            </Button>

            {/* Navigation */}
            <div className={cls.navigation}>
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
