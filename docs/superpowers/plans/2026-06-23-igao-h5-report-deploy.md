# iGao H5 Replica, Report, and Deploy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static H5 replica of the i高专家小程序, generate an HTML/PDF analysis report, sync it to a Thunder-Agent GitHub repository, and publish a remote URL.

**Architecture:** Use a dependency-light static web app with one HTML entry, one stylesheet, and one JS controller. The report is a separate print-optimized HTML file rendered to PDF by a Playwright script. GitHub Pages serves the static files directly from the repository root.

**Tech Stack:** HTML, CSS, vanilla JavaScript, copied screenshot assets, bundled Node.js with Playwright, GitHub CLI, GitHub Pages.

---

### Task 1: Static H5 App

**Files:**
- Create: `D:/Projects/igao-miniapp-h5/index.html`
- Create: `D:/Projects/igao-miniapp-h5/styles.css`
- Create: `D:/Projects/igao-miniapp-h5/app.js`
- Use assets from: `D:/Projects/igao-miniapp-h5/assets/`

- [ ] **Step 1: Build the page shell**

Create a phone-sized web app with a top mini-program header, content viewport, and bottom tab bar.

- [ ] **Step 2: Implement tab navigation**

Tabs: 首页, 打卡, 服务, 我的. Each tab renders its matching captured screen state.

- [ ] **Step 3: Implement key interactions**

Add child opens form screen. Annual report, health test, health record, and record memory show missing-child modal. Service tab shows a simulated location permission prompt on first entry.

- [ ] **Step 4: Verify manually in browser**

Open `index.html` or serve the folder and inspect mobile viewport.

### Task 2: Analysis Report and PDF

**Files:**
- Create: `D:/Projects/igao-miniapp-h5/report.html`
- Create: `D:/Projects/igao-miniapp-h5/scripts/export-pdf.mjs`
- Output: `D:/Projects/igao-miniapp-h5/report.pdf`

- [ ] **Step 1: Build report HTML**

Include audit scope, screenshot evidence, strengths, risks, accessibility notes, and prioritized recommendations.

- [ ] **Step 2: Render PDF**

Run Playwright against `report.html` and write `report.pdf`.

- [ ] **Step 3: Verify PDF exists and is readable**

Check file size, page count if possible, and render screenshot evidence.

### Task 3: Project Metadata

**Files:**
- Create: `D:/Projects/igao-miniapp-h5/README.md`
- Create: `D:/Projects/igao-miniapp-h5/.gitignore`
- Create: `D:/Projects/igao-miniapp-h5/.nojekyll`

- [ ] **Step 1: Document the project**

README must include purpose, local preview, published URL placeholder, and artifact list.

- [ ] **Step 2: Keep repo clean**

Ignore transient logs and local server state.

### Task 4: Verify and Publish

**Files:**
- Modify after publish: `D:/Projects/igao-miniapp-h5/README.md`

- [ ] **Step 1: Initialize Git**

Run `git init`, commit project files.

- [ ] **Step 2: Create GitHub repository**

Use `gh repo create` under account `Thunder-Agent`.

- [ ] **Step 3: Push and enable GitHub Pages**

Push `main`, enable Pages from branch root, wait for published URL.

- [ ] **Step 4: Verify remote URL**

Open the GitHub Pages URL and confirm the app loads.
