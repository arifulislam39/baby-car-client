const Customer = () => {
  return (
    <div className="font-bold text-center mt-10 mb-20">
      <h2 className="text-6xl">Customer Reviews</h2>
      <p className="mt-5">Our Belove Customer Testimonials</p>
      <div>
        <section className="text-neutral-700 dark:text-neutral-300 mt-10">
          {/*First Testimonial */}
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#e780e2]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://t4.ftcdn.net/jpg/01/35/51/83/360_F_135518399_Mxy8lbwW7eSjgJXB7Lawa5U0kQCJwk49.jpg" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">
                    Joseph I. Davis
                  </h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    I enjoy to shop from BABY CAR.The customer service at this
                    toy shop is exceptional.I would definitely come here again..
                  </p>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div>
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://i.pinimg.com/236x/f8/41/aa/f841aa97afbe220b21dc338d1e6c1e97.jpg" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Alison</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    I am always impressed by the wide range of toys this store
                    has to offer.It is my go to for all things playtime! The
                    customer service at this toy shop is exceptional.They went
                    above and beyond to help find the perfect toy.
                  </p>
                </div>
              </div>
            </div>

            {/* <!--Third Testimonial--> */}
            <div>
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#170d2e]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://media.istockphoto.com/id/108273467/photo/happy-asian-boy-smiling.jpg?b=1&s=170667a&w=0&k=20&c=-XjGR8Ie3JrDaEgPwgyMbivAwUhhP0RtOliLJ-oK1CA=" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Peter</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    The customer service at this toy shop is exceptional.They
                    went above and beyond to help me find the perfect toy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Customer;
