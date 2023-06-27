const levelSelectionBox = document.querySelector('#level-selection-box')

function createLevelSelection () {

    const levelSelectionTitle = document.createElement('h3');
    levelSelectionTitle.textContent = 'Выбери сложность';
    levelSelectionTitle.classList.add('level-selection-title')
    levelSelectionBox.append(levelSelectionTitle);

    const levelListBox = document.createElement('div');
    levelListBox.classList.add('level-list-box');
    levelSelectionBox.append(levelListBox);
    levelListBox.innerHTML = `  <div class="level-box">1</div>
                                <div class="level-box">2</div>
                                <div class="level-box">3</div>  `;

    const startGameButton = document.createElement('button');
    startGameButton.classList.add('start-game-button');
    startGameButton.innerHTML = 'Старт'
    levelSelectionBox.append(startGameButton);
}
createLevelSelection()

