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
    <div className="max-w-7xl mx-auto w-full mt-20">
      <Head title="ALL TOYS" />
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
