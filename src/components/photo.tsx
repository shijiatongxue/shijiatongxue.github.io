import React, { useState } from 'react';

import Preview from './preview';
import '../styles/photo.scss';

export default function Photo(props: { path: string, name: string }) {
    const [preview, setPreview] = useState(false);
    return (
        <div className="photo">
            <img
                src={props.path}
                alt={props.name}
                width="100%"
                height="100%"
                onClick={() => setPreview(true)}
            />
            <Preview path={props.path} name={props.name} visible={preview} onClose={() => setPreview(false)}></Preview>
        </div>
    );
}