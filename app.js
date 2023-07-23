import { createLevelSelection } from './components/level-selection-component.js';
import './style.css';

export const app = document.querySelector('#app');

function renderGame() {
    createLevelSelection();
}

renderGame();
