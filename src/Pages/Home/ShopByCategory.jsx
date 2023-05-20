import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [fetchedData, setFetchedData] = useState("car");

  useEffect(() => {
    fetch(`https://baby-car-server.vercel.app/category/${fetchedData}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [fetchedData]);

  const handleTabClick = (index) => {
    setFetchedData(index);
  };

  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold mt-20">Shop by Category</h2>
      <div className="text-center mt-10">
        <Tabs>
          <TabList>
            <Tab onClick={() => handleTabClick("car")}>CAR</Tab>
            <Tab onClick={() => handleTabClick("jeep")}>JEEP</Tab>
            <Tab onClick={() => handleTabClick("truck")}>TRUCK</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
              {data.map((product) => (
                <div
                  data-aos="zoom-in"
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
                      <span className="font-bold">Price</span> : {product.price}
                    </p>

                    <p className="text-left">
                      <span className="font-bold">Rating</span> :{" "}
                      {product.rating}
                    </p>
                    <div className="card-actions justify-center">
                      <Link to={`/viewDetails/${product._id}`}>
                        <button className="btn btn-secondary btn-xs">
                          details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
              {data.map((product) => (
                <div
                  data-aos="zoom-in"
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
                      <span className="font-bold">Price</span> : {product.price}
                    </p>

                    <p className="text-left">
                      <span className="font-bold">Rating</span> :{" "}
                      {product.rating}
                    </p>
                    <div className="card-actions justify-center">
                      <Link to={`/viewDetails/${product._id}`}>
                        <button className="btn btn-secondary btn-xs">
                          details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
              {data.map((product) => (
                <div
                  data-aos="zoom-in"
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
                      <span className="font-bold">Price</span> : {product.price}
                    </p>

                    <p className="text-left">
                      <span className="font-bold">Rating</span> :{" "}
                      {product.rating}
                    </p>
                    <div className="card-actions justify-center">
                      <Link to={`/viewDetails/${product._id}`}>
                        <button className="btn btn-secondary btn-xs">
                          details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
