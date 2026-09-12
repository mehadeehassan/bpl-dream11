import { SlidersHorizontal } from "lucide-react";
import type { Player } from "../types";
import PlayerCard from "./PlayerCard";

interface PlayerGridProps {
  players: Player[];
  onToggle: (id: string) => void;
}

export default function PlayerGrid({ players, onToggle }: PlayerGridProps) {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-lg font-semibold text-navy-950">
          Available Players
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-1.5 text-xs font-semibold text-navy-950 hover:bg-lime-500">
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <select
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 focus:outline-none"
            defaultValue="points"
          >
            <option value="points">Sort by: Points</option>
            <option value="credits">Sort by: Credits</option>
            <option value="name">Sort by: Name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}
