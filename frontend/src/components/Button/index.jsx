import clsx from "clsx"

export const Button = ({
  className,
  children,
  type,
  disabled,
  id,
  value,
  handleChange,
  name,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'button',
        className,
        type == 'primary' ? 'btn-primary' :
          type == 'secondary' ? 'btn-secondary' :
            "null")
      }
      type={type}
      disabled={disabled}
      id={id}
      name={name}
      onClick={handleChange}
      value={value}
      {...rest}
    >
      {children}
    </button>
  )
}
