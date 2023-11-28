import './styles/main.scss';

function createElement(type, props, children) {
  return {
    type,
    props,
    children,
  };
}

function component(stateData) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement('li', { key: i }, [createElement('a', { href: item.hash }, item.text)]);

    menuItems.push(menuItem);
  }
  const menu = createElement('ul', {
    key: 'menu',
  }, menuItems);
  return menu;
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

const stateData = [
  { hash: '#one', text: '김 현' },
  { hash: '#two', text: '신동현' },
  { hash: '#three', text: '윤준현' },
  { hash: '#four', text: '이민구' },
  { hash: '#five', text: '홍문기' },
];
const virtualDom = component(stateData);
const container = document.getElementById('root');
container.appendChild(render(virtualDom));