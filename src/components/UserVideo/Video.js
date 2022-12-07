import video1 from '~/assets/video';
import { forwardRef, useRef, useImperativeHandle } from 'react';

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return (
        <div>
            <video controls ref={videoRef} src={video1.video} width="280" height="auto" />
        </div>
    );
}

export default forwardRef(Video);
