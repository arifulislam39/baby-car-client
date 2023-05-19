import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-20">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={img1}
          className="w-full rounded-xl"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />

        <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Best Kids Store.</h2>
            <h3 className="text-4xl font-bold">
              Electric Powered Kids Ride on Car Toy - yellow
            </h3>
            <p>
              2.4G remote control function; slow start and stop; forward and
              reverse; scissors door; four-wheel shock absorber; pneumatic rod;
              spoke wheel; 3-point seat belt; front and rear lights; horn; start
              sound.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-secondary btn-outline btn-circle mr-10">
            ❮
          </a>
          <a href="#slide2" className="btn btn-secondary btn-outline btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />

        <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Best Kids Store.</h2>
            <h3 className="text-4xl font-bold">
              Racing Baby Big Electric Car Jeep
            </h3>
            <p>
              The Ride on Jeep can be controlled by dual control modes. Parent
              can help your children control this jeep with 2.4G wireless remote
              controller
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-secondary btn-outline btn-circle mr-10">
            ❮
          </a>
          <a href="#slide3" className="btn btn-secondary btn-outline btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />

        <div className="absolute flex rounded-xl items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Best Kids Store.</h2>
            <h3 className="text-4xl font-bold">
              The Ferrari Battery Operated Ride On Car for Kids
            </h3>
            <p>
              this lookalike la ferrari ride-on toy car is easy to clean.
              Assembly required. Suitable for kids between 2 to 6 years of age
              and has a maximum weight capacity of 30kgs. Charge the battery
              according to the included instruction manual
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-secondary btn-outline btn-circle mr-10">
            ❮
          </a>
          <a href="#slide4" className="btn btn-secondary btn-outline btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />

        <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-6 w-1/2">
            <h2 className="text-7xl font-bold">Best Kids Store.</h2>
            <h3 className="text-4xl font-bold">Off Roader Kids Jeep</h3>
            <p>
              R/C Electric Motor With Rechargeable Battery Operated Ride On Jeep
              For Kids.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-secondary btn-outline btn-circle mr-10">
            ❮
          </a>
          <a href="#slide1" className="btn btn-secondary btn-outline btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
