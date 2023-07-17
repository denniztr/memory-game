export function getPairs(count) {
    const cards = [
        'img/cards/туз бубны.svg',
        'img/cards/король бубны.svg',
        'img/cards/дама бубны.svg',
        'img/cards/валет бубны.svg',
        'img/cards/10 бубны.svg',
        'img/cards/9 бубны.svg',
        'img/cards/8 бубны.svg',
        'img/cards/7 бубны.svg',
        'img/cards/6 бубны.svg',
        'img/cards/туз пики.svg',
        'img/cards/король пики.svg',
        'img/cards/дама пики.svg',
        'img/cards/валет пики.svg',
        'img/cards/10 пики.svg',
        'img/cards/9 пики.svg',
        'img/cards/8 пики.svg',
        'img/cards/7 пики.svg',
        'img/cards/6 пики.svg',
        'img/cards/туз черви.svg',
        'img/cards/король черви.svg',
        'img/cards/дама черви.svg',
        'img/cards/валет черви.svg',
        'img/cards/10 черви.svg',
        'img/cards/9 черви.svg',
        'img/cards/8 черви.svg',
        'img/cards/7 черви.svg',
        'img/cards/6 черви.svg',
        'img/cards/туз крести.svg',
        'img/cards/король крести.svg',
        'img/cards/дама крести.svg',
        'img/cards/валет крести.svg',
        'img/cards/10 крести.svg',
        'img/cards/9 крести.svg',
        'img/cards/8 крести.svg',
        'img/cards/7 крести.svg',
        'img/cards/6 крести.svg',
    ];
    let pairs = [];

    for (let i = 0; i < count; i++) {
        let cardIndex = Math.floor(Math.random() * cards.length); // Случайный индекс карты
        let card = cards[cardIndex];

        pairs.push(card);
        pairs.push(card);

        cards.splice(cardIndex, 1); // Удаляем использованную карту из колоды
    }

    return pairs;
}

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};
