import { Image } from '@douyinfe/semi-ui';
import '../styles/photo.scss';

export default function Photo(props: { path: string, name: string }) {
    return (
        <div className="photo">
            <Image
                src={props.path}
                alt={props.name}
                width="100%"
                height="100%"
            />
        </div>
    );
}