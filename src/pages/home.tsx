import React from 'react';
import { Space } from '@douyinfe/semi-ui';

import Photo from 'components/photo';
import '../styles/home.scss';

const photoList: any[] = [];
const photosContext = (require as any).context('../common/photos');
photosContext.keys().forEach((id: any) => {
    photoList.push(photosContext(id));
});

export default function Home() {
    return (
        <div className="home">
            <Space spacing={10} wrap>
                {
                    photoList.map((photoPath: string, index: number) => (
                        <Photo key={index} path={photoPath} name={photoPath.split('/')[-1]} />
                    ))
                }
            </Space>
        </div>
    );
}