import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t: tAbout } = useTranslation('about');
    const { t: tMain } = useTranslation('main');

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                    {tMain('Название ссылки шапки')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {tAbout('Название ссылки шапки')}
                </AppLink>
            </div>
        </div>
    );
};
