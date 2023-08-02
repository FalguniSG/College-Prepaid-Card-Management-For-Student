export default function Button({ children, className, props }) {
    return (
      <button
        {...props}
        className={`${className} text-white transition-colors duration-200 transform bg-gradient-to-b from-sky-800 to-emerald-900 rounded-md ml-5 px-5 py-2 text-xl hover:text-blue-300 focus:outline-none`}
      >
        {children}
      </button>
    );
  }
  