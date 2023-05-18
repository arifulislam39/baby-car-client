import login from "../../assets/images/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-violet-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-purple-900 border-4 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login </h1>
            <form>
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
                  type="text"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;