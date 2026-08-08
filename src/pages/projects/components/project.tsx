import type { MouseEvent as ReactMouseEvent } from 'react';

import { useLanguage } from '../../../common/i18n';
import ProjectImage, { ProjectImageProps } from './projectImg';
import ProjectTag from './projectTag';

export interface ProjectProps {
  name: string;
  tags: string[];
  displayImageUrl: string;
  displayImageBgColor?: ProjectImageProps['bgColor'] | string;
  relatedUrl: string;
  githubUrl?: string;
}

const PROJECTS_INDEX: Record<string, number> = {
  'Semi Design': 1,
  '设计稿转代码': 2,
  'Quick Replace Font': 3,
  'create-figma-app': 4,
};

const PROJECT_NAMES_EN: Record<string, string> = {
  '设计稿转代码': 'Design to Code',
};

export default function Project(props: ProjectProps) {
  const { language, t } = useLanguage();
  const { name, tags, githubUrl, relatedUrl, displayImageUrl, displayImageBgColor } = props;
  const displayName = language === 'en' ? PROJECT_NAMES_EN[name] || name : name;

  const handleMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 7;
    const rotateY = ((x - rect.width / 2) / rect.width) * 7;

    event.currentTarget.style.setProperty('--card-x', `${x}px`);
    event.currentTarget.style.setProperty('--card-y', `${y}px`);
    event.currentTarget.style.setProperty('--card-rotate-x', `${rotateX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--card-rotate-y', `${rotateY.toFixed(2)}deg`);
  };

  const handleMouseLeave = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.style.removeProperty('--card-x');
    event.currentTarget.style.removeProperty('--card-y');
    event.currentTarget.style.removeProperty('--card-rotate-x');
    event.currentTarget.style.removeProperty('--card-rotate-y');
  };

  return (
    <article className="project-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <a className="project-media-link" href={relatedUrl} target="_blank" rel="noreferrer" aria-label={`${t('project.open')} ${displayName}`}>
        <ProjectImage imageUrl={displayImageUrl} bgColor={displayImageBgColor} />
      </a>
      <div className="project-card-body">
        <div className="project-card-heading">
          <div>
            <p className="project-index">PROJECT / 0{PROJECTS_INDEX[name] ?? 1}</p>
            <h3>{displayName}</h3>
          </div>
          <a className="project-open" href={relatedUrl} target="_blank" rel="noreferrer" aria-label={`${t('project.open')} ${displayName}`}>
            ↗
          </a>
        </div>
        <div className="project-tags">
          {tags.map((tagName) => (
            <ProjectTag name={tagName} key={tagName} />
          ))}
        </div>
        <div className="project-card-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              {t('project.github')} <span aria-hidden="true">↗</span>
            </a>
          )}
          <a href={relatedUrl} target="_blank" rel="noreferrer">
            {t('project.view')} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
