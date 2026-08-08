import type { MouseEvent as ReactMouseEvent } from 'react';

import { useLanguage } from '../../common/i18n';
import { Blog } from './useBlogList';

const BlogCard = (props: Blog) => {
  const { language, t } = useLanguage();
  const { createTime, coverUrl, title, titleEn, url, description, descriptionEn, updateTime } = props;
  const displayTitle = language === 'en' ? titleEn || title : title;
  const displayDescription = language === 'en' ? descriptionEn || description : description;

  const handleMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
  };

  const handleMouseLeave = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.style.removeProperty('--card-x');
    event.currentTarget.style.removeProperty('--card-y');
  };

  return (
    <article className="blog-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <a className="blog-card-link" href={url} target="_blank" rel="noreferrer">
        <div className="blog-card-copy">
          <div className="blog-card-meta">
            <span>{createTime.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
            {updateTime && updateTime.getTime() !== createTime.getTime() && (
              <span title={`${t('blog.edited')} ${updateTime.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}`}>
                {t('blog.edited')}
              </span>
            )}
            <span className="blog-card-type">{t('blog.article')}</span>
          </div>
          <h3>{displayTitle}</h3>
          <p>{displayDescription}</p>
          <span className="read-more">{t('blog.read')} <span aria-hidden="true">↗</span></span>
        </div>
        {coverUrl && (
          <div className="blog-card-cover">
            <img src={coverUrl} alt="" loading="lazy" />
          </div>
        )}
      </a>
    </article>
  );
};

export default BlogCard;
