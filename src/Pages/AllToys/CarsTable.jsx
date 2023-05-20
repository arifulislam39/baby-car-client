import { Link } from "react-router-dom";

const CarsTable = ({ car, index }) => {
  const { seller_name, toy_name, sub_category, price, quantity,_id } = car || {};
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/viewDetails/${_id}`}><button className="btn btn-secondary btn-xs">details</button></Link>
      </th>
    </tr>
  );
};

export default CarsTable;
