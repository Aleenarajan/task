const NewsInsights = () => {
  const articles = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/778ebb37b36dd6324c223143abb74d5d6bc5b067?width=604",
      author: "Gareth van Zyl",
      title: "Spotlight on Emerging Talent: Amelia Hewitt",
      readTime: "5 minutes read",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/62959c063af49e2db58d57a65f7a0129fff0335b?width=604",
      author: "Tim Forster",
      title: "Insights: exploring sustainable manufacturing vol 3",
      subtitle:
        "insights from RAW workshop, Smile, Plastics, Ocee & Four Designs",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16 bg-sketch-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-black font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-tight max-w-[380px] md:max-w-none">
            NEWS & INSIGHTS
          </h2>

          <p className="text-black font-manrope text-sm sm:text-base md:text-lg leading-relaxed tracking-wide mt-4 max-w-[370px] md:max-w-[500px] lg:max-w-[600px]">
            We know a thing or two about the world of workplace design, fit out, and
            furnishing, and we love to share our thoughts. Find out what they are
            here.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group hover:shadow-lg transition-shadow duration-300 rounded-[19px] overflow-hidden"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="overflow-hidden rounded-[19px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[170px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] object-cover rounded-[19px] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <p className="text-sketch-text-gray font-manrope text-sm md:text-base">
                    {article.author}
                  </p>
                  <h3 className="text-black font-manrope text-lg md:text-xl lg:text-2xl leading-snug tracking-tight">
                    {article.title}
                  </h3>
                  {article.subtitle && (
                    <p className="text-sketch-text-gray font-manrope text-sm md:text-base">
                      {article.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="bg-sketch-red-dark rounded-full px-4 py-2 md:px-6 md:py-3">
                    <span className="text-white font-manrope text-base md:text-lg lg:text-xl leading-none">
                      Article
                    </span>
                  </div>
                  {article.readTime && (
                    <span className="text-sketch-red-dark font-manrope text-sm md:text-base font-bold leading-none">
                      {article.readTime}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16">
          <button 
            className="w-16 h-16 md:w-20 md:h-20 lg:w-[73px] lg:h-[75px] bg-sketch-red rounded-full flex items-center justify-center hover:bg-sketch-red-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sketch-red focus:ring-opacity-50"
            aria-label="Previous article"
          >
            <svg 
              width="31" 
              height="16" 
              viewBox="0 0 31 16" 
              fill="none"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM31 8V7L1 7V8V9L31 9V8Z"
                fill="white"
              />
            </svg>
          </button>
          <button 
            className="w-16 h-16 md:w-20 md:h-20 lg:w-[73px] lg:h-[75px] bg-sketch-red rounded-full flex items-center justify-center hover:bg-sketch-red-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sketch-red focus:ring-opacity-50"
            aria-label="Next article"
          >
            <svg 
              width="31" 
              height="16" 
              viewBox="0 0 31 16" 
              fill="none"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 8V9H30V8V7H0V8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;