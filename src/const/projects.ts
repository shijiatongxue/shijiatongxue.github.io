import { ProjectProps } from '../pages/projects/components/project';

const PROJECTS: ProjectProps[] = [
  {
    name: 'Semi Design',
    tags: ['React UI components'],
    displayImageUrl: 'https://site-1307850796.cos.ap-beijing.myqcloud.com/semi-design.jpg',
    displayImageBgColor: 'red',
    githubUrl: 'https://github.com/DouyinFE/semi-design',
    relatedUrl: 'https://semi.design',
  },
  {
    name: '设计稿转代码',
    tags: ['Figma Plugin', 'Design to code'],
    displayImageUrl: 'https://site-1307850796.cos.ap-beijing.myqcloud.com/design-2-code.jpg',
    displayImageBgColor: 'dark',
    relatedUrl: 'https://www.figma.com/community/plugin/1166339852662786534',
    githubUrl: 'https://github.com/shijiatongxue/semi-d2c',
  },
  {
    name: 'Quick Replace Font',
    tags: ['Figma Plugin'],
    displayImageUrl: 'https://site-1307850796.cos.ap-beijing.myqcloud.com/quick-replace-font.png',
    displayImageBgColor: 'orange',
    relatedUrl: 'https://www.figma.com/community/plugin/1241949869279607046',
  },
  {
    name: 'create-figma-app',
    tags: ['npm package'],
    displayImageUrl: 'https://s-1307850796.cos.ap-beijing.myqcloud.com/create-figma-app.png',
    displayImageBgColor: '#231f20',
    githubUrl: 'https://github.com/shijiatongxue/create-figma-app',
    relatedUrl: 'https://www.npmjs.com/package/create-figma-app',
  },
];

export default PROJECTS;
