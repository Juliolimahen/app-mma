export interface Fighter {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  weightClass: string;
  gender: 'male' | 'female' | 'other';
  imageURL: string;
}
