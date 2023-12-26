import clsx from "clsx";

export const Input = ({
  type,
  label,
  id,
  name,
  disabled,
  placeholder,
  value,
  labelClass,
  parentClassName,
  className,
  handleChange,
  isrequired,
  ...rest
}) => {
  return (
    <div className={parentClassName}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(labelClass, "h5 block font-medium capitalize mb-4")}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        className={clsx(className, "form-input")}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        required={isrequired}
        {...rest}
      />
    </div>
  );
};
