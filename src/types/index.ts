export type PlayerRole = "Batsman" | "Bowler" | "All-Rounder" | "Wicket-Keeper";

export interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  team: string;
  photoUrl: string;
  credits: number;
  points: number;
  selected: boolean;
}
