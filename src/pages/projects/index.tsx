import Project from './components/project';
import PROJECTS from '../../const/projects';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../common/i18n';

export default function Projects(props: { style?: React.CSSProperties; className?: string }) {
  const { language, t } = useLanguage();
  const { pathname } = useLocation();
  const projectGrid = (
    <div
      style={props.style}
      className={`project-grid${props.className ? ` ${props.className}` : ''}`}
    >
      {PROJECTS.map((item) => (
        <Project {...item} key={item.name} />
      ))}
    </div>
  );

  if (pathname === '/projects') {
    return (
      <div className={`page-shell page-shell--${language}`}>
        <div className="page-intro">
          <p className="section-kicker">{t('projects.kicker')}</p>
          <h1>{t('projects.title.first')}<br /><em>{t('projects.title.second')}</em></h1>
          <p>{t('projects.description')}</p>
        </div>
        {projectGrid}
      </div>
    );
  }

  return projectGrid;
}
