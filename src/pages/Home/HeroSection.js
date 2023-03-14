import React, { useContext } from "react";
import Background from "../assets/backgroundimage.jpg";
import Background1 from "../assets/laptop-g1a593331a_1920.jpg";
import { json } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const HeroSection = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      checkbox: e.target.checkbox.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    e.target.reset();
    console.log(user);
  };
  return (
    <div className="">
      {/* <div
        className="h-96 w-full  bg-cover bg-gradient-to-r from-red-900 to-pink-500"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <h2 className="text-white">
          PURSUE <span>Your passions</span>
        </h2>
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          {/* text */}
          <div className="text-white text-2xl font-bold mt-60 ml-36">
            <div className="flex ">
              {" "}
              <h2 className="bg-rose-900 p-3">pursue</h2>
              <h2 className="bg-red-700 p-3">Your passions</h2>
            </div>
            <div className="flex mt-2 ">
              <h2 className="bg-rose-900 p-3">Secure</h2>
              <h2 className="bg-red-700 p-3">Your peace of mind</h2>
            </div>
          </div>
          {/* form */}
          <div>
            {/* <div className="hero ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="text"
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <div className="ml-96 w-72">
              <div className="bg-white p-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Seattle_Pacific_University_logo.svg/2560px-Seattle_Pacific_University_logo.svg.png"
                  alt=""
                  className="w-48 mx-auto"
                />
                <h2 className="text-2xl font-bold text-center text-black">
                  Get Covered
                </h2>
                <p className="text-md font-semibold text-center text-slate-400">
                  Accept your LARP Award Now, At no cost to you.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-2">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Student first Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-2">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Student last Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-2">
                    <input
                      type="text"
                      name="email"
                      placeholder="Student Email Address"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-2">
                    <div className="flex justify-center items-center gap-2">
                      <input
                        type="checkbox"
                        name="checkbox"
                        placeholder="Student Email Address"
                        className="input  w-8"
                      />
                      <h2 className="text-red-900 text-xs font-semibold">
                        I confirmed that I have recived and Accpted the LARP
                        Award
                      </h2>
                    </div>
                  </div>
                  <div className="bg-red-700 px-8 py-2">
                    <button className="text-md">Accept My LRAP Award</button>
                  </div>

                  <p className="text-red-900 text-xs  font-semibold mt-2">
                    Check the box and click the accept button above to accept
                    your LRAP Award at no or commitment.Accepting your Award
                    Simply confirms your Covered if you enroll at client
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
