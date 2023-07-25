import { Fighter } from '../types/Fighter';
import mockFightersData from '../mockFightersData.json';

export const getFighters = async (gender?: 'male' | 'female'): Promise<Fighter[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const validGenders: Set<string> = new Set(['male', 'female', 'other']);
  const isValidGender = (gender: string): gender is Fighter['gender'] =>
    validGenders.has(gender as Fighter['gender']);

  const filteredFighters = mockFightersData.filter((fighter) => {
    if (gender === 'male') {
      return fighter.gender === 'male';
    } else if (gender === 'female') {
      return fighter.gender === 'female';
    } else {
      return isValidGender(fighter.gender);
    }
  });

  const sortedFighters = filteredFighters.sort((a, b) => {
    const winRateA = (a.wins + a.draws / 2) / (a.wins + a.losses + a.draws);
    const winRateB = (b.wins + b.draws / 2) / (b.wins + b.losses + b.draws);

    return winRateB - winRateA;
  });

  return sortedFighters as Fighter[];
};
