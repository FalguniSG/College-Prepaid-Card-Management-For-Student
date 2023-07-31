import React, { useState } from "react";

const LostFine = () => {
  return (
    <div className="mt-5 max-w-md mx-auto bg-slate-50 p-6 mt-5 shadow-md rounded-md">
      <label className="text-2xl font-bold ">Update Book Lost Fine</label>
      <form className="mt-5 ">
        <div className="mb-4">
          <div>
            <input
              type="text"
              id="book"
              className="w-full px-4 py-2 rounded border"
              placeholder="Search Book..."
            />
          </div>
          <div className="flex items-center justify-left">
            <div className="bg-yellow-500 text-black shadow-md rounded-lg p-2 m-4">
              <h2 className="text-xl font-semibold">Lost Fine : 500TK</h2>
            </div>
          </div>
          <input
            type="number"
            id="fine"
            className="w-full px-4 py-2 rounded border"
            placeholder="Update Lost Fine"
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

export default LostFine;
