# AGENTS.md

本文件为 AI 代理提供项目上下文与操作约定。修改代码前请先阅读。

## 项目概述

石嘉（Shi Jia）的个人作品集站点，托管于 GitHub Pages（自定义域名见根目录 `CNAME`）。站点展示首页、文章、项目等内容，支持中英文切换与深浅色主题。

- 仓库默认分支：`master`
- 线上地址：[https://shijia.dev/](https://shijia.dev/)（自定义域名，见根目录 `CNAME`）、[https://shijiatongxue.github.io](https://shijiatongxue.github.io)

## 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 4 |
| 路由 | React Router 6 |
| UI 库 | Semi Design（`@douyinfe/semi-ui`） |
| 样式 | SCSS（主）+ Tailwind CSS（辅助） |
| 包管理 | 本地可用 pnpm；CI 使用 `npm` |

## 目录结构

```
src/
  layout/          # 全局布局：Header、Main、Footer
  pages/           # 页面组件（home、blogs、projects 等）
  components/      # 可复用组件
  const/           # 静态数据：menus、projects、books、photos
  common/          # i18n、工具函数
  styles/          # 按模块拆分的 SCSS
  router/          # 路由配置（读取 MENUS）
scripts/
  uploadStatic.js  # CI 用：增量上传 docs/assets 到腾讯云 COS
  getPhotos.js     # 手动脚本：从 COS 拉取照片列表写入 photos.ts
docs/              # 构建产物（gitignore，勿提交）
.github/workflows/
  static.yml       # push master 时自动构建并部署
```

## 常用命令

```bash
npm install          # 或 pnpm install
npm run dev          # 本地开发，base 为 /
npm run build        # tsc + vite build → docs/
npm run lint         # ESLint 检查并自动修复
npm run uploadStatic # 上传 docs/assets 到 COS（需环境变量）
```

`postbuild` 会自动执行：复制 `docs/index.html` → `docs/404.html`，并复制 `CNAME` 到 `docs/`。

## 部署架构

生产环境采用 **GitHub Pages + 腾讯云 COS CDN** 混合部署：

1. **Vite 构建**：生产模式 `base` 指向 COS CDN（`vite.config.ts` 中 `https://site-1307850796.cos.ap-beijing.myqcloud.com`），JS/CSS 等静态资源引用 CDN 地址。
2. **uploadStatic**：CI 将 `docs/assets/` 中 COS 尚不存在的文件增量上传至桶 `site-1307850796`（北京）。
3. **GitHub Pages**：将 `docs/` 目录部署为站点入口（HTML、404、CNAME）。

CI 工作流见 `.github/workflows/static.yml`，触发条件为 push `master` 或手动 `workflow_dispatch`。

所需 GitHub Secrets：

- `COSSecretId` / `COSSecretKey` — COS API 凭证（uploadStatic 使用）
- `COS_TOKEN` — COS 鉴权 token（getPhotos 等脚本使用；build 步骤也会注入）

## 开发约定

### 路由与页面

- 路由在 `src/const/menus.ts` 的 `MENUS` 数组中注册，每项含 `path`、`text`、`component`。
- 新增页面：在 `src/pages/` 创建组件 → 在 `src/pages/index.tsx` 导出 → 在 `MENUS` 中注册。

### 国际化

- 文案集中在 `src/common/i18n.tsx` 的 `TRANSLATIONS`，`zh` 与 `en` 需同步添加 key。
- 组件内通过 `useLanguage()` 的 `t('key')` 取文案，勿硬编码用户可见文本。

### 样式

- 全局 CSS 变量与主题定义在 `src/index.scss`（`:root` 浅色、`body[theme-mode]` 深色）。
- 模块样式放在 `src/styles/*.scss`，按页面或组件命名。
- 优先复用 `--site-*` 变量，保持视觉一致；Semi 组件颜色已通过 CSS 变量覆盖。

### 静态数据

- **项目**：`src/const/projects.ts`
- **书籍**：`src/const/books.ts`
- **照片**：`src/const/photos.ts`（可用 `node scripts/getPhotos.js` 从 COS 刷新，需 `COS_TOKEN`）
- **文章**：当前在 `src/pages/blogs/useBlogList.ts` 中硬编码；Notion API 拉取逻辑已注释，接口见 `src/pages/blogs/utils.ts`

### TypeScript

- `strict: false`，与现有代码风格保持一致。
- 路径别名未配置，使用相对路径 import。

## 修改时注意

- **不要提交 `docs/`**：已在 `.gitignore` 中，由 CI 构建生成。
- **生产 base URL**：本地 dev 用 `/`，生产用 COS CDN；测试生产资源路径需 `npm run build` 后 preview 或看 CI 产物。
- **新增静态资源**：构建后会进入 `docs/assets/`，CI 会自动上传到 COS；本地也可手动 `npm run uploadStatic`。
- **默认分支是 `master`**，不是 `main`；改 workflow 触发分支时注意一致。
- **最小改动原则**：只改与任务相关的文件，匹配现有命名与代码风格。

## 外部依赖服务

| 服务 | 用途 |
|------|------|
| 腾讯云 COS | 静态资源 CDN、照片存储 |
| 腾讯云 API Gateway | 文章列表接口（`/getBlogList`，当前未启用） |
| Notion | 文章数据源（代码中预留，当前未启用） |
