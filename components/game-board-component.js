import { app } from '../app.js';

export function gameBoardComponent(deck) {
  let flippedCards = [];

  const gameBoardRender = () => {
    const cardsHtml = deck
      .map((card, index) => {
        return `<div id='cardWrap' class="card-container">
            <img data-set="${index}" class="card default" src="${card}">
            <img data-set="${index}" class="card blank isFlipped" src="img/cards/рубашка.svg">
            </div>`;
      })
      .join('');

    const renderGameBoard = `   <div class="game-board-header-container">
                                        <div class="game-board-timer">00.00</div>
                                        <button id="restart-game-button">Начать заново</button>
                                    </div>
                                    <div id="game-board">${cardsHtml}</div>  `;
    app.innerHTML = renderGameBoard;

    const blankCards = document.querySelectorAll('.blank');
    blankCards.forEach((blankCard) => {
      setTimeout(() => blankCard.classList.remove('isFlipped'), 3000);
    });

    const cardContainers = document.querySelectorAll('.card-container');
    cardContainers.forEach((cardContainer) => {
      cardContainer.addEventListener('click', () => {
        cardContainer.children[1].classList.add('isFlipped');
        flippedCards.push(cardContainer.children[0]);
        console.log(flippedCards);

        let card1 = flippedCards[0];
        let card2 = flippedCards[1];

        if (flippedCards.length === 2) {
          // cardContainer.children[1].classList.add('isFlipped')
            
          if (card1.getAttribute('src') === card2.getAttribute('src')) {
            // card1.classList.add('matched');
            // card2.classList.add('matched');
            // cardContainer.children[1].classList.add('isFlipped')
            console.log('Угадали пару');
            flippedCards.splice(0, 2);
            console.log(flippedCards);
          } else {
            // card1.classList.remove('matched')
            // card2.classList.remove('matched')
            // setTimeout(() => {
            //     card1.classList.remove('hidden')
            //     card2.classList.remove('hidden')
            // }, 500);
            alert('Проиграл');
            flippedCards.splice(0, 2);
          }
        }
      });
    });
  };

  gameBoardRender();
}
