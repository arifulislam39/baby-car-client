import { useEffect, useState } from "react";
import CarsTable from "./CarsTable";
import Head from "../../HeadTitle/Head";

const AllToys = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://baby-car-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://baby-car-server.vercel.app/searchByToyName/${search}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      <Head title="ALL TOYS" />
      <div>
        <div
          className="hero h-52"
          style={{
            backgroundImage: `url("https://i.ibb.co/nfQFc6Y/31b8d6079a811d3d60072862e773ecb3.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">ALL TOYS</h1>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered mr-10 text-black"
              />
              <button className="btn btn-primary " onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <td>#</td>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car, index) => (
              <CarsTable car={car} index={index} key={car}></CarsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
