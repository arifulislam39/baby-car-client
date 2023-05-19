import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setCars(result);
      });
  }, [user]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
            {cars?.map((car) => (
              <tr key={car._id}>
                <th>1</th>
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
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
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
