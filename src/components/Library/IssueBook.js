// components/IssueBookForm.js
import React from 'react';

const IssueBook = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Issue Book</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="book-title">
            Book Title
          </label>
          <input
            type="text"
            id="book-title"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter the book title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="user-name">
            User Name
          </label>
          <input
            type="text"
            id="user-name"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Issue Book
        </button>
      </form>
    </div>
  );
};

export default IssueBook;
