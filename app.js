import { gameBoard  } from '/components/game-board-component.js'

export const app = document.querySelector('#app');

function createLevelSelection () {

    const levelSelectionBox = document.createElement('div');
    levelSelectionBox.classList.add('level-selection-box');

    const levelSelectionTitle = document.createElement('h3');
    levelSelectionTitle.textContent = 'Выбери сложность';
    levelSelectionTitle.classList.add('level-selection-title');
    levelSelectionBox.append(levelSelectionTitle);

    const levelListBox = document.createElement('form');
    levelListBox.setAttribute('id', 'level-form');
    levelSelectionBox.append(levelListBox);
    levelListBox.innerHTML = `  <div class="level-selection-container">
                                    <button type="button" value="1" class="level-button">1</button>
                                    <button type="button" value="2" class="level-button">2</button>
                                    <button type="button" value="3" class="level-button">3</button>
                                </div>
                                <div class="start-the-game-container">
                                    <button type="submit" class="start-game-button">Старт</button>
                                </div>  `;

    app.append(levelSelectionBox);
    
    const levelSelectionWarning= document.createElement('p');
    levelSelectionWarning.classList.add('level-selection-warning');
    levelSelectionBox.append(levelSelectionWarning);

    const levelButtons = document.querySelectorAll('.level-button');
    levelButtons.forEach(button => {
      button.addEventListener('click', function() {
        levelButtons.forEach(btn => {
          btn.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });

    document.getElementById('level-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedLevel = document.querySelector('.level-button.selected');
        if (selectedLevel) {
            const levelValue = selectedLevel.value;
            console.log(`Начало игры с уровнем ${levelValue}`);
            gameBoard()
        } else {
            levelSelectionWarning.textContent = 'выберите уровень чтобы начать игру';
            setTimeout(function() {
                levelSelectionWarning.textContent = '';
            }, 3000)
        }
    })
}

createLevelSelection()