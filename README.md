# i高专家 H5 复刻与项目分析报告

这个工程基于已登录状态的小程序截图，完成了 `i高专家生长发育` 的 H5 复刻、项目分析报告 HTML 和 PDF 输出。

## 交付内容

- `index.html`：H5 复刻页面，可直接作为 GitHub Pages 静态站点发布。
- `report.html`：项目分析报告 HTML。
- `report.pdf`：由 HTML 报告渲染生成的 PDF。
- `assets/screenshots/`：本次审计捕获的 12 张关键截图和总览图。
- `verification/`：本地渲染验证截图。

## 复刻范围

- 首页
- 打卡页
- 服务页与定位授权弹窗模拟
- 我的页
- 添加孩子表单页
- 未添加孩子阻断弹窗
- 底部导航切换和基础 Toast 提示

本项目不会保存儿童信息，不调用真实定位，不连接真实后端，不执行支付、上传或删除操作。

## 本地预览

可以直接打开：

```text
index.html
```

也可以在项目目录启动任意静态服务器。

## PDF 生成

使用 Codex 捆绑 Node.js 和 Playwright：

```powershell
& "C:\Users\John\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/export-pdf.mjs
```

同一个 Node 也可以运行：

```powershell
& "C:\Users\John\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/capture-site.mjs
& "C:\Users\John\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/capture-report.mjs
```

## 远程访问

发布地址将在 GitHub Pages 开通后更新。
