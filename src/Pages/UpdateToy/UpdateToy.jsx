
import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
    const update =useLoaderData();
    const {price}=update;
    
    return (
        <div className="text-center">
            <h2>hello: {price}</h2>
            
        </div>
    );
};

export default UpdateToy;