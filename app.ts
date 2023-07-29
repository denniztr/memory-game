import { createLevelSelection } from './components/level-selection-component';
import './style.css';

export const app: Element | null = document.querySelector('#app');

function renderGame() {
    if (app) {createLevelSelection(app)}
}

renderGame();
