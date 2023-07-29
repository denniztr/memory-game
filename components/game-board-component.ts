// import { app } from '../app';
import { gameResultComponent } from './game-result-component';
import { createLevelSelection } from './level-selection-component';

export function gameBoardComponent(deck: string[], app: Element): void {
    let flippedCards: HTMLElement[] = [];
    let openedCards: number = 0;
    // let min: number = 0;
    // let sek: number = 0;

    const appendMinutes = document.createElement('span');
    const appendSeconds = document.createElement('span');
    appendMinutes.textContent = '00';
    appendSeconds.textContent = '00';

    const gameBoardRender = () => {
        const cardsHtml: string = deck
            .map((card: string, index: number) => {
                return `<div id='cardWrap' class="card-container">
            <img data-set="${index}" class="card default" src="${card}">
            <img data-set="${index}" class="card blank isFlipped" src="static/cards/рубашка.svg">
            </div>`;
            })
            .join('');

        const renderGameBoard: string = `   <div class="game-board-header-container">
                                                <div class="game-board-timer">
                                                    <span class='span-timer min'>min</span>
                                                    <span class='span-timer sek'>sek</span>
                                                    <span class='timer-counter'>
                                                        <span class='timer-counter-min'></span>
                                                        <span class='timer-counter-sek'></span>
                                                    </span>
                                                    </div>
                                                <button id="restart-game-button">Начать заново</button>
                                            </div>
                                            <div id="game-board">${cardsHtml}</div>  `;
        app.innerHTML = renderGameBoard;

        

        const gameBoard: Element | null = document.querySelector('#game-board');
        const gameBoardHeader: Element | null = document.querySelector(
            '.game-board-header-container',
        );

        const blankCards = document.querySelectorAll('.blank');
        blankCards.forEach((blankCard) => {
            setTimeout(() => blankCard.classList.remove('isFlipped'), 5000);
        });

        const cardContainers = document.querySelectorAll('.card-container');
        cardContainers.forEach((cardContainer) => {
            cardContainer.addEventListener('click', () => {
                cardContainer.children[1].classList.add('isFlipped');
                const firstChild = cardContainer.children[0] as HTMLElement;
                flippedCards.push(firstChild);

                let card1 = flippedCards[0];
                let card2 = flippedCards[1];

                const victory = 'Вы выиграли!';
                const loss = 'Вы проиграли!';

                const victoryImg = 'static/celebration.svg';
                const loseImg = 'static/dead.svg';

                // let time = setTimeout(() => {
                //     startTimer()
                // }, 5000)
                // console.log(time)
                if (flippedCards.length === 2) {
                    if (
                        card1.getAttribute('src') === card2.getAttribute('src')
                    ) {
                        openedCards++;
                        openedCards++ * 2;
                        flippedCards.splice(0, 2);

                        if (openedCards === deck.length) {
                            gameResultComponent(app, victoryImg, victory);
                        }
                    } else {
                        // Результат с проигрышем
                        gameBoard?.classList.add('blur');
                        gameBoardHeader?.classList.add('blur');
                        flippedCards.splice(0, 2);
                        gameResultComponent(app, loseImg, loss);
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
        startTimer()
    }, 5000);

    gameBoardRender();
}


function startTimer(): void {
    let minutes: number = 0;
    let seconds: number = 0;

    setInterval(() => {
            seconds += 1;
            if (seconds === 60) {
                minutes += 1;
                seconds = 0;
            }
        
        return `${formatTime(minutes)}.${formatTime(seconds)}`;
            
        }, 1000);

        const formatTime = (time: number) => {
            return time < 10 ? '0' + time : time;
        };
    console.log('Timer starts');
}

