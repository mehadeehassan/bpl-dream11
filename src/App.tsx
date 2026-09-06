import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MyTeamPanel from "./components/MyTeamPanel";
import PlayerGrid from "./components/PlayerGrid";
import PromoSignup from "./components/PromoSignup";
import { players as initialPlayers } from "./data/players";
import type { Player } from "./types";

export default function App() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [activeTab, setActiveTab] = useState<"players" | "myteam">("players");

  const toggleSelection = (id: string) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p)));
  };

  const selectedPlayers = players.filter((p) => p.selected);

  return (
    <div className="flex min-h-screen flex-col">
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
