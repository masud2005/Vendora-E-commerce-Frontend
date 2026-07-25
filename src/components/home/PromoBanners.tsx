import Link from 'next/link';

export default function PromoBanners() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          {/* Banner 1 - Summer Tech Fest */}
          <div className="bg-[#EAF1F8] rounded-lg flex flex-col-reverse sm:flex-row overflow-hidden group sm:h-56 lg:h-64 xl:h-56">
            <div className="p-4 md:p-6 lg:p-10 flex flex-col justify-between flex-1 h-full">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#185FA5] mb-2 sm:mb-3">Summer Tech Fest</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-xs">Get up to 40% OFF on all smart devices</p>
              </div>
              <div className="pt-4 lg:pt-6 mt-auto">
                <Link
                  href="/category/tech"
                  className="inline-block px-5 py-2 lg:px-6 lg:py-2.5 bg-[#185FA5] text-white font-semibold rounded hover:bg-[#134D86] transition-colors shadow-sm text-sm sm:text-base"
                >
                  Shop Tech
                </Link>
              </div>
            </div>
            <div className="w-full h-40 sm:h-full sm:w-2/5 relative overflow-hidden bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
                alt="Tech background"
                className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-r from-[#EAF1F8] via-transparent to-transparent z-10" />
            </div>
          </div>

          {/* Banner 2 - Fashion Week */}
          <div className="bg-[#FAF3EA] rounded-lg flex flex-col-reverse sm:flex-row overflow-hidden group sm:h-56 lg:h-64 xl:h-56">
            <div className="p-4 md:p-6 lg:p-10 flex flex-col justify-between flex-1 h-full">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#D97706] mb-2 sm:mb-3">Fashion Week</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-xs">Extra 15% discount for first orders</p>
              </div>
              <div className="pt-4 lg:pt-6 mt-auto">
                <Link
                  href="/category/fashion"
                  className="inline-block px-5 py-2 lg:px-6 lg:py-2.5 bg-[#F59E0B] text-white font-semibold rounded hover:bg-[#D97706] transition-colors shadow-sm text-sm sm:text-base"
                >
                  Explore Styles
                </Link>
              </div>
            </div>
            <div className="w-full h-40 sm:h-full sm:w-2/5 relative overflow-hidden bg-[#FCD34D]">
              <img
                src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600"
                alt="Fashion model"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-r from-[#FAF3EA] via-transparent to-transparent z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
