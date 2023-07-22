export interface Fighter {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  weightClass: string;
  gender: 'male' | 'female' | 'other';
  imageURL: string;
  age: number;
  height: string;
  weight: string;
  team: string;
  winsKO: number;
  winsSubmission: number;
  winsDecision: number;
}