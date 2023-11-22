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
  const title = createElement('h2', null, '연습');
  const menu = createElement('ul', null, ...menuItems);
  return createElement('div', null, title, menu);
}

const stateData = [
  { hash: '#ex1', text: 'ex1' },
  { hash: '#ex2', text: 'ex2' },
  { hash: '#ex3', text: 'ex3' },
  { hash: '#ex4', text: 'ex4' },
  { hash: '#ex5', text: 'ex5' },
  { hash: '#ex6', text: 'ex6' }
];

const virtualDom = component(stateData);

export { render, virtualDom };