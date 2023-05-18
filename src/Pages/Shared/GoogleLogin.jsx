import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import google from "../../assets/images/google.png";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
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
