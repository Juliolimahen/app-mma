import React from 'react';
import FighterCard from './FighterCard';

interface Fighter {
    name: string;
    wins: number;
    losses: number;
    draws: number;
    weightClass: string;
}

interface FighterListProps {
    fighters: Fighter[];
}

const FighterList: React.FC<FighterListProps> = ({ fighters }) => {
    return (
        <div className="fighter-list">
            {fighters.map((fighter) => (
                <FighterCard key={fighter.name} fighter={fighter} />
            ))}
        </div>
    );
};

export default FighterList;
