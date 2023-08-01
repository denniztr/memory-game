// import { app } from '../app';
import { gameBoardComponent } from './game-board-component';
import { getPairs, shuffle } from '../utils';

export function createLevelSelection(app: Element): void {
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

    const levelSelectionWarning = document.createElement('p');
    levelSelectionWarning.classList.add('level-selection-warning');
    levelSelectionBox.append(levelSelectionWarning);

    const levelButtons = document.querySelectorAll<HTMLButtonElement>('.level-button');
    levelButtons.forEach((button) => {
        button.addEventListener('click', function () {
            levelButtons.forEach((btn) => {
                btn.classList.remove('selected');
            });
            this.classList.add('selected');
            
        });
    });

    const levelFormElement = document.getElementById('level-form');

        levelFormElement?.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            const selectedLevel = document.querySelector(
                '.level-button.selected',
            ) as HTMLInputElement | null;

            if (selectedLevel) {
                const levelValue = parseInt(selectedLevel.value, 10);
                let generatedDeck: string[] = [];
                console.log(typeof levelValue)
                if (levelValue == 1) {
                    console.log(`Начало игры с уровнем ${levelValue}`);
                    generatedDeck = shuffle(getPairs(3));
                } else if (levelValue == 2) {
                    console.log(`Начало игры с уровнем ${levelValue}`);
                    generatedDeck = shuffle(getPairs(6));
                } else if (levelValue == 3) {
                    console.log(`Начало игры с уровнем ${levelValue}`);
                    generatedDeck = shuffle(getPairs(9));
                }
                
                gameBoardComponent(generatedDeck, app);
            } else {
                levelSelectionWarning.textContent =
                    'выберите уровень чтобы начать игру';
                setTimeout(function () {
                    levelSelectionWarning.textContent = '';
                }, 3000);
            }
        });
}
