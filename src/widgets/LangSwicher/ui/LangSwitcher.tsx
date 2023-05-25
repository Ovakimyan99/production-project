import {classNames} from 'shared/lib';
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from 'shared/ui/AppButton/Button';

interface LangSwitcherProps {
    className?: string;
}


export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    async function changeLanguage() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>
    );
};