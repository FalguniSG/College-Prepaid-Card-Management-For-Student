import React, { useState } from "react";

const Fine = () => {
  return (
    <div className="max-w-md mx-auto bg-slate-50 p-6 mt-5 shadow-md rounded-md">
      <label className="text-2xl font-bold ">Update Late Fine</label>
      <div className="flex items-center justify-left">
        <div className="bg-yellow-500 text-black shadow-md rounded-r-full pl-8 pr-8 pt-2 pb-2 mt-4">
          <h2 className="text-xl font-semibold">Late Fine: 10Tk/day</h2>
        </div>
      </div>
      <form className="mt-5 ">
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Fine:
          </label>
          <input
            type="number"
            id="fine"
            className="w-full px-4 py-2 rounded border"
            placeholder="New Late Fine per day"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default Fine;
