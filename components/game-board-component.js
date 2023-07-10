import { app } from "../app.js";

export function gameBoard() {

    const createGameBoard = `   <div class="game-board-header-container">
                                    <div class="game-board-timer">00.00</div>
                                    <div id="click-on-me">Здесь третья страница приложения (нажми)</div>
                                    <button id="restart-game-button">Начать заново</button>
                                </div>
                                <div id="game-board">
                                </div>  `;
    
                                
    app.innerHTML = createGameBoard;
    
    const gameBoard = document.querySelector('#game-board')

    const backOfCardToCopy = ['img/cards/рубашка.svg']
    const backOfCards = Array(36).fill(backOfCardToCopy)
    
    gameBoard.innerHTML = backOfCards.map((backOfCard, index) => {
        return `<div data-set="${index}" class="card-container" id="card-div">
                    <img src="${backOfCard}">
                </div>`
    }).join('')

    const cardsArray = [ 'img/cards/туз бубны.svg', 'img/cards/король бубны.svg', 'img/cards/дама бубны.svg', 'img/cards/валет бубны.svg', 'img/cards/10 бубны.svg', 'img/cards/9 бубны.svg', 'img/cards/8 бубны.svg', 'img/cards/7 бубны.svg', 'img/cards/6 бубны.svg', 
                    'img/cards/туз пики.svg', 'img/cards/король пики.svg', 'img/cards/дама пики.svg', 'img/cards/валет пики.svg', 'img/cards/10 пики.svg', 'img/cards/9 пики.svg', 'img/cards/8 пики.svg', 'img/cards/7 пики.svg', 'img/cards/6 пики.svg',
                    'img/cards/туз черви.svg', 'img/cards/король черви.svg', 'img/cards/дама черви.svg', 'img/cards/валет черви.svg', 'img/cards/10 черви.svg', 'img/cards/9 черви.svg', 'img/cards/8 черви.svg', 'img/cards/7 черви.svg', 'img/cards/6 черви.svg',
                    'img/cards/туз крести.svg', 'img/cards/король крести.svg', 'img/cards/дама крести.svg', 'img/cards/валет крести.svg', 'img/cards/10 крести.svg', 'img/cards/9 крести.svg', 'img/cards/8 крести.svg', 'img/cards/7 крести.svg', 'img/cards/6 крести.svg',
    ];

    const testButton = document.querySelector('#click-on-me');
    testButton.addEventListener('click', function() {
        gameBoard.innerHTML = cardsArray.map((el, index) => {
            return `<div data-set="${index}" class="opened-card-container">
                        <img src="${el}">
                    </div>`
        }).join('');
    })
}




