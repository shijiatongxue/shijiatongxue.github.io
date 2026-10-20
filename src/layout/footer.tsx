import React from 'react';

import { useLanguage } from '../common/i18n';
import '../styles/footer.scss';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© Shi Jia {new Date().getFullYear()}</span>
        <span className="footer-powered">Powered by Codex</span>
        <span className="footer-note">{t('footer.note')}</span>
        <a href="https://github.com/shijiatongxue" target="_blank" rel="noreferrer">
          {t('footer.github')} <span aria-hidden="true">↗</span>
        </a>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
          京ICP备2026070296号-1
        </a>
      </div>
    </footer>
  );
}
