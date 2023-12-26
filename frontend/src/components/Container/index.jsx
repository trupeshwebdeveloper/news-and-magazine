import clsx from "clsx"

export const Container = ({
  children,
  className
}) => {
  return (
    <div className={clsx('container', className)}>
      {children}
    </div>
  )
}
