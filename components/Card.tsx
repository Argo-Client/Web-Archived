export default function Card({ children, className }) {
  const classes =
    className +
    "bg-gray-100 dark:bg-dark-secondary bg-gray-100 rounded-lg shadow-lg";
  return <div className={classes}>{children}</div>;
}
