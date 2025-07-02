

const ClientLogos = () => {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b099671b0a2b2575de05063d8199a9a2d9f1d385?width=542",
      alt: "CBRE",
      className: "w-64 h-44",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8971db207dd7bc45d2493bbcced63b2c3cb57aa4?width=600",
      alt: "Clarins",
      className: "w-72 h-40",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ff85dae2283e2273a029ed58cf680ce9c88970e?width=450",
      alt: "Deloitte",
      className: "w-56 h-56",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f67ac5863b03dab33e5b49b56a4783f54bee3951?width=602",
      alt: "Jimmy Choo",
      className: "w-72 h-40",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9413251d4421366bec5dac222e8c3111ad5af81c?width=598",
      alt: "John Lewis & Partners",
      className: "w-72 h-40",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=558",
      alt: "TJX",
      className: "w-66 h-44",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden" id="clients">
      <div className="relative">
        {/* Scrolling logos container */}
        <div className="flex animate-scroll space-x-6 w-max">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-8 w-80 h-60"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain ${logo.className}`}
              />
            </div>
          ))}

          {/* Duplicate set for seamless scroll */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-8 w-80 h-60"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain ${logo.className}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline style for scroll animation */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
