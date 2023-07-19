import React, { useEffect, useState } from 'react';
import FighterList from './FighterList';
import { Fighter } from '../api/fighters'; // A API será criada posteriormente

const ExploreFighters: React.FC = () => {
    const [fighters, setFighters] = useState<Fighter[]>([]);

    useEffect(() => {
        const mockApiCall = async () => {
            const response = await fetch('/api/fighters');
            const data = await response.json();
            setFighters(data);
        };

        mockApiCall();
    }, []);

    return (
        <div>
            <h1>Explore Fighters</h1>
            <FighterList fighters={fighters} />
        </div>
    );
};

export default ExploreFighters;
