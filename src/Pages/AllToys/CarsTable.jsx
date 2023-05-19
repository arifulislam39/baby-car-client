const CarsTable = ({ car }) => {
  const { seller_name, toy_name, sub_category, price, quantity } = car || {};
  return (
    <tr>
      <th>1</th>
      <td>{seller_name}</td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-secondary btn-xs">details</button>
      </th>
    </tr>
  );
};

export default CarsTable;
