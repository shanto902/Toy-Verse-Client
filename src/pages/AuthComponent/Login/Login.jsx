import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
    const MySwal = withReactContent(Swal)


  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        MySwal.fire({
            title: <strong>Welcome!</strong>,
            html: <p>You are Successfully Logged In</p>,
            icon: "success",
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        MySwal.fire({
            title: <strong>Something Wrong!</strong>,
            html: <p>Email / Password Not Matched</p>,
            icon: "error",
          });
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        MySwal.fire({
            title: <strong>Welcome!</strong>,
            html: <p>You are Successfully Logged In</p>,
            icon: "success",
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 pt-10">
      <div className="hero-content flex-col ">
        <h1 className=" text-3xl font-semibold">Login Now</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className=" mt-5">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="link link-hover hover:text-blue-600 font-bold"
              >
                Sign up
              </Link>
            </p>
            <button className="btn btn-outline my-3" onClick={handleGoogleSignIn}>Login With Google</button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Login;
