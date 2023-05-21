import { Helmet } from "react-helmet";



const Head = ({title}) => {
    return (
       <Helmet>
        <title>BABY CAR || {title}</title>
       </Helmet>
    );
};

export default Head;