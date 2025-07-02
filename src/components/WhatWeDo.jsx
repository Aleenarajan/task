import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      title: "FURNITURE\nCONSULTANCY",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a772a3ea8d67d4898ea7dad28fe06a3a99431b9?width=1014",
      alt: "Furniture consultancy service",
    },
    {
      title: "OFFICE DESIGN",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/87a8338f8b52731a1909405e52d31ecb1dd5dc49?width=933",
      alt: "Office design service",
    },
    {
      title: "FURNITURE",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/76ff7d4cbc85f5b33b3e6584b1fd05bf645e543f?width=1014",
      alt: "Furniture service",
    },
    {
      title: "OFFICE\nREFURBISHMENT",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3bd16bbac2377df2046938f668461f4ec265c10e?width=1022",
      alt: "Office refurbishment service",
    },
  ];

  return (
    <>
      <style jsx>{`
        .what-we-do-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          background-color: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #000;
          margin-bottom: 20px;
          letter-spacing: 2px;
          font-family: Arial, sans-serif;
        }

        .subtitle {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
          font-family: Arial, sans-serif;
        }

        .services-container {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 20px;
          scroll-behavior: smooth;
        }

        .services-container::-webkit-scrollbar {
          height: 8px;
        }

        .services-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .services-container::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }

        .service-card {
          position: relative;
          min-width: 280px;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card.partial {
          min-width: 140px;
          opacity: 0.7;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .title-overlay {
          position: absolute;
          bottom: 30px;
          left: 30px;
          right: 30px;
        }

        .service-title {
          color: white;
          font-size: 24px;
          font-weight: bold;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: pre-line;
          font-family: Arial, sans-serif;
        }

        .navigation-dots {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 40px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:first-child {
          background-color: #000;
        }

        .dot:last-child {
          background-color: #ccc;
        }

        .dot:hover {
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .what-we-do-section {
            padding: 40px 15px;
          }

          .main-title {
            font-size: 36px;
          }

          .service-card {
            min-width: 250px;
            height: 280px;
          }

          .service-title {
            font-size: 20px;
          }

          .title-overlay {
            bottom: 20px;
            left: 20px;
            right: 20px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 28px;
          }

          .service-card {
            min-width: 220px;
            height: 250px;
          }

          .service-title {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="what-we-do-section">
        {/* Section Header */}
        <div className="section-header">
          <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-black leading-tight mb-8">WHAT WE DO</h1>
          <p className="subtitle">
            How do we transform your workplace to make the most of your people and space?
          </p>
        </div>

        {/* Services Grid - Horizontal Scrolling Layout */}
        <div className="services-container">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.alt}
                className="service-image"
              />
              {/* Dark overlay */}
              <div className="overlay" />
              {/* Title overlay */}
              <div className="title-overlay">
                <h3 className="service-title">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
          {/* Partial fourth card visible */}
          <div className="service-card partial">
            <img
              src={services[3].image}
              alt={services[3].alt}
              className="service-image"
            />
            {/* Dark overlay */}
            <div className="overlay" />
            {/* Title overlay */}
            <div className="title-overlay">
              <h3 className="service-title">
                {services[3].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="navigation-dots">
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;