import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, username, name, phone, website, email, company, address } = user;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users");
  };
  return (
    <div className="p-3 bg-slate-100">
      <h2 className="text-4xl font-bold text-center my-6">
        User Details below:
      </h2>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt="user"
            className="w-48"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold text-center ">
            UserName: <span className="text-lime-700">{username}</span>
          </h2>
          <h2 className="text-xl font-semibold ">Name:{name}</h2>
          <p className="text-xl font-semibold ">Email:{email}</p>
          <p className="text-xl font-semibold ">Phone Number: {phone}</p>
          <p className="text-xl font-semibold ">Company name :{company.name}</p>
          <p className="text-xl font-semibold ">
            catchPhrase:{company.catchPhrase}
          </p>
          <div className="card-actions justify-end">
            {/* back to the user page */}
            <button onClick={handleClick} className="btn  btn-info text-white">
              back to user page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
