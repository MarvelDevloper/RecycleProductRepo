import React from "react";
import userAvatar from "../Images/avatar.png";
import { useLoaderData } from "react-router-dom";

export function DProfile() {
  const claimproducts = useLoaderData();

  // axios response safety
  const claims = claimproducts?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">

      {/* Profile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="shrink-0">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">
            {claims[0]?.claimedBy?.name || "User"}
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            {claims[0]?.claimedBy?.email || ""}
          </p>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Enthusiastic about sustainability and reuse of materials.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-green-50 rounded-lg p-6 shadow">
          <p className="text-2xl font-bold text-green-700">{claims.length}</p>
          <p className="text-gray-700">Materials Claimed</p>
        </div>
      </div>

      {/* Recent Activities */}
      <ul className="mt-10 space-y-4">
        {claims.map((ele) => (
          <li
            key={ele._id}
            className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h1 className="text-lg font-semibold text-green-700">
              {ele.productId?.productname}
            </h1>
            <p className="text-gray-600">
              ₹ {ele.productId?.productprice}
            </p>
            <p className="text-sm text-gray-500">
              Category: {ele.productId?.category}
            </p>
          </li>
        ))}
      </ul>

    </div>
  );
}
