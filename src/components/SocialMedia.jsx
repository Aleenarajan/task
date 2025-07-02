import React from "react";

const SocialMedia = () => {
  const socialImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/01adf7337cbe15719489d8b3bbb322cffa4120b3?placeholderIfAbsent=true",
      alt: "Social media post 1",
      className: "absolute top-6 sm:top-8 md:top-10 lg:top-12 left-2 sm:left-4 md:left-8 lg:left-12 w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40 lg:w-44 lg:h-56",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/f8f29b04a529b2eb0e27772a4825af08884ede13?placeholderIfAbsent=true",
      alt: "Social media post 2",
      className: "absolute top-2 sm:top-3 md:top-4 lg:top-4 right-2 sm:right-4 md:right-8 lg:right-12 w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-44 lg:w-52 lg:h-64",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/5cc8b46bb9b78705d13e4977309dd6e8768ead63?placeholderIfAbsent=true",
      alt: "Social media post 3",
      className: "absolute top-36 sm:top-40 md:top-44 lg:top-48 right-1 sm:right-2 md:right-3 lg:right-4 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/4b810b472dc7c51c16be60454eed4e15bcf9afe5?placeholderIfAbsent=true",
      alt: "Social media post 4",
      className: "absolute bottom-16 sm:bottom-18 md:bottom-22 lg:bottom-28 left-2 sm:left-4 md:left-6 lg:left-8 w-28 h-20 sm:w-36 sm:h-24 md:w-48 md:h-32 lg:w-72 lg:h-48",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/d2a2a50201dace11f6ca95256c226fe0985fa23a?placeholderIfAbsent=true",
      alt: "Social media post 5",
      className: "absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 right-8 sm:right-12 md:right-16 lg:right-20 w-28 h-20 sm:w-32 sm:h-24 md:w-44 md:h-32 lg:w-64 lg:h-44",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/8149e4b1c3c83043aa76a5b350ee7fbd5afed9d2?placeholderIfAbsent=true",
      alt: "Social media post 6",
      className: "absolute top-60 sm:top-64 md:top-72 lg:top-80 left-1/5 sm:left-1/4 md:left-1/3 lg:left-1/3 w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40 lg:w-48 lg:h-60",
    },
  ];

  return (
    <section className="relative px-1 sm:px-2 md:px-4 lg:px-4 py-4 sm:py-6 md:py-8 lg:py-8 bg-neutral-200 min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {socialImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${image.className} object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px]`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 leading-tight">
          <span 
            className="block font-anton text-black uppercase"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.85',
              letterSpacing: '-2px',
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            }}
          >
            FOLLOW US
          </span>
          <span 
            className="block font-anton text-black uppercase"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.85',
              letterSpacing: '-2px',
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            }}
          >
            ON SOCIAL
          </span>
          <span 
            className="block font-anton text-black uppercase"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.85',
              letterSpacing: '-2px',
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            }}
          >
            MEDIA
          </span>
        </h2>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-col sm:flex-col md:flex-row lg:flex-row">
          {/* LinkedIn */}
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm font-bold">in</span>
            </div>
            <span className="font-song text-xl text-black">
              /sketchstudiosuk
            </span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 border-[1.5px] border-white rounded-sm relative">
                <div className="w-0.5 h-0.5 bg-white rounded-full absolute -top-0.5 -right-0.5"></div>
              </div>
            </div>
            <span className="font-song text-xl text-black">
              @sketchstudiosuk
            </span>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 bg-sky-400 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <span className="font-song text-xl text-black">
              @sketchstudiosuk
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;