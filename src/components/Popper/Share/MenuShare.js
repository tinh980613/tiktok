import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Share.module.scss';

const cx = classNames.bind(styles);

function MenuShare({ data }) {
    const classes = cx('menu-share');
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuShare;
