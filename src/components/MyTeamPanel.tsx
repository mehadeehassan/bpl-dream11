import { SlidersHorizontal, X } from "lucide-react";
import type { Player } from "../types";

interface MyTeamPanelProps {
  players: Player[];
  onRemove: (id: string) => void;
  maxSize?: number;
}

export default function MyTeamPanel({
  players,
  onRemove,
  maxSize = 11,
}: MyTeamPanelProps) {
  return (
    <section className="mx-auto mt-10 max-w-3xl px-4 pb-16 sm:px-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-navy-950">
          My Team ({players.length}/{maxSize})
        </h2>
        <button className="flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-1.5 text-xs font-semibold text-navy-950 hover:bg-lime-500">
          <SlidersHorizontal size={14} />
          Sort By
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {players.length === 0 ? (
          <p className="p-8 text-center text-sm text-gray-400">
            No players selected yet. Head to Available Players to build your
            squad.
          </p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {players.map((player) => (
              <li
                key={player.id}
                className="flex items-center gap-4 px-5 py-3"
              >
                <img
                  src={player.photoUrl}
                  alt={player.name}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-navy-950">
                    {player.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {player.role} · {player.team}
                  </p>
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  {player.credits} cr
                </span>
                <button
                  onClick={() => onRemove(player.id)}
                  aria-label={`Remove ${player.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        disabled={players.length === 0}
        className="mt-6 w-full rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
      >
        Continue
      </button>
    </section>
  );
}
