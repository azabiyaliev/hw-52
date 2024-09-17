import './App.css';
import './components/card.tsx';
import Card from './components/card.tsx';
import CardDeck from './lib/CardDeck.ts';
import {useState} from 'react';

const App = () => {

    const [hand, setHand] = useState([]);

    const dealCards = () => {
        const cardDeck = new CardDeck();
        cardDeck.createDeck();
        const fiveCards = cardDeck.getCards(5);
        const pokerCards = fiveCards;
        setHand(pokerCards);
    };

    const pokerDraw = hand.map((card: object[], index: number) => {
        return (
            <Card key={index} rank={card[0].rank} suit={card[0].suit}/>
        );
    });

    return (
        <>
            <div className="border">
                <div className='mainDiv'>
                    <div className='div'>
                        {hand.length > 0 ? <div className="playingCards faceImages">
                            {pokerDraw}
                        </div> : null}
                    </div>
                    <button type="button" onClick={dealCards} className='btn'>Deal cards</button>
                </div>
            </div>

        </>
    );
};

export default App;
