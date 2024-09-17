import * as React from 'react';
interface CardProps {
    rank:string,
    suit: 'diams' | 'hearts' | 'clubs' | 'spades'
}

const suits: {diams: string, hearts: string, clubs: string, spades: string} = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};

const Card: React.FC<CardProps> = ({rank, suit}) => {

    const symbols = suits[suit];

    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{symbols}</span>
            </span>
    );
};



export default Card;