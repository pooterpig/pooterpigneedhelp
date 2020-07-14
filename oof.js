//creating class for the card arrays
class CardArrays {
    constructor () {

    }
    get CardArray () {
        const randomCardArray2 = [];
        let cardType = '';
        for (let i = 0; i < 5; i++) {
            if (i === 0) {
                cardType = 'of spades'; 
            } else if (i === 1){
                cardType = `of hearts`;
            } else if (i === 2){
                cardType = `of daimonds`;
            } else if (i === 3){
                cardType = `of clubs`;
            }
            for (let j = 1; j < 14; j++) {
                if (j < 11) {
                    randomCardArray2.push(`${j} ${cardType}`)
                } else if (j === 11) {
                    randomCardArray2.push(`jack ${cardType} `)
                } else if (j === 12) {
                    randomCardArray2.push(`queen ${cardType}`)
                } else if (j === 13) {
                    randomCardArray2.push(`king ${cardType}`)
                }
            }
        }
    return randomCardArray2;
    }
    get cardValueArray () {
        const cardValueArray2 = [];
        for (let i = 0; i < 4; i ++){
            for (let j = 1; j <= 13; j++){
                if (10 <= j) {
                    cardValueArray2.push(10);
                } else {
                    cardValueArray2.push(j);
                }
            }   
        }
        return cardValueArray2;
    }
 }
// Card Arrays
 const CardArrays2 = new CardArrays;
 // Creating class for blackjack methods
class BlackJack {
    constructor(){
        this.testArray = [];
        this.playerCards = this.draw();
        this.botCards = this.draw();
        this.numTimesDrawn = 0;
    }
    // Draw method to draw random card from the random card array
    draw () {
        this.numTimesDrawn++;
        this.testArray.push(CardArrays2.CardArray[Math.floor(Math.random() * 52)])
        return CardArrays2.CardArray[Math.floor(Math.random() * 52)];
    }
    get valueOfCardsDrawn () {
        for (let i = 0; i < 52; i++) {
            if (CardArrays2.CardArray[i] == cardType) {
                return CardArrays2.cardValueArray[i];
            }
        }
    }
}
const blackJackGame = new BlackJack;
console.log(blackJackGame.testArray)
console.log(blackJackGame.numTimesDrawn)
// console.log(blackJackGame.valueOfCardsDrawn)
// // console.log(CardArrays2.CardArray)
// // console.log(CardArrays2.cardValueArray)
// console.log(blackJackGame.playerCards)
// console.log(testArray)