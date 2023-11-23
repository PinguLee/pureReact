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

function ExerciseComponent({ hash, text, isVisible, toggleVisibility }) {
  const style = { display: isVisible ? 'block' : 'none' };
  return createElement('div', { style, className: 'exercise-component', onClick: toggleVisibility }, text);
}

function component(stateData, visibleExerciseIndex, setVisibility) {
  const menuItems = stateData.map((item, index) => {
    return createElement('li', { key: index }, item.text);
  });

  const exercises = stateData.map((item, index) => {
    return ExerciseComponent({
      key: index,
      hash: item.hash,
      text: item.text,
      isVisible: index === visibleExerciseIndex,
      toggleVisibility: () => setVisibility(index),
    });
  });

  const title = createElement('h2', null, '연습');
  const menu = createElement('ul', null, ...menuItems);
  return createElement('div', null, title, menu, ...exercises);
}

const stateData = [
  { hash: '#ex1', text: 'ex1' },
  { hash: '#ex2', text: 'ex2' },
  { hash: '#ex3', text: 'ex3' },
  { hash: '#ex4', text: 'ex4' },
  { hash: '#ex5', text: 'ex5' },
  { hash: '#ex6', text: 'ex6' },
];

export { render, component, stateData };