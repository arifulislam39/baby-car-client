import {useLoaderData } from "react-router-dom";
import Head from "../../HeadTitle/Head";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    photo,
    toy_name,
    sub_category,
    price,
    rating,
    quantity,
    description,
    seller_name,
    email
  } = data || {};
  console.log(data);

  return (
    <div>
      <Head title="VIEW DETAILS"></Head>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="rounded-lg shadow-2xl mr-20" />
          <div>
            <h1 className="text-5xl font-bold">{toy_name}</h1>
            <p className="text-left mt-10">
              <span className="font-bold">Sub_category</span> : {sub_category}
            </p>

            <p className="text-left">
              <span className="font-bold">Price</span> : {price}
            </p>
            <p className="text-left">
              <span className="font-bold">Rating</span> : {rating}
            </p>
            <p className="text-left">
              <span className="font-bold">Quantity</span> : {quantity}
            </p>
            <p className="text-left">
              <span className="font-bold">Seller_name</span> : {seller_name}
            </p>
            <p className="text-left">
              <span className="font-bold">Email</span> : {email}
            </p>
            <p className="py-6">
              {" "}
              <span className="font-bold">Description</span> :{description}
            </p>
            <button className="btn btn-primary">Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
