export default function Button({ children }) {
  return (
    <button className="rounded-md shadow-md p-2 hover:bg-yellow-600 focus:outline-none focus:ring-yellow-600 focus:ring-2 focus:ring-opacity-50 bg-yellow-500 text-white">
      {children}
    </button>
  );
}
