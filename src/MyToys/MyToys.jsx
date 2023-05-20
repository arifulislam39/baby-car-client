import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  //get logged user data from the database by email
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setCars(result);
      });
  }, [user]);

  //deleted single data from my toys
  const handleDelete = (id) => {
    const proceed = confirm("are you sure you to want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/allToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");

            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
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
                <th>{index + 1}</th>
                <td className="mask mask-squircle w-12 h-12">
                  <img src={car.photo} alt="Avatar Tailwind CSS Component" />
                </td>
                <td>{car.toy_name}</td>
                <td>{car.sub_category}</td>
                <td>{car.price}</td>
                <td>{car.rating}</td>
                <td>{car.quantity}</td>
                <td>{car.description}</td>
                <td>Blue</td>
                <th>
                  <Link to={`updateToy/${car._id}`}>
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(car._id);
                    }}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
