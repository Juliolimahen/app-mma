// src/pages/ExploreFighters.tsx
import React, { useEffect, useState } from 'react';
import FighterList from '../components/FighterList';
import { getFighters } from '../api/fighters';
import { Fighter } from '../types/Fighter';

const ExploreFighters: React.FC = () => {
  const [fighters, setFighters] = useState<Fighter[]>([]);

  useEffect(() => {
    const fetchFighters = async () => {
      const data = await getFighters();
      setFighters(data);
    };
    fetchFighters();
  }, []);

  return (
    <div>
      <h1>Explorar lutadores</h1>
      <FighterList fighters={fighters} />
    </div>
  );
};

export default ExploreFighters;