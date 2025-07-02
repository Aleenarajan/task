const About = () => {
  return (
    <section className="px-4 sm:px-7 py-8 bg-sketch-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black font-anton text-[28px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[38px] lg:leading-[48px] font-normal mb-6 max-w-[267px] lg:max-w-[400px]">
          WHERE EXCEPTIONAL WORKSPACES BEGIN.
        </h2>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/811a6b1c2825c490fa3a9cd21ca075c430dd5f4f?width=763"
          alt="Sketch Studios workspace design"
          className="w-full h-[240px] sm:h-[286px] lg:h-[400px] object-cover rounded-[45px] mb-8"
        />

        <div className="text-black font-century text-base leading-5 space-y-4">
          <p className="font-castoro text-xl font-normal">
            We spend one-third of our life at work. Spend it in a place where
            you can achieve greatness.
          </p>

          <p>
            We're masters of crafting workplace environments as comfortable and
            stimulating as anywhere you look forward to spending time. Our open,
            positive, and proactive approach helps us find ways to align your
            work environment with the culture and attitude you and your team
            aspire to and want to project. If your workplace feels uninspired,
            we'll apply fresh eyes, creative minds, and skilled hands to provide
            you with ideas you didn't think possible. It really boils down to
            our unique way of thinking. Our creative approach to
            problem-solving, collaborative capabilities with international
            expert networks, and above all, our priority: putting you on the
            path to extraordinary.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="flex items-center gap-4">
            <div className="bg-sketch-gray rounded-full px-6 py-3">
              <span className="text-black font-manrope text-base">
                What we do
              </span>
            </div>
            <div className="w-12 h-10 bg-black rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                className="transform rotate-[54deg]"
              >
                <path
                  d="M10.1656 13.237C10.7224 13.334 11.2488 12.9822 11.3414 12.4512L12.8502 3.79733C12.9428 3.26628 12.5664 2.75709 12.0096 2.66001C11.4528 2.56293 10.9264 2.91473 10.8338 3.44578L9.49265 11.1381L1.42716 9.7319C0.870358 9.63482 0.343922 9.98662 0.251335 10.5177C0.158748 11.0487 0.535072 11.5579 1.09188 11.655L10.1656 13.237ZM2 1L1.16856 1.55562L9.50176 12.831L10.3332 12.2754L11.1646 11.7198L2.83144 0.44438L2 1Z"
                  fill="#FFFCFC"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="bg-sketch-gray rounded-full px-6 py-3">
            <span className="text-black font-manrope text-base">
              Who we are
            </span>
          </div>
          <div className="w-12 h-10 bg-sketch-gray rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
