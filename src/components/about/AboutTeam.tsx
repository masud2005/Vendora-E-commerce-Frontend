"use client";

export default function AboutTeam() {
  const team = [
    {
      name: "Marcus Thorne",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Seller Success",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="mb-12 sm:mb-16">
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
          Leadership Team
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
          The visionaries behind the Vendora marketplace.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col min-w-0"
          >
            {/* Grayscale portrait image */}
            <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-200 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-44 lg:h-60 xl:h-64  object-fill grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            {/* Info */}
            <div className="mt-3">
              <h4 className="text-sm sm:text-base font-extrabold text-gray-900 truncate">
                {member.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-bold mt-0.5 truncate">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
