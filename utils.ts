export function getPairs(count: number) {
    const cards: string[] = [
        'static/cards/туз бубны.svg',
        'static/cards/король бубны.svg',
        'static/cards/дама бубны.svg',
        'static/cards/валет бубны.svg',
        'static/cards/10 бубны.svg',
        'static/cards/9 бубны.svg',
        'static/cards/8 бубны.svg',
        'static/cards/7 бубны.svg',
        'static/cards/6 бубны.svg',
        'static/cards/туз пики.svg',
        'static/cards/король пики.svg',
        'static/cards/дама пики.svg',
        'static/cards/валет пики.svg',
        'static/cards/10 пики.svg',
        'static/cards/9 пики.svg',
        'static/cards/8 пики.svg',
        'static/cards/7 пики.svg',
        'static/cards/6 пики.svg',
        'static/cards/туз черви.svg',
        'static/cards/король черви.svg',
        'static/cards/дама черви.svg',
        'static/cards/валет черви.svg',
        'static/cards/10 черви.svg',
        'static/cards/9 черви.svg',
        'static/cards/8 черви.svg',
        'static/cards/7 черви.svg',
        'static/cards/6 черви.svg',
        'static/cards/туз крести.svg',
        'static/cards/король крести.svg',
        'static/cards/дама крести.svg',
        'static/cards/валет крести.svg',
        'static/cards/10 крести.svg',
        'static/cards/9 крести.svg',
        'static/cards/8 крести.svg',
        'static/cards/7 крести.svg',
        'static/cards/6 крести.svg',
    ];
    let pairs: string[] = [];

    for (let i = 0; i < count; i++) {
        let cardIndex = Math.floor(Math.random() * cards.length); // Случайный индекс карты
        let card = cards[cardIndex];

        pairs.push(card);
        pairs.push(card);

        cards.splice(cardIndex, 1); // Удаляем использованную карту из колоды
    }

    return pairs;
}

export const shuffle = (array: string[]) => {
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


module.exports = { getPairs, shuffle };