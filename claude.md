 # 项目目标
构建一个极简风格的个人平面设计师作品集网站。包含：
- 首页（个人介绍、技能标签）
- 作品列表页（瀑布流展示）
- 作品详情页（大图+描述）
- 关于我页面
- 简单的访问统计后台（记录每次页面访问的IP和时间）

# 技术要求
- 前端使用 React + Tailwind CSS，响应式设计
- 所有作品数据用 src/data/projects.json 管理
- 访问统计使用浏览器端 localStorage 记录，并在统计页展示
- 页面风格参考苹果官网，大留白，优雅字体
- 页面加载速度要快，图片使用懒加载

# Agent 分工
- 页面结构由 page-builder agent 负责
- 视觉样式由 style-designer agent 负责
- 统计功能由 analytics-agent 负责