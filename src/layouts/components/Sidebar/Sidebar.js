import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import FollowingAccount from '~/components/FollowingAccount';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;

const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));

        userService
            .getFollowing({ page, perPage: PER_PAGE })
            .then((data) => {
                setFollowingUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleViewChange = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebarScroll')}>
                <div className={cx('sidebarScrollWrapper')}>
                    <Menu>
                        <MenuItem
                            title="For you"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    <SuggestedAccounts
                        label="Suggested accounts"
                        data={suggestedUsers}
                        onViewChange={handleViewChange}
                    />
                    <FollowingAccount label="Following accounts" data={followingUsers} />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
