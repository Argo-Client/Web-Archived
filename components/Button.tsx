export default function Button({ children, className }) {
  const classes =
    className +
    " rounded-md shadow-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-blue-600 focus:ring-2 focus:ring-opacity-50 bg-blue-500 text-white";
  return <button className={classes}>{children}</button>;
}
