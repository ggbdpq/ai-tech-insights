# AI Tech Insights - 小七AI资讯

一个现代化的AI资讯分享网站，基于Next.js 14、React 18、TypeScript和Tailwind CSS构建。

## 🚀 特性

- **📱 响应式设计** - 完美适配桌面、平板和手机
- **🌙 暗黑模式** - 支持明亮/暗黑主题切换
- **📝 Markdown驱动** - 使用MDX格式编写文章
- **🏷️ 标签系统** - 基于标签的文章分类和筛选
- **⚡ 高性能** - 基于Next.js的静态生成和服务器端渲染
- **🎨 现代UI** - 使用Shadcn/ui组件库

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: Shadcn/ui
- **状态管理**: Zustand
- **内容管理**: MDX + Gray Matter
- **包管理**: pnpm

## 📦 安装和运行

### 1. 克隆项目

```bash
git clone <repository-url>
cd ai-tech-insights
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建生产版本

```bash
pnpm run build
pnpm run start
```

## 📝 添加文章

### 1. 创建MDX文件

在 `posts/` 目录下创建新的 `.mdx` 文件：

```bash
posts/your-article.mdx
```

### 2. 添加Frontmatter

每篇文章都需要包含以下frontmatter：

```yaml
---
title: "文章标题"
summary: "文章摘要，一句话描述文章内容"
date: "2025-01-15"
tags: ["标签1", "标签2", "标签3"]
---
```

### 3. 编写内容

使用标准的Markdown语法编写文章内容。推荐的文章结构：

```markdown
## 核心摘要
文章的核心内容摘要

## 关键特性
- 特性1
- 特性2

## 快速上手
代码示例和使用方法

## 应用场景
实际应用场景

## 我的点评
> 个人观点和评价

## 相关资源链接
- [链接1](url1)
- [链接2](url2)
```

## 🎨 自定义主题

### 修改颜色主题

编辑 `src/app/globals.css` 中的CSS变量：

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* 其他颜色变量 */
}
```

### 添加自定义组件

在 `src/components/` 目录下创建新组件，并在文章中使用。

## 📁 项目结构

```
ai-tech-insights/
├── src/
│   ├── app/                 # Next.js App Router页面
│   ├── components/          # React组件
│   │   ├── ui/             # UI基础组件
│   │   ├── header.tsx      # 网站头部
│   │   ├── post-card.tsx   # 文章卡片
│   │   └── ...
│   ├── lib/                # 工具函数
│   │   ├── posts.ts        # 文章处理逻辑
│   │   └── utils.ts        # 通用工具
│   └── store/              # 状态管理
├── posts/                  # MDX文章文件
├── public/                 # 静态资源
└── ...
```

## 🚀 部署

### Vercel部署

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持Next.js的平台，如Netlify、Railway等。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

Built with ❤️ by 小七博客