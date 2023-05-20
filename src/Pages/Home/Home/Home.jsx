
import Banner from "../Banner";
import Customer from "../Customer";
import Gallery from "../Gallery";
import OnSale from "../OnSale";
import ShopByCategory from "../ShopByCategory";


const Home = () => {

    return (
        <div className="max-w-7xl mx-auto">
           <Banner></Banner>
           <Gallery></Gallery>
           <OnSale></OnSale>
           <ShopByCategory></ShopByCategory>
           <Customer></Customer>
        </div>
    );
};

export default Home;