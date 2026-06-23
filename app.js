const assets = {
  mascot: "assets/mascot.png",
  report: "assets/icon-report.png",
  test: "assets/icon-test.png",
  record: "assets/icon-record.png",
  article1: "assets/article-1.png",
  article2: "assets/article-2.png",
  article3: "assets/article-3.png",
};

const state = {
  tab: "home",
  route: "main",
  missingModal: null,
  locationPrompt: false,
  serviceVisited: false,
  toast: "",
};

const app = document.querySelector("#app");

function icon(name) {
  return document.querySelector(`#icon-${name}`).innerHTML;
}

function miniControls() {
  return `
    <div class="mini-controls" aria-hidden="true">
      <span class="mini-dot"><i></i><i></i><i></i></span>
      <span class="mini-divider"></span>
      <span>一</span>
      <span class="mini-divider"></span>
      <span class="circle-icon"></span>
    </div>
  `;
}

function header({ plain = false, title = "", back = false } = {}) {
  if (plain) {
    return `
      <header class="header plain">
        ${back ? `<button class="back-btn" data-action="back" aria-label="返回">‹</button>` : ""}
        <div class="plain-title">${title}</div>
        ${miniControls()}
      </header>
    `;
  }

  return `
    <header class="header">
      <div class="brand">i高专家</div>
      ${miniControls()}
    </header>
  `;
}

function tabbar() {
  const tabs = [
    ["home", "首页", "home"],
    ["checkin", "打卡", "calendar"],
    ["services", "服务", "heart"],
    ["profile", "我的", "user"],
  ];

  return `
    <nav class="tabbar" aria-label="底部导航">
      ${tabs
        .map(
          ([key, label, iconName]) => `
          <button class="tab ${state.tab === key ? "active" : ""}" data-tab="${key}" aria-label="${label}">
            ${icon(iconName)}
            <span>${label}</span>
          </button>
        `,
        )
        .join("")}
    </nav>
  `;
}

function homeScreen() {
  return `
    ${header()}
    <section class="content">
      <article class="child-card">
        <img src="${assets.mascot}" alt="i高专家形象" />
        <button class="add-child-cta" data-route="add-child">
          <span class="plus-ring">+</span>
          <span>添加孩子</span>
        </button>
      </article>

      <div class="feature-grid">
        <button class="feature" data-missing="年度分析报告"><img src="${assets.report}" alt="" /><span>年度分析报告</span></button>
        <button class="feature" data-missing="健康测评"><img src="${assets.test}" alt="" /><span>健康测评</span></button>
        <button class="feature" data-missing="健康档案"><img src="${assets.record}" alt="" /><span>健康档案</span></button>
      </div>

      <div class="section-title"><strong>时光相册</strong><span>/记录宝贝成长时光</span></div>
      <button class="outline-cta" data-missing="记录时光">记录时光</button>
    </section>
    ${tabbar()}
  `;
}

function checkinScreen() {
  return `
    <section class="content soft" style="padding:0 18px 92px">
      <div class="check-header">
        <div class="screen-title">打卡</div>
        <div class="date-row"><span>2026-06-23</span><span class="today-link">回到今天 &gt;</span></div>
        <div class="week">
          ${[
            ["一", "22"],
            ["二", "今天", "today"],
            ["三", "24"],
            ["四", "25"],
            ["五", "26"],
            ["六", "27"],
            ["日", "28"],
          ]
            .map(([w, d, cls]) => `<div class="day ${cls || ""}"><small>${w}</small><span>${d}</span></div>`)
            .join("")}
        </div>
        <div class="filter">查看全部⌄</div>
      </div>

      <article class="card">
        <div class="card-head"><h2>每日目标</h2><button data-toast="演示版：设置目标需要先添加孩子">设置目标 &gt;</button></div>
        <div class="goal-space"><div class="stamp">一键打卡</div></div>
        <div class="metric-row">
          <span>摄入蛋白质/克</span>
          <span>消耗卡路里/千卡</span>
          <span>睡眠时长/小时</span>
        </div>
      </article>

      <article class="card">
        <div class="card-head"><h2>饮食打卡 🍽</h2><button data-toast="演示版：编辑项目未接入">编辑项目 &gt;</button></div>
        <p class="muted">未打卡</p>
      </article>
    </section>
    ${tabbar()}
  `;
}

function servicesScreen() {
  const prompt = state.locationPrompt ? locationPrompt() : "";
  return `
    <section class="content">
      <div class="service-hero">${miniControls()}</div>
      <article class="article-card">
        <div class="article-head"><strong>科普内容</strong><button class="small-pill" data-toast="演示版：查看更多文章">查看全部</button></div>
        ${article(assets.article1, "长高，不可或缺的营养素", "2023-11-28 17:36:10")}
        ${article(assets.article2, "动物内脏宝宝到底能不能吃?", "2023-11-28 17:35:14")}
        ${article(assets.article3, "【生长发育】想让孩子长高? 必...", "2023-11-28 17:33:31")}
      </article>
    </section>
    ${tabbar()}
    ${prompt}
  `;
}

function article(img, title, time) {
  return `
    <button class="article" data-toast="演示版：文章详情未接入">
      <img src="${img}" alt="" />
      <span><h3>${title}</h3><time>${time}</time></span>
      <span class="chevron">›</span>
    </button>
  `;
}

function profileScreen() {
  return `
    <section class="content soft">
      <div class="profile-top">
        <article class="profile-banner">
          <span class="family">我的家庭 ›</span>
          <p>请添加孩子信息</p>
          <p>为您评估孩子的发育状况</p>
          <button class="white-btn" data-route="add-child">添加孩子</button>
        </article>
      </div>

      <section class="list-section">
        <div class="card-head"><h2>智能设备</h2><button data-toast="演示版：更多设备">更多 ›</button></div>
        <button class="device-add" data-toast="演示版：添加设备未接入">添加设备</button>
      </section>

      <section class="list-section">
        <div class="card-head"><h2>每日签到</h2><button class="yellow-pill" data-toast="演示版：已模拟签到">立即签到</button></div>
      </section>

      <section class="list-section">
        <div class="card-head"><h2>任务赚积分</h2><span class="muted">今日积分</span></div>
      </section>

      <section class="menu-list">
        ${menuItem("我的订单", "▣")}
        ${menuItem("方案管理", "♙")}
        ${menuItem("体测报告", "▤")}
        ${menuItem("儿保记录", "▧")}
        ${menuItem("评估问卷", "☷")}
        ${menuItem("联系客服", "◔")}
        ${menuItem("意见反馈", "□")}
        ${menuItem("退出登录", "○")}
      </section>
    </section>
    ${tabbar()}
  `;
}

function menuItem(label, mark) {
  return `
    <button class="menu-item" data-toast="演示版：${label}未接入">
      <span class="menu-left"><span class="menu-ico">${mark}</span>${label}</span>
      <span>›</span>
    </button>
  `;
}

function addChildScreen() {
  return `
    ${header({ plain: true, title: "添加孩子", back: true })}
    <section class="form-content">
      <div class="steps">
        <div class="step active"><b>1</b><span>基本信息</span></div>
        <div class="step"><b>2</b><span>体格信息</span></div>
      </div>

      <button class="avatar-add" data-toast="演示版不会上传照片">+</button>
      <div class="avatar-label">添加宝宝照片</div>

      ${field("姓名", "请输入姓名", true)}
      ${field("昵称", "请输入昵称", true)}
      ${field("身份证号码", "请输入宝宝身份证号码", false)}
      <div class="form-row required">
        <label>性别</label>
        <div class="radio-row"><span class="radio"><i></i>男</span><span class="radio"><i></i>女</span></div>
      </div>
      <div class="form-row required">
        <label>生日</label>
        <input readonly value="" placeholder="请选择宝宝生日               ﹀" />
      </div>
    </section>
    <button class="primary-fixed" data-toast="演示版不会保存儿童信息">下一步</button>
  `;
}

function field(label, placeholder, required) {
  return `
    <div class="form-row ${required ? "required" : ""}">
      <label>${label}</label>
      <input readonly placeholder="${placeholder}" />
    </div>
  `;
}

function missingModal() {
  return `
    <div class="modal-shade">
      <article class="missing-modal" role="dialog" aria-modal="true" aria-label="请先添加宝宝">
        <div class="missing-illustration">?</div>
        <p>您还没有添加宝宝，添加后可获得：</p>
        <div class="benefits">
          <span>专业身高发育评价</span>
          <span>个性化生长方案</span>
          <span>定制化身高管理方案</span>
          <span>科学打卡管理指导</span>
        </div>
        <div class="modal-actions">
          <button data-action="close-modal">取消</button>
          <button class="go" data-route="add-child">去添加</button>
        </div>
      </article>
    </div>
  `;
}

function locationPrompt() {
  return `
    <div class="modal-shade">
      <article class="location-dialog" role="dialog" aria-modal="true" aria-label="地理位置授权模拟">
        <button class="close" data-action="close-location" aria-label="关闭">×</button>
        <small>i高专家生长发育 申请</small>
        <h3>同意此应用使用你的地理位置</h3>
        <div class="location-actions">
          <button data-action="close-location">允许</button>
          <button class="secondary" data-action="close-location">拒绝</button>
        </div>
      </article>
    </div>
  `;
}

function render() {
  const screen = state.route === "add-child" ? addChildScreen() : renderTab();
  app.innerHTML = `<div class="screen">${screen}${state.missingModal ? missingModal() : ""}${state.toast ? `<div class="toast">${state.toast}</div>` : ""}</div>`;
}

function renderTab() {
  if (state.tab === "checkin") return checkinScreen();
  if (state.tab === "services") return servicesScreen();
  if (state.tab === "profile") return profileScreen();
  return homeScreen();
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1600);
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-tab], [data-route], [data-action], [data-missing], [data-toast]");
  if (!target) return;

  const tab = target.dataset.tab;
  if (tab) {
    state.tab = tab;
    state.route = "main";
    state.missingModal = null;
    if (tab === "services" && !state.serviceVisited) {
      state.locationPrompt = true;
      state.serviceVisited = true;
    }
    render();
    return;
  }

  if (target.dataset.route === "add-child") {
    state.route = "add-child";
    state.missingModal = null;
    state.locationPrompt = false;
    render();
    return;
  }

  if (target.dataset.missing) {
    state.missingModal = target.dataset.missing;
    render();
    return;
  }

  if (target.dataset.action === "close-modal") {
    state.missingModal = null;
    render();
    return;
  }

  if (target.dataset.action === "close-location") {
    state.locationPrompt = false;
    render();
    return;
  }

  if (target.dataset.action === "back") {
    state.route = "main";
    render();
    return;
  }

  if (target.dataset.toast) {
    showToast(target.dataset.toast);
  }
});

render();
