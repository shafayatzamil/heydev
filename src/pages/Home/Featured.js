import React from "react";
import companyImage1 from "../assets/Group 43.png";
import companyImage2 from "../assets/Group 44.png";
import companyImage3 from "../assets/Group 45.png";
import companyImage4 from "../assets/Group 46.png";
import companyImage5 from "../assets/SHAKEY.png";

const Featured = () => {
  return (
    <div className="bg-slate-200 ">
      <h4 className="text-center text-lg font-bold text-neutral-500 pt-6">
        As Featued In
      </h4>
      {/* company image */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 ">
        <div>
          <img src={companyImage1} alt="" className="w-40" />
        </div>
        <div>
          <img src={companyImage2} alt="" className="w-36" />
        </div>
        <div>
          <img src={companyImage3} alt="" className="w-36" />
        </div>
        <div>
          <img src={companyImage4} alt="" className="w-36" />
        </div>
        <div>
          <img src={companyImage5} alt="" className="w-28" />
        </div>
      </div>
      {/* footer */}
      <div className="px-24 pt-12 flex gap-20">
        <div className="">
          <h2 className="text-xl font-bold text-neutral-500 ">
            About Ardeo Education Solution
          </h2>
          <p>
            Ardeo patner with colleges across the U.S to help
            <br />
            student overcome the burden of student loans.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-500">Contact US</h2>
          <p>P.O Box 1476</p>
          <p>Bloomington,IN 47402</p>
          <p>info@myLRAP.org</p>
          <p>
            <span className="font-bold">P</span>
            877. 936 .5727
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
