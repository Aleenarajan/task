import React from "react";

const OurWork = () => {
  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-7xl sm:text-8xl lg:text-9xl text-black leading-tight tracking-tight">
            OUR WORK
          </h2>
        </div>

        {/* Project Grid */}
        <div className="space-y-20">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Deloitte */}
            <div>
              <div className="relative mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7fed56201ffd104d9e90fb75abafdb4b172b2f3?width=1314"
                  alt="Deloitte office project"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              <p className="font-aoboshi text-lg text-black mb-2">
                FURNITURE, FURNITURE CONSULTANCY | 16000 SQ FT
              </p>
              <h3 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
                DELOITTE.
              </h3>
            </div>

            {/* The AA */}
            <div className="lg:mt-32">
              <div className="relative mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8311d9501d6093c908f947e41e585fdcdf4fe145?width=1230"
                  alt="The AA office project"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              <p className="font-aoboshi text-lg text-black mb-2">
                FURNITURE, FURNITURE CONSULTANCY | 41000 SQ FT
              </p>
              <h3 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
                THE AA
              </h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Deloitte University */}
            <div>
              <div className="relative mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/335e98b287652e4e8dd67cbe5f8e0a7ed64b8435?width=1352"
                  alt="Deloitte University EMEA project"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              <p className="font-aoboshi text-lg text-black mb-2">
                FURNITURE, FURNITURE CONSULTANCY | 260,000 SQ FT
              </p>
              <h3 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
                DELOITTE
                <br />
                UNIVERSITY
                <br />
                EMEA
              </h3>
            </div>

            {/* Endava */}
            <div className="lg:mt-32">
              <div className="relative mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c694c5ded7ffcc7af630cc81109cde70e4bce8?width=1229"
                  alt="Endava office project"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              <p className="font-aoboshi text-lg text-black mb-2">
                FURNITURE | 11500 SQ FT
              </p>
              <h3 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
                ENDAVA
              </h3>
            </div>
          </div>
        </div>

        {/* View More Work Button */}
        <div className="flex justify-center items-center space-x-4 mt-16">
          <button className="bg-gray-200 hover:bg-gray-300 transition-colors rounded-full px-8 py-4 font-manrope text-xl text-black">
            View more work
          </button>

          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8728 23.9919C18.4206 24.0621 18.9217 23.675 18.9919 23.1272L20.1364 14.2002C20.2066 13.6524 19.8194 13.1514 19.2716 13.0812C18.7238 13.011 18.2228 13.3981 18.1526 13.9459L17.1353 21.881L9.20023 20.8636C8.65243 20.7934 8.15142 21.1806 8.08118 21.7284C8.01095 22.2762 8.3981 22.7772 8.9459 22.8474L17.8728 23.9919ZM1 1L0.208715 1.61145L17.2087 23.6114L18 23L18.7913 22.3886L1.79128 0.388552L1 1Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
