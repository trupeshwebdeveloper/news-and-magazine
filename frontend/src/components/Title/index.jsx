import clsx from "clsx";

export const Title = ({ children, className }) => {
  return (
    <div className={clsx("flex gap-2 mb-5 items-center", className)}>
      <span className="flex w-1 h-3 rounded-2xl bg-primary"></span>
      <h4 className="font-medium capitalize">{children}</h4>
    </div>
  );
};
