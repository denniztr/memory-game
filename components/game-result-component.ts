import { createLevelSelection } from './level-selection-component';

export function gameResultComponent(
    app: Element,
    imgResult: string,
    gameResultText: string,
) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-box');

    const imgResultElement = document.createElement('img');
    imgResultElement.setAttribute('src', imgResult);

    const textResult: HTMLParagraphElement = document.createElement('p');
    textResult.classList.add('result-text');
    textResult.textContent = gameResultText;

    const timeResult = document.createElement('h3');
    timeResult.classList.add('time-result');
    timeResult.textContent = `Затраченное время:`;

    const newGameButton = document.createElement('button');
    newGameButton.classList.add('start-game-button');
    newGameButton.textContent = `Играть заново`;
    newGameButton.addEventListener('click', () => {
        app.innerHTML = ``;
        createLevelSelection(app);
    });

    resultContainer.append(
        imgResultElement,
        textResult,
        timeResult,
        newGameButton,
    );

    app?.append(resultContainer);
}
