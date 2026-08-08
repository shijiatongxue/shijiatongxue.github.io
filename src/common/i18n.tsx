import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'zh' | 'en';

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  zh: {
    'nav.home': '首页',
    'nav.blogs': '文章',
    'nav.projects': '项目',
    'nav.navigate': '导航',
    'nav.aria': '主导航',
    'header.home': '回到首页',
    'header.dark': '切换到深色模式',
    'header.light': '切换到浅色模式',
    'header.github': '打开 GitHub',
    'header.menu': '打开菜单',
    'header.language': '切换到英文',
    'header.role': '前端 → AI',
    'home.eyebrow': '前端 → AI',
    'home.title.first': '把想法做成',
    'home.title.second': '好用的产品。',
    'home.lede': '从前端开发到 AI 全栈开发，我专注把复杂问题做成清晰、好用的产品。这里记录我的项目、思考和尝试。',
    'home.projects': '看看我的项目',
    'home.blogs': '阅读文章',
    'home.stats.projects': '精选项目',
    'home.stats.blogs': '深度文章',
    'home.stats.curiosity': '持续好奇',
    'home.hero.aria': 'AI 与代码的抽象视觉',
    'home.hero.selected': '精选实践',
    'home.hero.card.title': 'AI',
    'home.hero.card.subtitle': '系统',
    'home.hero.card.note': '让它\n理所当然',
    'home.hero.curiosity': '保持好奇\n持续创造',
    'home.hero.research': '探索',
    'home.hero.interface': '产品',
    'home.hero.shipping': '上线',
    'home.marquee.aria': '关注领域',
    'home.marquee.one': 'AI 产品构建',
    'home.marquee.two': '全栈实践',
    'home.marquee.three': '产品思维',
    'home.marquee.four': '用户体验',
    'home.marquee.five': '真实问题',
    'home.marquee.six': '持续好奇',
    'home.writings.kicker': '01 / 文章',
    'home.writings.title.first': '把过程写下来，',
    'home.writings.title.second': '让经验可以被分享。',
    'home.writings.all': '查看全部文章',
    'home.work.kicker': '02 / 精选项目',
    'home.work.title.first': '一些真正被',
    'home.work.title.second': '做出来的东西。',
    'home.work.description': '从真实问题出发，兼顾产品思维与用户体验。',
    'home.work.all': '浏览全部项目',
    'blogs.kicker': '01 / 文章',
    'blogs.title.first': '写下正在',
    'blogs.title.second': '发生的事。',
    'blogs.description': '关于 AI、前端工程，以及把复杂问题变得简单的一些记录。',
    'blogs.empty': '文章列表为空',
    'blog.article': '文章',
    'blog.edited': '已编辑',
    'blog.read': '阅读全文',
    'projects.kicker': '02 / 精选项目',
    'projects.title.first': '做一些',
    'projects.title.second': '值得留下的东西。',
    'projects.description': '从前端工具到 AI 实践，持续把想法打磨成可以被使用、被分享的产品。',
    'project.open': '打开',
    'project.github': 'GitHub',
    'project.view': '查看项目',
    'footer.note': '在代码和 AI 之间，保持好奇。',
    'footer.github': 'GitHub',
  },
  en: {
    'nav.home': 'Home',
    'nav.blogs': 'Blogs',
    'nav.projects': 'Projects',
    'nav.navigate': 'Navigate',
    'nav.aria': 'Main navigation',
    'header.home': 'Go home',
    'header.dark': 'Switch to dark mode',
    'header.light': 'Switch to light mode',
    'header.github': 'Open GitHub',
    'header.menu': 'Open menu',
    'header.language': 'Switch to Chinese',
    'header.role': 'Frontend → AI',
    'home.eyebrow': 'Frontend → AI',
    'home.title.first': 'Turn ideas into',
    'home.title.second': 'useful products.',
    'home.lede': 'From frontend to full-stack AI, I turn complex problems into clear, useful products. Here I share my projects, thoughts, and experiments.',
    'home.projects': 'See my projects',
    'home.blogs': 'Read articles',
    'home.stats.projects': 'Selected projects',
    'home.stats.blogs': 'Deep dives',
    'home.stats.curiosity': 'Stay curious',
    'home.hero.aria': 'An abstract visual of AI and code',
    'home.hero.selected': 'SELECTED PRACTICE',
    'home.hero.card.title': 'AI',
    'home.hero.card.subtitle': 'systems',
    'home.hero.card.note': 'make it feel\ninevitable',
    'home.hero.curiosity': 'curiosity\ndrives craft',
    'home.hero.research': 'RESEARCH',
    'home.hero.interface': 'INTERFACE',
    'home.hero.shipping': 'SHIPPING',
    'home.marquee.aria': 'Areas of focus',
    'home.marquee.one': 'AI PRODUCT BUILDING',
    'home.marquee.two': 'FULL-STACK CRAFT',
    'home.marquee.three': 'PRODUCT THINKING',
    'home.marquee.four': 'USER EXPERIENCE',
    'home.marquee.five': 'REAL PROBLEMS',
    'home.marquee.six': 'STAY CURIOUS',
    'home.writings.kicker': '01 / WRITINGS',
    'home.writings.title.first': 'Write it down,',
    'home.writings.title.second': 'so experience can travel.',
    'home.writings.all': 'View all writing',
    'home.work.kicker': '02 / SELECTED WORK',
    'home.work.title.first': 'A few things I',
    'home.work.title.second': 'actually built.',
    'home.work.description': 'Built from real problems, shaped by product thinking and user experience.',
    'home.work.all': 'Browse all projects',
    'blogs.kicker': '01 / WRITINGS',
    'blogs.title.first': 'Writing down',
    'blogs.title.second': "what's happening.",
    'blogs.description': 'Notes on AI, frontend engineering, and making complex problems feel simple.',
    'blogs.empty': 'No articles yet',
    'blog.article': 'ARTICLE',
    'blog.edited': 'Edited',
    'blog.read': 'Read article',
    'projects.kicker': '02 / SELECTED WORK',
    'projects.title.first': 'Things worth',
    'projects.title.second': 'keeping around.',
    'projects.description': 'From frontend tools to AI experiments, turning ideas into products people can use and share.',
    'project.open': 'Open',
    'project.github': 'GitHub',
    'project.view': 'View project',
    'footer.note': 'Stay curious between code and AI.',
    'footer.github': 'GitHub',
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'zh';
  }
  return window.localStorage.getItem('language') === 'en' ? 'en' : 'zh';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('language', nextLanguage);
  };

  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? 'Shi Jia — 前端到 AI' : 'Shi Jia — Frontend to AI';
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: (key) => TRANSLATIONS[language][key] || key,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
