const quickLinks = ["Available Players", "My Team", "Fixtures", "Leaderboard"];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-24 pb-8 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-center">
          <img
            src="/src/assets/Group 1.png"
            alt="BPL Dream11 Logo"
            className="h-14 w-auto"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">About</h4>
            <p className="text-sm text-gray-400">
              BPL Dream11 lets fans build fantasy squads from real Bangladesh
              Premier League players and compete every match day.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-lime-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Newsletter
            </h4>
            <form className="flex overflow-hidden rounded-full border border-white/10">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-linear-to-r from-pink-500 to-orange-400 px-4 text-xs font-semibold text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} BPL Dream11. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
