import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                {t('Название ссылки шапки')}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                {t('Название ссылки шапки')}
            </AppLink>
        </div>
    </div>
);
