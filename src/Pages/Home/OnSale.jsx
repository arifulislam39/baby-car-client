import { useEffect, useState } from "react";

const OnSale = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(14));
      });
  }, []);

  return (
    <div>
      <div className="text-center mt-20">
        <h2
          className="font-bold text-6xl mb-3"
          style={{ fontFamily: "Lobster" }}
        >
          On Sale Products
        </h2>
        <p>Give the gift of your children everyday</p>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
          {products.map((product) => (
            <div data-aos="zoom-in"
            data-aos-duration="1500"
              className="card w-96 bg-base-100 shadow-xl border-r-slate-800 overflow-hidden relative rounded-3xl hover:shadow-2xl"
              key={product._id}
            >
              <figure>
                <img src={product.photo} alt="" className="w-full h-64" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.toy_name}</h2>

                <p className="text-left">
                  <span className="font-bold">Price</span> : {" "}
                  {product.price}
                </p>

                <p className="text-left">
                  <span className="font-bold">Rating</span> : {" "}
                  {product.rating}
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary bg-indigo-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnSale;
