import React from 'react';

interface Fighter {
    name: string;
    wins: number;
    losses: number;
    draws: number;
    weightClass: string;
}

interface FighterCardProps {
    fighter: Fighter;
}

const FighterCard: React.FC<FighterCardProps> = ({ fighter }) => {
    return (
        <div className="fighter-card">
            <h2>{fighter.name}</h2>
            <p>Wins: {fighter.wins}</p>
            <p>Losses: {fighter.losses}</p>
            <p>Draws: {fighter.draws}</p>
            <p>Weight Class: {fighter.weightClass}</p>
        </div>
    );
};

export default FighterCard;
