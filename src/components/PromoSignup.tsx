export default function PromoSignup() {
  return (
    <div className="relative z-10 -mb-23 mx-auto max-w-6xl w-full px-4 sm:px-6">
      <div className="promo-glow rounded-2xl border border-gray-100 bg-[#8f9ebd] px-6 py-8 text-center shadow-xl sm:px-12">
        <h3 className="font-display text-2xl font-bold text-navy-950 sm:text-xl">Subscribe for Your Team News</h3>
        <p className="mt-4 text-sm text-gray-500">Match reminders, squad changes and Dream11 tips straight to your inbox.</p>

        <form className="mx-auto mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:border-red-300 focus:outline-none" />
          <button type="submit" className="rounded-full bg-linear-to-r from-pink-500 to-orange-400 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
