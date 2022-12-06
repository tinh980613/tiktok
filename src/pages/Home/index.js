import UserVideo from '~/components/UserVideo/';
import { MusicIcon } from '~/components/Icons';

function Home() {
    return (
        <div>
            <UserVideo iconMusic={<MusicIcon />} />
            <UserVideo iconMusic={<MusicIcon />} />
            <UserVideo iconMusic={<MusicIcon />} />
        </div>
    );
}

export default Home;
