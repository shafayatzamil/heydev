import React from "react";
import Background from "../assets/backgroundimage.jpg";
import Background1 from "../assets/laptop-g1a593331a_1920.jpg";

const HeroSection = () => {
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
            <h2></h2>
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}

            <div className="hero ">
              <div className="hero-content ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
