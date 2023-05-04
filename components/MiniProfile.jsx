import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/045/317/250/large/mario-stoshevski-mike-tyson-funart1.jpg?1642447481"
        alt="miniprofile pic"
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Pablo</h2>
        <h3 className="text-sm text-gray-400">Explore with Pictogram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
