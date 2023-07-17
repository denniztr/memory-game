import { createLevelSelection } from "./components/level-selection-component.js";

export const app = document.querySelector('#app');

function renderGame () {
    createLevelSelection()
}

renderGame()