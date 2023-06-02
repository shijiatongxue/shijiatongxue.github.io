import { Blog } from "./useBlogList";

const BlogCard = (props: Blog) => {
  const { createTime, coverUrl, title, url, description } = props;

  const handleGoBlog = () => {
    window.open(url);
  };

  return (
    <div
      onClick={handleGoBlog}
      className="box-border w-full py-[12px] px-[12px] sm:py-[24px] sm:px-[30px] sm:h-[260px] flex items-center justify-between gap-[20px] border-b border-solid border-[var(--semi-color-border)] rounded-[20px] bg-[var(--semi-bg-0)] cursor-pointer"
    >
      <div className="flex shrink flex-col items-start gap-y-[4px] sm:gap-y-[30px] grow overflow-hidden">
        <p className="shrink min-w-[107px] text-[13px] text-[#667085ff] leading-[16px] align-top font-[500]">
          {createTime.toLocaleDateString()}
        </p>
        <div className="shrink items-start gap-y-[10px] overflow-hidden w-full">
          <p className="box-border truncate text-[26px] text-[#1d2939ff] leading-[34px] text-left align-top font-[600]">
            {title}
          </p>
          <p className="box-border line-clamp-2 text-ellipsis text-[18px] text-[#475467ff] leading-[27px] text-left align-top font-[400]">
            {description}
          </p>
        </div>
      </div>
      <img
        className="box-border w-[300px] h-[212px] rounded-[10px] hidden	sm:inline-block"
        width="300"
        height="212"
        src={coverUrl}
      />
    </div>
  );
};

export default BlogCard;
