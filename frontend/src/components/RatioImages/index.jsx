import clsx from "clsx"

export const RatioImages = ({
  src,
  alt,
  RatioImagesParentClass,
  RatioImagesClass,
  ...rest
}) => {
  return (
    <div className={clsx(RatioImagesParentClass, 'ratio')}>
      <img
        src={src}
        alt={alt}
        className={RatioImagesClass}
        {...rest}
      />
    </div>
  )
}
