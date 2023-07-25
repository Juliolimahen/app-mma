import React, { useEffect, useState } from 'react';
import FighterList from '../components/FighterList/FighterList';
import { getFighters } from '../api/fighters';
import { Container, Title } from './styles';
import { Fighter } from '../types/Fighter';

const ExploreFighters: React.FC = () => {
  const [fighters, setFighters] = useState([] as Fighter[]);

  useEffect(() => {
    const fetchFighters = async () => {
      const data = await getFighters();
      setFighters(data);
    };
    fetchFighters();
  }, []);

  return (
      <Container>
        <Title>Ranking de lutadores por aproveitamento</Title>
        <FighterList fighters={fighters} />
      </Container>
  );
};

export default ExploreFighters;
