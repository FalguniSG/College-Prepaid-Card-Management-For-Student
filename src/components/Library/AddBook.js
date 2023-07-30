import React, { useState } from "react";

const AddNewBook = () => {
  return (
    <div className="max-w-md mx-auto bg-slate-50 p-6 mt-5 shadow-md rounded-md">
      <p className="text-bold text-3xl" >Add New Book</p>
      <form className="mt-5 ">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 rounded border"
            placeholder="Book Title"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Publisher</label>
          <input
            type="text"
            id="author"
            className="w-full px-4 py-2 rounded border"
            placeholder="Publisher Name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">ISBN Number:</label>
          <input
            type="number"
            id="publicationDate"
            className="w-full px-4 py-2 rounded border"
            placeholder="ISBN"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Fine Amount</label>
          <input
            type="number"
            id="publicationDate"
            className="w-full px-4 py-2 rounded border"
            placeholder="Fine"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Quantity</label>
          <input
            type="number"
            id="publicationDate"
            className="w-full px-4 py-2 rounded border"
            placeholder="Total Quantity"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
