const Services = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e996d8b24c8068841dd5250ca8353b910d43f8d3?width=747",
      category: "FURNITURE, FURNITURE CONSULTANCY | 16000 SQ FT",
      title: "DELOITTE.",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5f14062c5f82b33437d4cf8603d8012577202195?width=743",
      category: "FURNITURE, FURNITURE CONSULTANCY | 260,000 SQ FT",
      title: "DELOITTE UNIVERSITY EMEA",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a2dfaa03ac9de89845ff551069239df7967e9d98?width=741",
      category: "FURNITURE | 11500 SQ FT",
      title: "ENDAVA",
    },
  ];

  return (
    <section className="px-4 sm:px-7 py-8 bg-sketch-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black font-anton text-[28px] sm:text-[32px] lg:text-[40px] leading-[69px] tracking-[-1.28px] font-normal mb-8 text-center">
          OUR WORK
        </h2>

        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${index === 1 ? "lg:mt-20" : ""}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover mb-4 ${
                  index === 0
                    ? "h-[350px] sm:h-[498px] lg:h-[600px] rounded-[41px]"
                    : index === 1
                      ? "h-[350px] sm:h-[495px] lg:h-[600px] rounded-[54px]"
                      : "h-[350px] sm:h-[494px] lg:h-[600px] rounded-[49px]"
                }`}
              />

              <div className="px-1">
                <p className="text-black font-aoboshi text-[12px] sm:text-[13px] leading-[22px] mb-2">
                  {project.category}
                </p>
                <h3
                  className={`text-black font-anton font-normal ${
                    index === 1
                      ? "text-[24px] sm:text-[32px] lg:text-[40px] leading-[28px] sm:leading-[33px] lg:leading-[44px] tracking-[-1.6px]"
                      : "text-[24px] sm:text-[32px] lg:text-[40px] leading-[48px] sm:leading-[69px] lg:leading-[80px] tracking-[-0.96px]"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="bg-sketch-gray rounded-full px-6 sm:px-8 py-3 sm:py-4">
            <span className="text-black font-manrope text-lg sm:text-xl">
              View more work
            </span>
          </div>
          <div className="w-[60px] sm:w-[67px] h-12 sm:h-16 bg-black rounded-full flex items-center justify-center">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className="transform rotate-45"
            >
              <path
                d="M10 11C10.5523 11 11 10.5523 11 10L11 1C11 0.447715 10.5523 2.8711e-07 10 2.8711e-07C9.44772 2.8711e-07 9 0.447715 9 1L9 9L1 9C0.447715 9 2.8711e-07 9.44772 2.8711e-07 10C2.8711e-07 10.5523 0.447715 11 1 11L10 11ZM1 1L0.292893 1.70711L9.29289 10.7071L10 10L10.7071 9.29289L1.70711 0.292893L1 1Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;