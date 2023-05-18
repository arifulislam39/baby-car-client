const Gallery = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center mt-10">Gallery</h2>
      <p className="text-center mt-5">
        Give The Gift Of Your Children Everyday
      </p>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/hmXMD2J/img3.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Pmhbqq0/Electric-Car-for-Kids-Tech-Toys-for-Kids-New-Model-Baby-Boss-Car.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              {/* img 4 */}
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/nfQFc6Y/31b8d6079a811d3d60072862e773ecb3.jpg"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/XyzjtQC/images-3.jpg"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/GPvQ6cj/2-hours-Rapid-charge-2-4-G-Bluetooth-kids-ride-on-toy-car-kids-electric-cars-with-jpg-640x640.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/8zVycPv/81-HRk-Ns-VWQL-SX522.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
