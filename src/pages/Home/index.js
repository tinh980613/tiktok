import UserVideo from '~/components/UserVideo/';
import { MusicIcon, LikeIcon, ShareIcon, CommentIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react/headless';

function Home() {
    return (
        <div>
            <UserVideo
                iconMusic={<MusicIcon />}
                likeIcon={<LikeIcon />}
                commentIcon={<CommentIcon />}
                shareIcon={<ShareIcon />}
            />
            <UserVideo
                iconMusic={<MusicIcon />}
                likeIcon={<LikeIcon />}
                commentIcon={<CommentIcon />}
                shareIcon={<ShareIcon />}
            />
            <UserVideo
                iconMusic={<MusicIcon />}
                likeIcon={<LikeIcon />}
                commentIcon={<CommentIcon />}
                shareIcon={<ShareIcon />}
            />
        </div>
    );
}

export default Home;
