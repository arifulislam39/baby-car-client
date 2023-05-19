
import Banner from "../Banner";
import Customer from "../Customer";
import Gallery from "../Gallery";
import ShopByCategory from "../ShopByCategory";


const Home = () => {

    return (
        <div className="max-w-7xl mx-auto">
           <Banner></Banner>
           <Gallery></Gallery>
           <ShopByCategory></ShopByCategory>
           <Customer></Customer>
        </div>
    );
};

export default Home;