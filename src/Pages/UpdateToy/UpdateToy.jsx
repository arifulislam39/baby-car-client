import { useLoaderData } from "react-router-dom";
import Head from "../../HeadTitle/Head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateToy = () => {
  const update = useLoaderData();
  const { price, quantity, description, _id } = update;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const priceString = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price = parseFloat(priceString);

    const update = {
      price,
      quantity,
      description,
      _id,
    };

    console.log(update);

    // update in to database
    fetch(`https://baby-car-server.vercel.app/updateData/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const notify = () => toast("Updated Successfully!!!");

  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer />
      <Head title="UPDATE TOY"></Head>
      <form onSubmit={handleUpdate}>
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                defaultValue={price}
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
                defaultValue={quantity}
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
              defaultValue={description}
              className="textarea textarea-primary"
              placeholder="Type here....."
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              onClick={notify}
              className="btn btn-primary btn-block"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
