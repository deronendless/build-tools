export function render(container) {
  container.innerHTML = `<h1>shijian：${new Date().toLocaleTimeString()}</h1>`;
}

// 首次渲染
render(document.getElementById("app"));
