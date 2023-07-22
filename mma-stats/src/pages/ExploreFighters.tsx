import React, { useEffect, useState } from 'react';
import FighterList from '../components/FighterList';
import { getFighters } from '../api/fighters';
import { Fighter } from '../types/Fighter';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

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
