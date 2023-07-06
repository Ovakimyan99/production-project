import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/AppButton/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>
    );
};
