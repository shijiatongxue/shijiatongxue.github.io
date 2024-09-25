import Project from './components/project';
import PROJECTS from '../../const/projects';

export default function Projects(props: { style?: React.CSSProperties }) {
  return (
    <div
      style={props.style}
      className="max-xl:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] sm:pt-[44px]"
    >
      {PROJECTS.map((item) => (
        <Project {...item} key={item.name} />
      ))}
    </div>
  );
}
