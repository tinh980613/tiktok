import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('account-item')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
        </div>
    );
}

AccountItem.propType = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
