import React from "react";
import userAvatar from "../Images/avatar.png"; // replace with your default avatar or user profile image

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      

        <div className="shrink-0">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
          />
        </div>

       
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">Jane Doe</h1>
          <p className="text-gray-700 text-sm md:text-base">Student / Innovator</p>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Enthusiastic about sustainability, recycling projects, and innovative solutions. Actively exploring reusable materials from industries and labs for creative projects.
          </p>
        </div>
      </div>


      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <p className="text-2xl md:text-3xl font-bold text-green-700">12</p>
          <p className="text-gray-700 text-sm md:text-base">Materials Requested</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <p className="text-2xl md:text-3xl font-bold text-green-700">8</p>
          <p className="text-gray-700 text-sm md:text-base">Materials Received</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <p className="text-2xl md:text-3xl font-bold text-green-700">5</p>
          <p className="text-gray-700 text-sm md:text-base">Projects Completed</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <p className="text-2xl md:text-3xl font-bold text-green-700">3</p>
          <p className="text-gray-700 text-sm md:text-base">Referrals</p>
        </div>
      </div>


 {/* recent activities  */}
 
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-semibold">Requested Timber Offcuts</p>
              <p className="text-gray-500 text-sm">Jan 1, 2026</p>
            </div>
            <span className="text-green-700 font-bold">Pending</span>
          </div>

          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-semibold">Received Electronic Components</p>
              <p className="text-gray-500 text-sm">Dec 28, 2025</p>
            </div>
            <span className="text-green-700 font-bold">Completed</span>
          </div>

          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-semibold">Created New Recycling Project</p>
              <p className="text-gray-500 text-sm">Dec 20, 2025</p>
            </div>
            <span className="text-green-700 font-bold">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
