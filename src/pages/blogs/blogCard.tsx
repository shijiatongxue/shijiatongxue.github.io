import { Blog } from "./useBlogList";

const BlogCard = (props: Blog) => {
  const { createTime, coverUrl, title, url, description, updateTime } = props;

  const handleGoBlog = () => {
    window.open(url);
  };

  return (
    <div
      onClick={handleGoBlog}
      className="box-border w-full py-[12px] px-[12px] sm:py-[24px] sm:px-[30px] sm:h-[260px] flex items-center justify-between gap-[20px] border-b border-solid border-[var(--semi-color-border)] rounded-[20px] bg-[var(--semi-bg-0)] cursor-pointer"
    >
      <div className="flex shrink flex-col items-start gap-y-[4px] sm:gap-y-[12px] grow overflow-hidden">
        <p className="flex shrink gap-x-2 min-w-[107px] text-[13px] text-[--semi-color-text-1] leading-[16px] align-top font-[500]">
          {`${createTime.toLocaleDateString()}`}
          {updateTime && updateTime !== createTime && (
            <div title={`编辑于 ${updateTime.toLocaleDateString()}`} className="text-[--semi-color-text-3]">
              已编辑
            </div>
          )}
        </p>
        <div className="flex flex-col shrink items-start gap-y-[8px] overflow-hidden w-full">
          <p className="box-border truncate text-[26px] text-[--semi-color-text-0] leading-[34px] text-left align-top font-[600]">
            {title}
          </p>
          <p className="box-border line-clamp-2 text-ellipsis text-[18px] text-[--semi-color-text-2] leading-[27px] text-left align-top font-[400]">
            {description}
          </p>
        </div>
      </div>
      <img
        className="box-border w-[350px] rounded-[10px] hidden	sm:inline-block"
        width="350"
        src={coverUrl}
      />
    </div>
  );
};

export default BlogCard;
