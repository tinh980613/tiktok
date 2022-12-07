import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import styles from './UserVideo.module.scss';
import Video from './Video';
import {
    EmbedIcon,
    SendtoFriendIcon,
    SharetoFaceBookIcon,
    SharetoWhatsAppIcon,
    CopyLinkIcon,
} from '~/components/Icons';

import Share from '~/components/Popper/Share';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const SHARE_INIT = [
    {
        icon: <EmbedIcon />,
        title: 'Embed',
        to: '/Embed',
    },
    {
        icon: <SendtoFriendIcon />,
        title: 'Send to friends',
        to: '/feedback',
    },
    {
        icon: <SharetoFaceBookIcon />,
        title: 'Share to Facebook',
    },
    {
        icon: <SharetoWhatsAppIcon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <CopyLinkIcon />,
        title: 'Copy link',
    },
];

const SHARE_MORE = [
    ...SHARE_INIT,
    {
        icon: <EmbedIcon />,
        title: 'Embed',
        to: '/Embed',
    },
    {
        icon: <SendtoFriendIcon />,
        title: 'Send to friends',
        to: '/feedback',
    },
    {
        icon: <SharetoFaceBookIcon />,
        title: 'Share to Facebook',
    },
    {
        icon: <SharetoWhatsAppIcon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <CopyLinkIcon />,
        title: 'Copy link',
    },
];

function UserVideo({ iconMusic, likeIcon, commentIcon, shareIcon }) {
    const videoRef = useRef();

    const [isClick, setIsClick] = useState(false);

    // const handlePlay = () => {
    //     return videoRef.current.play();
    // };

    // const handlePause = () => {
    //     return videoRef.current.pause();
    // };

    const handleShowMore = () => {
        setIsClick(!isClick);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/967a6f485775249d096defa109f2f4ca.jpeg?x-expires=1670464800&x-signature=kt12eM%2FZm3NVONvXUaMbA84tn6M%3D"
                    alt="hinh loi"
                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
            </Link>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('author')}>
                        <Link to={config.routes.home}>
                            <h3 className={cx('userName')}>
                                msquynhthie <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                            </h3>
                        </Link>
                        <Link to={config.routes.home}>
                            <h4 className={cx('name')}>Quỳnh Thi</h4>
                        </Link>
                    </div>
                    <Button outline small className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <div className={cx('video-desc')}>
                        The Compass! 🧭 My most emblematic creation! Wait for the sugar dome technique! #amauryguichon
                        #chocolate
                    </div>
                    <h4 className={cx('video-music')}>
                        <Link to={config.routes.home}>{iconMusic} nhạc nền</Link>
                    </h4>
                </div>
                <div className={cx('video')}>
                    <div className={cx('feedVideo')}>
                        <canvas width="56.25" height="100" className={cx('videoPlayCardholder')}></canvas>
                        <div className={cx('videoPlayerContainer')}>
                            <div className={cx('divContainer')}>
                                <Image
                                    className={cx('imgPoster')}
                                    alt="anh loi"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                    src="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/13dabfd4c005423ca74d75c0b8e31375_1666624493~tplv-r00ih4996s-1:720:720.jpeg?x-expires=1670317200&x-signature=PYFuVwuUWTgO01sYeSnt%2BAQkiiY%3D"
                                />
                                <div className={cx('basicPlayerWapper')}>
                                    <div className={cx('playerVideo')}>
                                        <Video ref={videoRef} />
                                    </div>
                                </div>
                            </div>
                            {/* <div className={cx('playIcon')}>
                                <button onClick={handlePlay}>Play</button>
                                <button onClick={handlePause}>Pause</button>
                            </div>
                            <div className={cx('voiceControl')}>
                                <button onClick={handlePlay}>Voice</button>
                                <button onClick={handlePause}>Mute</button>
                            </div>
                            <div className={cx('videoControl')}>
                                <div className={cx('seekBarControl')}>
                                    <div className={cx('seekBarProgress')}></div>
                                    <div className={cx('seekBarCircle')}></div>
                                    <div className={cx('seekBar')}></div>
                                </div>
                            </div>
                            <div className={cx('videoControlBottom')}></div>
                            <p className={cx('report')}></p> */}
                        </div>
                    </div>
                    <div className={cx('actionItem')}>
                        <button className={cx('buttonActionItem')}>
                            <span className={cx('iconBtn')}>{likeIcon}</span>
                            <strong className={cx('iconText')}>50</strong>
                        </button>
                        <button className={cx('buttonActionItem')}>
                            <span className={cx('iconBtn')}>{commentIcon}</span>
                            <strong className={cx('iconText')}>444</strong>
                        </button>
                        <button className={cx('buttonActionItem')}>
                            <Share
                                items={isClick ? SHARE_MORE : SHARE_INIT}
                                onClick={handleShowMore}
                                isSee={!isClick}
                                onHide={handleShowMore}
                            >
                                <div>
                                    <span className={cx('iconBtn')}>{shareIcon}</span>
                                    <strong className={cx('iconText')}>40</strong>
                                </div>
                            </Share>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserVideo;
