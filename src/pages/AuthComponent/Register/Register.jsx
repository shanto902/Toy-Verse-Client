import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
  

    createUser (email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
        console.log(createdUser)
        console.log("User Created")
        
        // setError("");
        // setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.log(error)
        // setError(error.message);
        // setSuccess("");
      });
  };
  return (
    <div className="hero bg-base-200 pt-10">
      <div className="hero-content flex-col ">
        <h1 className=" text-3xl font-semibold">Register Now</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter PhotoURL"
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className=" mt-5">
              Already Have an Account?{" "}
              <Link
                to="/login"
                className="link link-hover hover:text-blue-600 font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
