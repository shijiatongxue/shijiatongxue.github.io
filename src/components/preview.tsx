import React from 'react';
import { Button, Modal } from '@douyinfe/semi-ui';

import '../styles/preview.scss';

export default function Preview(props: { path: any, name: string, visible: boolean, onClose: (e: React.MouseEvent) => void }) {
    const modalStyle = {
        width: 935,
    };

    return (
        <Modal
            visible={props.visible}
            onCancel={props.onClose}
            footer={null}
            style={modalStyle}
            closable={false}
        >
            <img
                src={props.path}
                alt={props.name}
                width={'100%'}
            />
        </Modal>
    );
}