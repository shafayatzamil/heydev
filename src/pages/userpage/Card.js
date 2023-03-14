import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user.username}</h2>
          <p>{user.email}</p>
          <h2>{user.phone}</h2>
          <div className="card-actions justify-start ">
            <Link to={`/users/${user.id}`}>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white rounded-lg">
                {" "}
                view Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
