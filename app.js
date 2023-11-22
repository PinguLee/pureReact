function createElement(type, props, ...children) {
  return { type, props, children };
}

function render(virtualDom) {
  if (typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }

  const element = document.createElement(virtualDom.type);

  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }

  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }

  return element;
}

function component(stateData) {
  const menuItems = stateData.map(item => {
    return createElement('li', { href: item.hash }, item.text);
  });

  const menu = createElement('ul', null, ...menuItems);
  const content = createElement('div', null, '안녕하세요 React');

  return createElement('div', null, menu, content);
}

const stateData = [
  { hash: '#home', text: '홈' },
  { hash: '#about', text: '소개' },
  { hash: '#services', text: '서비스' },
  { hash: '#portfolio', text: '포트폴리오' },
  { hash: '#contact', text: '문의' },
];

const virtualDom = component(stateData);

export { render, virtualDom };