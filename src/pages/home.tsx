import { Fragment, type MouseEvent as ReactMouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../common/i18n';
import Blogs from './blogs';
import Projects from './projects';

const handleHeroMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const xRatio = x / rect.width - 0.5;
  const yRatio = y / rect.height - 0.5;
  const offsetX = (x / rect.width - 0.5) * 26;
  const offsetY = (y / rect.height - 0.5) * 26;
  const rotateX = ((rect.height / 2 - y) / rect.height) * 3.5;
  const rotateY = ((x - rect.width / 2) / rect.width) * 3.5;

  event.currentTarget.style.setProperty('--hero-glow-x', `${offsetX}px`);
  event.currentTarget.style.setProperty('--hero-glow-y', `${offsetY}px`);
  event.currentTarget.style.setProperty('--hero-reverse-x', `${offsetX * -0.7}px`);
  event.currentTarget.style.setProperty('--hero-reverse-y', `${offsetY * -0.7}px`);
  event.currentTarget.style.setProperty('--hero-grid-x', `${offsetX * 0.45}px`);
  event.currentTarget.style.setProperty('--hero-grid-y', `${offsetY * 0.45}px`);
  event.currentTarget.style.setProperty('--hero-main-x', `${(xRatio * 20).toFixed(2)}px`);
  event.currentTarget.style.setProperty('--hero-main-y', `${(yRatio * 12).toFixed(2)}px`);
  event.currentTarget.style.setProperty('--hero-main-rotate', `${(-6 + xRatio * 5).toFixed(2)}deg`);
  event.currentTarget.style.setProperty('--hero-note-x', `${(xRatio * -30).toFixed(2)}px`);
  event.currentTarget.style.setProperty('--hero-note-y', `${(yRatio * -22).toFixed(2)}px`);
  event.currentTarget.style.setProperty('--hero-note-rotate', `${(12 - xRatio * 10 + yRatio * 4).toFixed(2)}deg`);
  event.currentTarget.style.setProperty('--hero-rotate-x', `${rotateX.toFixed(2)}deg`);
  event.currentTarget.style.setProperty('--hero-rotate-y', `${rotateY.toFixed(2)}deg`);
};

const handleHeroMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.removeProperty('--hero-glow-x');
  event.currentTarget.style.removeProperty('--hero-glow-y');
  event.currentTarget.style.removeProperty('--hero-reverse-x');
  event.currentTarget.style.removeProperty('--hero-reverse-y');
  event.currentTarget.style.removeProperty('--hero-grid-x');
  event.currentTarget.style.removeProperty('--hero-grid-y');
  event.currentTarget.style.removeProperty('--hero-main-x');
  event.currentTarget.style.removeProperty('--hero-main-y');
  event.currentTarget.style.removeProperty('--hero-main-rotate');
  event.currentTarget.style.removeProperty('--hero-note-x');
  event.currentTarget.style.removeProperty('--hero-note-y');
  event.currentTarget.style.removeProperty('--hero-note-rotate');
  event.currentTarget.style.removeProperty('--hero-rotate-x');
  event.currentTarget.style.removeProperty('--hero-rotate-y');
};

export default function HomePage() {
  const { language, t } = useLanguage();
  const cardNote = t('home.hero.card.note').split('\n');
  const curiosityNote = t('home.hero.curiosity').split('\n');
  const marqueeRepeats = Array.from({ length: 3 }, (_, index) => index);
  const marqueeItems = [
    'home.marquee.one',
    'home.marquee.two',
    'home.marquee.three',
    'home.marquee.four',
    'home.marquee.five',
    'home.marquee.six',
  ];

  return (
    <div className={`home-page home-page--${language}`}>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" /> {t('home.eyebrow')}
          </p>
          <h1 className="hero-title">
            {t('home.title.first')}
            <span>{t('home.title.second')}</span>
          </h1>
          <p className="hero-lede">
            {t('home.lede')}
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              {t('home.projects')} <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-secondary" to="/blogs">
              {t('home.blogs')} <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-meta" aria-label={t('home.eyebrow')}>
            <div>
              <strong>04</strong>
              <span>{t('home.stats.projects')}</span>
            </div>
            <div>
              <strong>02</strong>
              <span>{t('home.stats.blogs')}</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>{t('home.stats.curiosity')}</span>
            </div>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label={t('home.hero.aria')}
          role="img"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="hero-art-grid" aria-hidden="true" />
          <div className="hero-art-caption">
            <span>{t('home.hero.selected')}</span>
            <span>01 / 03</span>
          </div>
          <div className="hero-orbit hero-orbit-large" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-small" aria-hidden="true" />
          <div className="hero-art-card hero-art-card-main">
            <span className="hero-card-index">01</span>
            <strong>{t('home.hero.card.title')}<br />{t('home.hero.card.subtitle')}</strong>
            <span className="hero-card-line" aria-hidden="true" />
            <small>{cardNote[0]}<br />{cardNote[1]}</small>
          </div>
          <div className="hero-art-card hero-art-card-note">
            <span>✳</span>
            <small>{curiosityNote[0]}<br />{curiosityNote[1]}</small>
          </div>
          <div className="hero-art-footer">
            <span>{t('home.hero.research')}</span>
            <span>{t('home.hero.interface')}</span>
            <span>{t('home.hero.shipping')}</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label={t('home.marquee.aria')}>
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeRepeats.map((repeatIndex) => (
              <Fragment key={`marquee-a-${repeatIndex}`}>
                {marqueeItems.map((itemKey, itemIndex) => (
                  <Fragment key={`${itemKey}-${repeatIndex}`}>
                    <span>{t(itemKey)}</span>
                    {itemIndex < marqueeItems.length - 1 && <i aria-hidden="true">✳</i>}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeRepeats.map((repeatIndex) => (
              <Fragment key={`marquee-b-${repeatIndex}`}>
                {marqueeItems.map((itemKey, itemIndex) => (
                  <Fragment key={`${itemKey}-${repeatIndex}`}>
                    <span>{t(itemKey)}</span>
                    {itemIndex < marqueeItems.length - 1 && <i aria-hidden="true">✳</i>}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <section className="content-section" id="writing">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{t('home.writings.kicker')}</p>
            <h2>{t('home.writings.title.first')}<br /><em>{t('home.writings.title.second')}</em></h2>
          </div>
          <Link className="section-link" to="/blogs">
            {t('home.writings.all')} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Blogs />
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{t('home.work.kicker')}</p>
            <h2>{t('home.work.title.first')}<br /><em>{t('home.work.title.second')}</em></h2>
            <p className="section-description">{t('home.work.description')}</p>
          </div>
          <Link className="section-link" to="/projects">
            {t('home.work.all')} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Projects />
      </section>
    </div>
  );
}
