import { Blog } from "./useBlogList";

const BlogCard = (props: Blog) => {
  const { createTime, coverUrl, title, url, description } = props;

  const handleGoBlog = () => {
    window.open(url);
  };

  return (
    <div
      onClick={handleGoBlog}
      className="box-border w-full py-[24px] px-[30px] h-[260px] flex items-center justify-between gap-[20px] border-b border-solid border-[var(--semi-color-border)] rounded-[20px] bg-[var(--semi-bg-0)] cursor-pointer"
    >
      <div className="flex flex-col items-start gap-y-[30px] grow">
        <p className="shrink-0 min-w-[107px] text-[13px] text-[#667085ff] leading-[16px] align-top font-[500]">
          {createTime.toLocaleDateString()}
        </p>
        <div className="shrink-0 flex flex-col items-start gap-y-[10px]">
          <p className="box-border  shrink-0 text-[26px] text-[#1d2939ff] leading-[34px] text-left align-top font-[600]">
            {title}
          </p>
          <p className="box-border  shrink-0 text-[18px] text-[#475467ff] leading-[27px] text-left align-top font-[400]">
            {description}
          </p>
        </div>
      </div>
      <img
        className="box-border w-[300px] h-[211.8518524169922px] rounded-[10px]"
        src={coverUrl}
      />
    </div>
  );
};

export default BlogCard;
