import './Card.ts';
import Card from './Card.ts';

class CardDeck {
    private rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private suit: string[] = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[];

    constructor() {
        this.deck = [];
    }

    createDeck(): Card {
        for (let i = 0; i < this.rank.length; i++) {
            for (let j = 0; j < this.suit.length; j++) {
                this.deck.push(new Card(this.rank[i], this.suit[j]));
            }
        }
    };

    getCard() {
        const randomCards = Math.floor(Math.random() * this.deck.length);
        const oneCard = this.deck.splice(randomCards, 1);
        return oneCard;
    };

    getCards(howMany: number): Card[] {
        const cards = [this.getCard(), this.getCard(),this.getCard(), this.getCard(), this.getCard()];
        return cards;
    };
}

export default CardDeck;