import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider"
import Head from "../../HeadTitle/Head";

//const option = [{ value: "price-ascending" }, { value: "price-descending" }];

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
 const [ascending, setAscending]=useState(true);
  console.log(cars);

  //get logged user data from the database by email
  useEffect(() => {
    fetch(`https://baby-car-server.vercel.app/allToys/${user?.email}?sort=${ascending? 'ascending' : 'descending'}`)
      .then((res) => res.json())
      .then((result) => {
        setCars(result);
        console.log(result);
      });
  }, [user,ascending]);
  //deleted single data from my toys
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete it?");
    if (proceed) {
      fetch(`https://baby-car-server.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted successfully");

            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        });
    }
  };


  return (
    <div>
      <Head title="MY TOYS"></Head>

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
              <h1 className="mb-5 text-5xl font-bold">MY TOYS</h1>

              <button className="btn btn-primary" onClick={()=>setAscending(!ascending)}>
                {ascending? "Price-Ascending" : "Price-Descending"}
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head*/}
          <thead>
            <tr>
              <td>#</td>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Details</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car, index) => (
              <tr key={car._id} className="border-2 border-black">
                <td>{index + 1}</td>
                <td className="mask mask-squircle w-6 h-12">
                  <img src={car.photo} alt="Avatar Tailwind CSS Component" />
                </td>
                <td>{car.toy_name}</td>
                <td>{car.sub_category}</td>
                <td>{car.price}</td>
                <td>{car.rating}</td>
                <td>{car.quantity}</td>
                <td>{car.description}</td>
                <td>{car.seller_name}</td>
                <td>{car.seller_email}</td>
                <th>
                  <Link to={`/updateToy/${car._id}`}>
                    <button className="btn btn-xs">Update</button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(car._id);
                    }}
                    className="btn btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
