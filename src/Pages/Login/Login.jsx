import login from "../../assets/images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Shared/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Head from "../../HeadTitle/Head";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  //Input data from user
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorForMsg = errorMessage.split(":");
        setError(errorForMsg[1]);
      });
  };

  return (
    <div className="hero min-h-screen bg-violet-300">
      <Head title="LOGIN"></Head>
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-purple-900 border-4 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login </h1>
            <p className="text-red-500 mt-5 border-2 border-purple-900">{error}</p>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered border-purple-600 border-2"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-purple-600 border-2"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-purple-900"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="text-center">
              New to Here?
              <Link className="text-blue-900 font-bold" to="/registration">
                Registration
              </Link>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
