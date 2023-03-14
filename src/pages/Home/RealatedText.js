import React from "react";
import shelidImage from "../assets/shield.png";
import shelidImage1 from "../assets/shield-svgrepo-com.svg";

const RealatedText = () => {
  return (
    <div className="flex justify-center items-center mx-auto w-2/4 pb-12 ">
      <div className="-mt-12">
        <div className="bg-rose-900 p-2">
          <div className="flex gap-8">
            <img
              src={shelidImage}
              alt=""
              className="w-16 p-2 ml-4  bg-rose-900"
            />
            {/* <img src={shelidImage1} alt="" className="w-16 p-2" /> */}
            <p className="text-white pr-1 font-semibold">
              At seattle Pacific University,we've partner with Ardeo to help you
              protect your college investment with a Loan Repayment Assistence
              benefit called LRAP -at no cost to you.
            </p>
          </div>
        </div>
        {/* box */}
        <div className="flex justify-center items-center gap-1 border-2 border-rose-900">
          <div>
            <h2 className="text-rose-900 font-extrabold text-2xl p-2">
              $46,000
            </h2>
          </div>
          <div className="border-l-2 border-rose-900 p-2">
            <p className="text-rose-900 font-semibold">
              If you earn less than 46,000 after graduation,we can help to repay
              your student loans.
            </p>
          </div>
        </div>
        {/* heading */}
        <div className="mt-4">
          <h2 className="font-bold text-lg text-red-900">How it works</h2>
          <p className="font-semibold">
            Accept your LRAP Award and enroll at seattle pacific University in
            the 2023-2024 academic year.After graduting with a bachelor degree{" "}
            ,if you are earning less than $46,000, we will reimburse you for
            some or all of your covered student loan payment.
          </p>
        </div>
        {/* another heading */}
        <div className="mt-2">
          <h2 className="font-bold text-lg text-red-900">Covered loans</h2>
          <p className="font-semibold">
            LARP covers all Fedural student and parent PLUS loan ,as well as{" "}
            private alternative loans, up to $17,000 per academic year and
            $70,000 in total
          </p>
        </div>

        {/* another heading */}
        <div className="mt-2">
          <h2 className="font-bold text-lg text-red-900">After Gradution</h2>
          <p className="font-semibold">
            To Qualify for reimbursement , you must obtain employment, working{" "}
            30+ hours per week across any number of jobs, in any field . It does
            not even need to related to your degree, Assistance then countinues{" "}
            untill you earn more than $46,000 or load are fully repaid.
          </p>
          <p className="mt-2">
            <i className="font-semibold">
              Note:This is the summary.Teams& and conditions apply.See your LARP
              Award for full details
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealatedText;
