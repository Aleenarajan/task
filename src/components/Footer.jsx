

export const Footer = () => {
  return (
    <div className="py-32 pr-10 w-full bg-black max-md:py-24 max-md:pr-5 max-md:max-w-full max-sm:py-16 max-sm:pr-4">
      <div className="mr-14 ml-12 max-md:mr-2.5 max-md:max-w-full max-sm:mr-4 max-sm:ml-4">
        <div className="flex gap-5 max-md:flex-col max-sm:gap-8">
          <div className="w-3/12 max-md:ml-0 max-md:w-full">
            <div className="text-3xl text-white max-md:mt-10 max-sm:text-xl max-xs:text-lg">
              <span style={{ fontFamily: "Song Myung, -apple-system, Roboto, Helvetica, sans-serif" }}>
                info@sketchstudios.co.uk
              </span>
              <br />
              <span style={{ fontFamily: "Song Myung, -apple-system, Roboto, Helvetica, sans-serif" }}>
                +44 (0)20 7089 6001
              </span>
              <br />
              <br />
              <span style={{ fontFamily: "Song Myung, -apple-system, Roboto, Helvetica, sans-serif", fontSize: "24px" }} className="max-sm:text-lg max-xs:text-base">
                Website MadeByShape
              </span>
            </div>
          </div>
          <div className="ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between items-start text-2xl text-white max-md:mt-10 max-md:max-w-full max-sm:flex-col max-sm:gap-8 max-sm:text-xl max-xs:text-lg">
              <div className="self-stretch w-[263px] max-sm:w-full">
                <span style={{ fontSize: "32px" }} className="max-sm:text-2xl max-xs:text-xl">What we do</span>
                <br />
                <br />
                Furniture Consultancy
                <br />
                Office Design
                <br />
                Furniture
                <br />
                Office Refurbishment
                <br />
                Moves & Relocations
              </div>
              <div className="max-sm:w-full">
                <span style={{ fontSize: "32px" }} className="max-sm:text-2xl max-xs:text-xl">Learn</span>
                <br />
                <br />
                Our work
                <br />
                About Us
                <br />
                Our Team
                <br />
                B Corp
                <br />
                Accreditations
              </div>
              <div className="max-sm:w-full">
                <span style={{ fontSize: "32px" }} className="max-sm:text-2xl max-xs:text-xl">Explore</span>
                <br />
                <br />
                Contact
                <br />
                Careers
                <br />
                Blog
              </div>
              <div className="max-sm:w-full">
                <span style={{ fontSize: "32px" }} className="max-sm:text-2xl max-xs:text-xl">Boring stuff</span>
                <br />
                <br />
                Privacy Policy
                <br />
                Cookie Policy
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/981591b32546e711c33d91ac3401e8afafdf71ad?placeholderIfAbsent=true"
                className="object-contain shrink-0 mt-1 w-24 aspect-[0.6] max-sm:w-20 max-sm:self-center max-sm:mt-4"
                alt="B Corporation Certified"
              />
            </div>
          </div>
        </div>
      </div>
      <div 
        className="mt-64 mb-0 font-bold text-stone-900 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full overflow-hidden text-center max-sm:mt-16" 
        style={{ 
          fontFamily: "Song Myung, -apple-system, Roboto, Helvetica, sans-serif", 
          fontSize: "clamp(3rem, 25vw, 27.75rem)", 
          lineHeight: "0.8" 
        }}
      >
        Sketch
      </div>
    </div>
  );
};

export default Footer;
       