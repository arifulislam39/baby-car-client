
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const { photo,toy_name,sub_category,price,rating,quantity,description,seller_name,email} = data;
  console.log(data);



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
           
              <tr  className="border-2 border-black">
                <th></th>
                <td className="mask mask-squircle w-12 h-12">
                  <img src={photo} alt="Avatar Tailwind CSS Component" />
                </td>
                <td>{toy_name}</td>
                <td>{sub_category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>{seller_name}</td>
                <td>{email}</td>
                <th>
                  
                </th>
                <th>
                </th>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDetails;
