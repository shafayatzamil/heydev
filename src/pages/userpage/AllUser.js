import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const AllUser = () => {
  const { data: alluser = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="p-3 bg-slate-100 ">
      <h2 className="text-4xl font-bold text-center my-6">
        Total Users: {alluser.length}
      </h2>
      {/* all users card */}
      <div className="grid grid-cols-3 gap-4">
        {alluser.map((user, i) => (
          <Card key={i} user={user}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
