import { Check, Plus } from "lucide-react";
import type { Player } from "../types";

interface PlayerCardProps {
  player: Player;
  onToggle: (id: string) => void;
}

export default function PlayerCard({ player, onToggle }: PlayerCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={player.photoUrl}
          alt={player.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display text-sm font-semibold text-navy-950">
              {player.name}
            </p>
            <p className="text-xs text-gray-500">{player.role}</p>
          </div>

          <button
            onClick={() => onToggle(player.id)}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
              player.selected
                ? "border-lime-500 bg-lime-400 text-navy-950"
                : "border-gray-300 text-gray-400 hover:border-navy-950 hover:text-navy-950"
            }`}
            aria-label={player.selected ? "Remove from team" : "Add to team"}
          >
            {player.selected ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3 text-xs">
          <div>
            <p className="text-gray-400">Credits</p>
            <p className="font-semibold text-navy-950">{player.credits}</p>
          </div>
          <div>
            <p className="text-gray-400">Points</p>
            <p className="font-semibold text-navy-950">{player.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
