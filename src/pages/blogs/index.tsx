import { Empty, Spin } from '@douyinfe/semi-ui';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../../common/i18n';
import BlogCard from './blogCard';
import useBlogList from './useBlogList';

export default function Blogs() {
  const { language, t } = useLanguage();
  const { loading, blogList } = useBlogList();
  const { pathname } = useLocation();
  const blogListContent = (
    <div className="blog-list">
      {loading && <div className="content-loading"><Spin /></div>}
      {blogList.map((item) => (
        <BlogCard {...item} key={item.id || item.title} />
      ))}
      {loading === false && blogList.length === 0 && (
        <Empty
          title={t('blogs.empty')}
          image={<IllustrationConstruction />}
          darkModeImage={<IllustrationConstructionDark />}
          className="content-empty"
        />
      )}
    </div>
  );

  if (pathname === '/blogs') {
    return (
      <div className={`page-shell page-shell--${language}`}>
        <div className="page-intro">
          <p className="section-kicker">{t('blogs.kicker')}</p>
          <h1>{t('blogs.title.first')}<br /><em>{t('blogs.title.second')}</em></h1>
          <p>{t('blogs.description')}</p>
        </div>
        {blogListContent}
      </div>
    );
  }

  return blogListContent;
}
