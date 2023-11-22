import { render, virtualDom } from './app';

const container = document.getElementById('root');
container.appendChild(render(virtualDom));