// src/api/fighters.ts
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

  // Ordena os lutadores pelo melhor aproveitamento (vitórias + empates / 2) / (vitórias + derrotas + empates) em ordem decrescente
  const sortedFighters = filteredFighters.sort((a, b) => {
    const winRateA = (a.wins + a.draws / 2) / (a.wins + a.losses + a.draws);
    const winRateB = (b.wins + b.draws / 2) / (b.wins + b.losses + b.draws);

    return winRateB - winRateA;
  });

  return sortedFighters as Fighter[];
};
