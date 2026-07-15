export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: '电商平台',
    description: '基于 React + Next.js 构建的现代化电商平台，支持商品浏览、购物车、订单管理等功能。',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20interface%20with%20dark%20theme&image_size=landscape_16_9',
    link: '#',
  },
  {
    id: 2,
    name: '任务管理系统',
    description: '功能完善的任务管理系统，支持看板视图、日历视图、团队协作等功能。',
    techStack: ['Vue', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20dashboard%20with%20kanban%20board%20dark%20theme&image_size=landscape_16_9',
    link: '#',
  },
  {
    id: 3,
    name: '数据可视化平台',
    description: '专业的数据可视化平台，支持多种图表类型，实时数据更新。',
    techStack: ['React', 'D3.js', 'TypeScript', 'Express'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs%20dark%20theme&image_size=landscape_16_9',
    link: '#',
  },
  {
    id: 4,
    name: '个人博客',
    description: '基于 Markdown 的个人博客系统，支持代码高亮、评论系统、SEO 优化。',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20blog%20website%20with%20modern%20design%20dark%20theme&image_size=landscape_16_9',
    link: '#',
  },
];
