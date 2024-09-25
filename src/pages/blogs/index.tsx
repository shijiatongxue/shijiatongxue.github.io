import { Empty, Spin } from '@douyinfe/semi-ui';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';

import BlogCard from './blogCard';
import useBlogList from './useBlogList';

export default function Blogs() {
  const { loading, blogList } = useBlogList();
  return (
    <div className="box-border max-w-[935px] flex flex-col items-center">
      {loading && <Spin />}
      {blogList.map((item) => (
        <BlogCard {...item} key={item.id} />
      ))}
      {loading === false && blogList.length === 0 && (
        <Empty
          title="文章列表为空"
          image={<IllustrationConstruction />}
          darkModeImage={<IllustrationConstructionDark />}
          style={{ padding: 30 }}
        ></Empty>
      )}
    </div>
  );
}
