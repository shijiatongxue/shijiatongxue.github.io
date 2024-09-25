import { IconGithubLogo, IconGlobeStroke } from '@douyinfe/semi-icons';
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

export default function Project(props: ProjectProps) {
  const { name, tags, githubUrl, relatedUrl, displayImageUrl, displayImageBgColor } = props;

  const handleGoGithub = () => {
    window.open(githubUrl);
  };

  const handleGoProject = () => {
    window.open(relatedUrl);
  };

  return (
    <div className="max-xl:w-full flex flex-col items-start gap-y-[20px] w-[309px] h-[465px] rounded-[5px]">
      <div className="shrink-0 flex justify-center items-center gap-x-[26px]">
        <p className="shrink-0 min-w-[215px] xl:text-3xl text-2xl text-[color:var(--semi-color-text-0)] leading-[57px] text-left align-top font-[500]">
          {name}
        </p>
      </div>
      <div className="self-stretch shrink-0 flex items-start gap-x-[10px] overflow-hidden">
        {tags.map((tagName) => (
          <ProjectTag name={tagName} />
        ))}
      </div>
      <ProjectImage imageUrl={displayImageUrl} bgColor={displayImageBgColor} />
      <div className="shrink-0 flex items-start gap-x-[20px] pt-[0px] pl-[14px] pr-[0px] pb-[0px]">
        {githubUrl && (
          <div
            className="shrink-0 flex flex-col justify-center items-center gap-y-[4px] cursor-pointer"
            onClick={handleGoGithub}
          >
            <div className="shrink-0 flex items-center gap-x-[4px] text-[color:var(--semi-color-text-0)]">
              <p className="shrink-0 text-[16px] leading-[24px] text-left align-top font-[500]">Github</p>
              <IconGithubLogo size="large" className="shrink-0" />
            </div>
            <div className="shrink-0 w-[0.0010000000474974513px] h-[3px] bg-[#111827ff]"></div>
          </div>
        )}
        <div className="shrink-0 flex flex-col justify-center items-center gap-y-[4px]" onClick={handleGoProject}>
          <div className="shrink-0 flex items-center gap-x-[4px] cursor-pointer text-[color:var(--semi-color-text-0)]">
            <p className="shrink-0 text-[16px] leading-[24px] text-left align-top font-[500]">Link</p>
            <IconGlobeStroke size="large" className="shrink-0" />
          </div>
          <div className="shrink-0 w-[0.0010000000474974513px] h-[3px] bg-[#111827ff]"></div>
        </div>
      </div>
    </div>
  );
}
