// import { app } from '../app';
import { gameResultComponent } from './game-result-component';
import { createLevelSelection } from './level-selection-component';


const appendMinutes: Element = document.createElement('span');
const appendSeconds = document.createElement('span');
const dot = document.createElement('span');
dot.textContent = '.';
appendMinutes.textContent = '00';
appendSeconds.textContent = '00';
const timer = document.createElement('div');
timer.append(appendMinutes, dot, appendSeconds)

let gameTime: NodeJS.Timer;
let stopWatchedResult: string;

export function gameBoardComponent(deck: string[], app: Element): void {
    let flippedCards: HTMLElement[] = [];
    let openedCards: number  = 0;
 
    const gameBoardRender = () => {
        const cardsHtml: string = deck
            .map((card: string, index: number) => {
                return `<div id='cardWrap' class="card-container">
            <img data-set="${index}" class="card default" src="${card}">
            <img data-set="${index}" class="card blank is-flipped" src="static/cards/рубашка.svg">
            </div>`;
            })
            .join('');

        const renderGameBoard: string = `   <div class="game-board-header-container">
                                                <div class="game-board-timer">
                                                    <span class='span-timer min'>min</span>
                                                    <span class='span-timer sek'>sek</span>
                                                    <span class='timer-counter'>
                                                    </span>
                                                    </div>
                                                <button id="restart-game-button">Начать заново</button>
                                            </div>
                                            <div id="game-board">${cardsHtml}</div>  `;
        app.innerHTML = renderGameBoard;
        
            const timerCounter = document.querySelector('.timer-counter')
            timerCounter?.append(timer)

        const gameBoard: Element | null = document.querySelector('#game-board');
        const gameBoardHeader: Element | null = document.querySelector(
            '.game-board-header-container',
        );

        const blankCards = document.querySelectorAll('.blank');
        blankCards.forEach((blankCard) => {
            setTimeout(() => blankCard.classList.remove('is-flipped'), 5000);
        });

        const cardContainers = document.querySelectorAll('.card-container');
        cardContainers.forEach((cardContainer) => {
            cardContainer.addEventListener('click', () => {
                cardContainer.children[1].classList.add('is-flipped');
                const firstChild = cardContainer.children[0] as HTMLElement;
                flippedCards.push(firstChild);

                let card1 = flippedCards[0];
                let card2 = flippedCards[1];

                const victory = 'Вы выиграли!';
                const loss = 'Вы проиграли!';

                const victoryImg = 'static/celebration.svg';
                const loseImg = 'static/dead.svg';

                if (flippedCards.length === 2) {
                    if (
                        card1.getAttribute('src') === card2.getAttribute('src')
                    ) {
                        openedCards++;
                        openedCards++ * 2;
                        flippedCards.splice(0, 2);

                        if (openedCards === deck.length) {
                            gameBoard?.classList.add('blur');
                            gameBoardHeader?.classList.add('blur');
                            clearInterval(gameTime)
                            gameResultComponent(app, victoryImg, victory, stopWatchedResult);
                        }
                    } else {
                        // Результат с проигрышем
                        gameBoard?.classList.add('blur');
                        gameBoardHeader?.classList.add('blur');
                        flippedCards.splice(0, 2);
                        clearInterval(gameTime)
                        
                        gameResultComponent(app, loseImg, loss, stopWatchedResult);
                    }
                }
            });
        });

        const restartButton: Element | null = document.querySelector(
            '#restart-game-button',
        );
        restartButton?.addEventListener('click', () => {
            app.innerHTML = ``;
            createLevelSelection(app);
        });
    };

    setTimeout(() => {
        startTimer(timer)
    }, 5000)

    gameBoardRender();
}


function startTimer(timer: HTMLDivElement): void {
    let minutes: number = 0;
    let seconds: number = 0;

    let interval: NodeJS.Timer = setInterval(() => {
            seconds += 1;
            if (seconds === 60) {
                minutes += 1;
                seconds = 0;
            }

    timer.innerText = `${formatTime(minutes)}.${formatTime(seconds)}`;
    gameTime = interval;
    stopWatchedResult = `${formatTime(minutes)}.${formatTime(seconds)}`
        }, 1000);

        const formatTime = (time: number) => {
            return time < 10 ? '0' + time : time;
        };
        
    console.log('Timer starts');
}

