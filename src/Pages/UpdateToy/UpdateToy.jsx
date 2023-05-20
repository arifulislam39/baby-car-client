import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
    const update =useLoaderData();
    const {price, quantity, description}=update;
    return (
        <div>
            <h2>hello: {price}</h2>
            
        </div>
    );
};

export default UpdateToy;