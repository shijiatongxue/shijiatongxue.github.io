import React from 'react';

import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">Copyright Shi Jia {new Date().getFullYear()}</div>
        </footer>
    );
}