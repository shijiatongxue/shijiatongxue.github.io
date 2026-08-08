export interface ProjectImageProps {
  imageUrl: string;
  bgColor?: 'red' | 'dark' | 'orange' | string;
}

const bgColorMap = {
  red: '#E23839',
  dark: '#022516',
  orange: '#ED7854',
};

export default function ProjectImage(props: ProjectImageProps) {
  const { bgColor } = props;
  const backgroundColor = (bgColor && bgColorMap[bgColor as keyof typeof bgColorMap]) || bgColor || bgColorMap.dark;

  return (
    <div className="project-image" style={{ background: backgroundColor }}>
      <img src={props.imageUrl} alt="" loading="lazy" />
    </div>
  );
}
