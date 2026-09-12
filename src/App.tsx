import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MyTeamPanel from "./components/MyTeamPanel";
import PlayerGrid from "./components/PlayerGrid";
import PromoSignup from "./components/PromoSignup";
import { players as initialPlayers } from "./data/players";
import type { Player } from "./types";

const MAX_TEAM_SIZE = 11;

export default function App() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [activeTab, setActiveTab] = useState<"players" | "myteam">("players");

  const toggleSelection = (id: string) => {
    const target = players.find((p) => p.id === id);
    if (!target) return;

    const selectedCount = players.filter((p) => p.selected).length;

    if (!target.selected && selectedCount >= MAX_TEAM_SIZE) {
      toast.error(`Your team is full (${MAX_TEAM_SIZE}/${MAX_TEAM_SIZE}).`);
      return;
    }

    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p)));

    if (target.selected) {
      toast(`${target.name} removed from your team`, { icon: "➖" });
    } else {
      toast.success(`${target.name} added to your team`);
    }
  };

  const selectedPlayers = players.filter((p) => p.selected);

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <HeroBanner />

        {activeTab === "players" ? <PlayerGrid players={players} onToggle={toggleSelection} /> : <MyTeamPanel players={selectedPlayers} onRemove={toggleSelection} />}
      </main>
      <PromoSignup />
      <Footer />
    </div>
  );
}
