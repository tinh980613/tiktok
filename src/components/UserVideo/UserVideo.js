import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserVideo.module.scss';
import config from '~/config';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Video from './Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserVideo({ iconMusic }) {
    const videoRef = useRef();

    const handlePlay = () => {
        return videoRef.current.play();
    };

    const handlePause = () => {
        return videoRef.current.pause();
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
                            <div className={cx('playIcon')}></div>
                            <div className={cx('voiceControl')}></div>
                            <div className={cx('videoControl')}></div>
                            <div className={cx('videoControlBottom')}></div>
                            <p className={cx('report')}></p>
                        </div>
                        <button onClick={handlePlay}>Play</button>
                        <button onClick={handlePause}>Pause</button>
                    </div>
                    <div className={cx('actionItem')}>
                        <button className={cx('buttonActionItem')}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserVideo;
