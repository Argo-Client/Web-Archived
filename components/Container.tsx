export default function Container({
  children,
  className,
}: {
  children: JSX.Element;
  className: string;
}) {
  const classes = className + " md:container md:mx-auto";
  return <div className={classes}>{children}</div>;
}
