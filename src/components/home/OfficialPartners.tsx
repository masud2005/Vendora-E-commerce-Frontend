export default function OfficialPartners() {
  const partners = [
    { name: 'SAMSUNG', className: 'text-2xl font-black tracking-tighter' },
    { name: 'Logitech', className: 'text-xl italic font-serif' },
    { name: 'SONY', className: 'text-2xl font-black tracking-widest' },
    { name: 'Apple', className: 'text-lg font-medium' },
    { name: 'Xiaomi', className: 'text-2xl font-bold tracking-tight capitalize' },
    { name: 'NIKE', className: 'text-2xl font-serif font-bold' },
  ];

  return (
    <section className="bg-white border-b border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center py-8 md:py-10 gap-6">
          <span className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap z-10 bg-white md:pr-4">
            Official Partners
          </span>

          <div className="flex-1 w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <div className="flex w-max animate-marquee hover:paused items-center gap-16 md:gap-24 text-gray-400">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-16 md:gap-24">
                  {partners.map((partner, index) => (
                    <span
                      key={`${groupIndex}-${index}`}
                      className={`${partner.className} text-gray-500 hover:text-gray-800 transition-colors cursor-pointer`}
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
