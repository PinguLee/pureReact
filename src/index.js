import { render, virtualDom } from './app';
import './style.css';

const container = document.getElementById('root');
container.appendChild(render(virtualDom));