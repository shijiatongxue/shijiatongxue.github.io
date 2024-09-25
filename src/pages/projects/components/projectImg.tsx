import { Image } from '@douyinfe/semi-ui';

export interface ProjectImageProps {
  imageUrl: string;
  bgColor?: 'red' | 'dark' | 'orange' | string;
}

const bgColorMap = {
  red: '#E23839',
  dark: '#022516',
  orange: 'ED7854',
};

export default function ProjectImage(props: ProjectImageProps) {
  const { bgColor } = props;
  const backgroundColor = bgColorMap[bgColor] ?? bgColorMap['dark'];

  return (
    <div
      className="min-w-[309px] h-[260px] rounded-[18px] bg-[#ed7854ff] overflow-hidden flex grow justify-center items-center"
      style={{ background: backgroundColor }}
    >
      <Image src={props.imageUrl} width="100%" />
    </div>
  );
}
