import { classNames } from 'shared/lib';
import './Loader.scss';

interface PageLoaderProps {
    className?: string;
}

export const Loader = ({ className }: PageLoaderProps) => (
    <div className={classNames('ldio-s3esnyv8lg', {}, [className])}>
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
        <div className="ldio-s3esnyv8lg__div" />
    </div>
);
