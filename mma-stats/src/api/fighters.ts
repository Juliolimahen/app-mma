import { Fighter } from '../types/Fighter';
import mockFightersData from '../mockFightersData.json';

// Função que retorna dados fictícios de lutadores
export const getFighters = async (): Promise<Fighter[]> => {
  // Simula um pequeno atraso para simular o carregamento da API
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Verifica se os valores do campo gender são válidos
  const validGenders: Set<string> = new Set(['male', 'female', 'other']);
  const isValidGender = (gender: string): gender is Fighter['gender'] =>
    validGenders.has(gender as Fighter['gender']);

  // Filtra os lutadores com gender válido e mapeia para o tipo Fighter
  const filteredFighters = mockFightersData.filter((fighter) =>
    isValidGender(fighter.gender)
  );

  return filteredFighters as Fighter[];
};
