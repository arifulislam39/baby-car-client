import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Head from "../../HeadTitle/Head";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller_name = user?.displayName;
    const seller_email = user?.email;
    const toy_name = form.toy_name.value;
    const photo = form.photo.value;
    const sub_category = form.sub_category.value;
    const priceString = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price =parseInt(priceString)

    const add = {
      seller_name,
      seller_email,
      toy_name,
      photo,
      sub_category,
      price,
      rating,
      quantity,
      description,
    };

    //console.log(add);
    // Toy add in to database
    fetch("https://baby-car-server.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Head title="ADD TOYS"></Head>
      <form onSubmit={handleAddToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                name="toy_name"
                type="text"
                defaultValue=""
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="photo"
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select
                id="cars"
                name="sub_category"
                className="input input-bordered input-primary"
              >
                <option value="car">Car</option>
                <option value="racing_car">Racing Car</option>
                <option value="jeep">Jeep</option>
                <option value="truck">Truck</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                defaultValue=""
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="text"
                defaultValue=""
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                name="quantity"
                type="text"
                defaultValue=""
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                name="seller_name"
                type="text"
                value={user?.displayName}
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                name="seller_email"
                type="email"
                value={user?.email}
                className="input input-bordered input-primary"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details Description</span>
            </label>
            <textarea
              name="description"
              type="text"
              className="textarea textarea-primary"
              placeholder="Type here....."
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
