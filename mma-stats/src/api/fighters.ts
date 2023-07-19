import Fighter  from '../types/Fighter';
import mockFightersData from '../mockFightersData.json';

// Função que retorna dados fictícios de lutadores
export const getFighters = async (): Promise<Fighter[]> => {
  // Simula um pequeno atraso para simular o carregamento da API
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockFightersData;
};
