const Hero = () => {
  return (
    <section className="px-4 sm:px-7 py-4 bg-sketch-bg">
      <div className="relative max-w-6xl mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c92a9483b4d59fda426c9887238976fbbbd6d3d?width=762"
          alt="Modern workplace interior"
          className="w-full h-[400px] sm:h-[568px] lg:h-[680px] object-cover rounded-[35px] shadow-[inset_0px_4px_5px_296px_rgba(0,0,0,0.25)]"
        />
        <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 max-w-[250px] sm:max-w-[282px] lg:max-w-[400px]">
          <h2 className="text-white font-anton text-[24px] sm:text-[32px] lg:text-[48px] leading-[32px] sm:leading-[42px] lg:leading-[58px] tracking-[-1.92px] font-normal">
            THE EXTRA ORDINARY IN YOUR WORKPLACE.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
