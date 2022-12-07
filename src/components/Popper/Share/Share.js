import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Share.module.scss';
import MenuShare from './MenuShare';

const cx = classNames.bind(styles);

function Share({ items = [], children, hideOnClick = false, onClick, isSee, onHide }) {
    const renderResult = (attrs) => (
        <div className={cx('menu-shareList')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('share-popper')}>
                {items.map((item, index) => {
                    return <MenuShare key={index} data={item}></MenuShare>;
                })}
                {isSee && (
                    <div className={cx('tickMore')} onClick={onClick}>
                        Tick
                    </div>
                )}
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            delay={[0, 700]}
            onHide={onHide}
            offset={[-20, 0]}
            interactive
            placement="top-start"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Share;
