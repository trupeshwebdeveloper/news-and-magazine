import clsx from "clsx";
import { Button } from "../../Button";
import { TextEditorbutton } from "../../../utility";
import { TextArea } from "../TextArea";

export const TextEditor = ({
  parentClassName,
  label,
  className,
  labelClass,
  handleChange,
  disabled,
  id,
  value,
  cols,
  rows,
  name,
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
      <div className="w-full rounded-xl bg-white p-5 shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-nowrap gap-5 items-center overflow-auto pb-4">
            {TextEditorbutton.map((content, index) => (
              <Button
                disabled
                key={index}
                type="primary"
                className="bg-gray py-3 pl-4 pr-7 text-black-75 hover:text-white transition-all ease-linear"
              >
                {content.PictureIcon}
                {content.content}
              </Button>
            ))}
          </div>
        </div>
        <TextArea
          id={id}
          name={name}
          className={clsx(className, "form-input")}
          value={value}
          placeholder="type..."
          cols={cols}
          rows={rows}
          disabled={disabled}
          onChange={handleChange}
          required={isrequired}
          {...rest}
        />
      </div>
    </div>
  );
};
