import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import google from "../../assets/images/google.png";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="">
      <div className="divider">OR</div>
      <div><img
        onClick={handleGoogleSignIn}
        className="w-12 h-12"
        src={google}
        alt=""
      /></div>

     
    </div>
  );
};

export default GoogleLogin;
