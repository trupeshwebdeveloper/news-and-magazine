import clsx from "clsx";

export const RatioImages = ({
  src,
  alt,
  RatioImagesParentClass,
  RatioImagesClass,
  ...rest
}) => {
  return (
    <div className={clsx(RatioImagesParentClass, "ratio flex-[0_0_auto]")}>
      <img
        src={src}
        alt={alt}
        className={clsx(RatioImagesClass, "rounded-xl")}
        {...rest}
      />
    </div>
  );
};
