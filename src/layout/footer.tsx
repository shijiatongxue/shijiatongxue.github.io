import React from 'react';

import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="copyright" style={{ textAlign: 'left' }}>Copyright Shi Jia {new Date().getFullYear()}</div>
            <div className="copyright"  style={{ textAlign: 'right' }}>Powered by <a href="https://semi.design" target="_blank">Semi Design</a></div>
        </footer>
    );
}