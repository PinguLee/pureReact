import { render, component, stateData } from './app';
import './style.css';

const container = document.getElementById('root');

let visibleExerciseIndex = -1;

function setVisibility(index) {
  visibleExerciseIndex = index;
  update();
}

function update() {
  const virtualDom = component(stateData, visibleExerciseIndex, setVisibility);
  container.innerHTML = '';
  container.appendChild(render(virtualDom));
}

update();