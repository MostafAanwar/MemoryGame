let cards = ['fa-diamond', 'fa-diamond',
            'fa-paper-plane-o', 'fa-paper-plane-o',
            'fa-anchor', 'fa-anchor',
            'fa-bolt', 'fa-bolt',
            'fa-cube', 'fa-cube',
            'fa-bomb', 'fa-bomb',
            'fa-bicycle', 'fa-bicycle',
            'fa-leaf', 'fa-leaf'
            ];
function genCard(card){
    return `<li class = "card" data-card="${card}"><i class = "fa  ${card}"></i></li>`;
}

function startGame() {
    let deck = document.querySelector('.deck');
    let cardsInHTML = shuffle(cards).map(function (card) {
        return genCard(card);
    });
    moves = 0;
    moveCounter.innerHTML = moves;
    deck.innerHTML = cardsInHTML.join('');

}
let moves = 0;
let allCards = document.querySelectorAll('.card');
let openCards = [];
let moveCounter = document.querySelector('.moves');

startGame();
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
allCards.forEach(function (card) {
    card.addEventListener('click',function () {
        if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){
            openCards.push(card);
            card.classList.add('open','show');
            if(openCards.length === 2) {
                if(openCards[0].dataset.card === openCards[1].dataset.card){
                    openCards[0].classList.add('match');
                    openCards[0].classList.add('open');
                    openCards[0].classList.add('show');
                    openCards[1].classList.add('show');
                    openCards[1].classList.add('match');
                    openCards[1].classList.add('open');
                    openCards = [];
                }
                else{
                    setTimeout(function () {
                        openCards.forEach(function (card) {
                            card.classList.remove('open', 'show');
                        });
                        openCards = [];
                    }, 1000);
                }
                moves+=1;
                moveCounter.innerText = moves;
            }
        }
    });
});
