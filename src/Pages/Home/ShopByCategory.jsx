import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Providers/AuthProvider";



const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  const [fetchedData, setFetchedData] = useState("car");

  useEffect(() => {
    fetch(`https://baby-car-server.vercel.app/category/${fetchedData}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [fetchedData]);

  const handleTabClick = (index) => {
    setFetchedData(index);
  };
  
  //user check
  const handleUserCheck =()=>{
    if(!user){
      confirm('You have to log in first to view details')
    }
  }

  //loading
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56 ml-56 me-56 mt-10 mb-10 bg-red-500"></progress>
        ;
      </div>
    );
  }

  return (
    <div className="text-center">

      <h2 className="text-6xl font-bold mt-20">Shop by Category</h2>
      <div className="text-center mt-10">
        <Tabs>
          <TabList className="">
            <Tab
              onClick={() => handleTabClick("car")}
              className="tab tab-active mr-10 bg-violet-700 text-white rounded"
            >
              CAR
            </Tab>
            <Tab
              onClick={() => handleTabClick("jeep")}
              className="tab tab-active mr-10 bg-violet-700 text-white rounded"
            >
              JEEP
            </Tab>
            <Tab
              onClick={() => handleTabClick("truck")}
              className="tab tab-active bg-violet-700 text-white rounded"
            >
              TRUCK
            </Tab>
          </TabList>
          {/* TabPanel 3 */}
          <TabPanel>
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
                  <div className="card-body bg-cyan-200">
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
                          <button onClick={handleUserCheck} className="btn btn-primary bg-indigo-500">
                            Details
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          {/* TabPanel 2 */}
          <TabPanel>
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
                          <button onClick={handleUserCheck} className="btn btn-primary bg-indigo-500">
                            Details
                          </button>
                        </Link>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* TabPanel 3 */}
          <TabPanel>
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
                  <div className="card-body bg-fuchsia-200">
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
                          <button  onClick={handleUserCheck} className="btn btn-primary bg-indigo-500">
                            Details
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
