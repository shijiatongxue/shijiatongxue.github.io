import { ProjectProps } from "../pages/projects/components/project";

const PROJECTS: ProjectProps[] = [
  {
    name: "Semi Design",
    tags: ["React", "UI components"],
    displayImageUrl:
      "https://site-1307850796.cos.ap-beijing.myqcloud.com/semi-design.jpg",
    displayImageBgColor: "red",
    githubUrl: "https://github.com/DouyinFE/semi-design",
    relatedUrl: "https://semi.design",
  },
  {
    name: "设计稿转代码",
    tags: ["React", "Design to code"],
    displayImageUrl:
      "https://site-1307850796.cos.ap-beijing.myqcloud.com/design-2-code.jpg",
    displayImageBgColor: "dark",
    relatedUrl: "https://www.figma.com/community/plugin/1166339852662786534",
  },
  {
    name: "Quick Replace Font",
    tags: ["React", "Figma"],
    displayImageUrl:
      "https://site-1307850796.cos.ap-beijing.myqcloud.com/quick-replace-font.png",
    displayImageBgColor: "orange",
    relatedUrl: "https://www.figma.com/community/plugin/1241949869279607046",
  },
];

export default PROJECTS;
