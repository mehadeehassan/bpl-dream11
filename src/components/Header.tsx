import { Bell, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Group 1.png";

interface HeaderProps {
  activeTab: "players" | "myteam";
  onTabChange: (tab: "players" | "myteam") => void;
}

const navLinks: { label: string; tab: "players" | "myteam" }[] = [
  { label: "Available Players", tab: "players" },
  { label: "My Team", tab: "myteam" },
];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (tab: "players" | "myteam") => {
    onTabChange(tab);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="BPL Dream11 Logo" className="h-14 w-auto" />
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-500 md:flex">
          {navLinks.map((link) => (
            <button key={link.tab} onClick={() => onTabChange(link.tab)} className={`transition-colors hover:text-navy-950 ${activeTab === link.tab ? "text-navy-950" : ""}`}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 sm:flex">
            <Search size={18} />
          </button>
          <button aria-label="Notifications" className="hidden h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 sm:flex">
            <Bell size={18} />
          </button>
          {/* <span className="hidden h-8 w-8 rounded-full bg-gray-200 sm:block" /> */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleTabChange(link.tab)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeTab === link.tab
                    ? "bg-lime-400/20 text-navy-950"
                    : "text-gray-500 hover:bg-gray-100 hover:text-navy-950"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-gray-100 pt-3">
              <button aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <Search size={18} />
              </button>
              <button aria-label="Notifications" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <Bell size={18} />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
