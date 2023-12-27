import clsx from "clsx";
import { RatioImages } from "../RatioImages";
import { Icons } from "../../utility/Icons";
import { Link } from "react-router-dom";

export const PostCard = ({
  ParentClass,
  isVertical,
  title,
  paragraph,
  rating,
  subContent,
  src,
  AvatarSrc,
  subContentTitle,
  subContentSubTitle,
}) => {
  return (
    <div
      className={clsx(
        "bg-white p-3 gap-4 flex rounded-xl shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)]",
        ParentClass,
        { ["flex-col"]: isVertical == true }
      )}
    >
      <RatioImages
        src={src}
        RatioImagesParentClass="before:pb-[70%] max-w-[340px]"
      />
      <div className="flex flex-col h-full">
        <div className="capitalize">
          <h5
            className={clsx("font-medium text-black line-clamp-1", {
              ["py-0 mb-4"]: isVertical == true,
              ["py-4"]: isVertical != true,
            })}
          >
            {title}
          </h5>
          {paragraph && (
            <p className="h5 xl leading-5 tracking-[0.25px] line-clamp-2 mb-10">{paragraph}</p>
          )}
        </div>

        {subContent && (
          <>
            {src && (
              <div className="bg-gray flex gap-4 items-center justify-between py-3 px-4 rounded-xl mt-auto">
                <div className="flex items-center gap-3">
                  <RatioImages
                    src={AvatarSrc}
                    RatioImagesParentClass="w-11 h-11"
                  />
                  <div className="capitalize">
                    <h5 className="xl font-medium leading-normal text-black">
                      {subContentTitle}
                    </h5>
                    <p className="small font-normal leading-normal text-black-75 line-clamp-1">
                      {subContentSubTitle}
                    </p>
                  </div>
                </div>
                <Link className="text-black-50 hover:text-primary-75 transition-all ease-linear">
                  {Icons.SaveIcon}
                </Link>
              </div>
            )}
            {rating && (
              <div className="bg-gray flex gap-4 justify-between py-3 px-4 rounded-xl mt-auto">
                <div className="flex gap-5">
                  <Link className="flex gap-1 text-black-50 hover:text-primary-75 ease-linear transition-all">
                    {Icons.EyeIcon}
                    <span className="block text-black font-medium leading-6 hover:text-primary-75 ease-linear transition-all">
                      15k
                    </span>
                  </Link>
                  <Link className="flex gap-1 text-black-50 hover:text-primary-75 ease-linear transition-all">
                    {Icons.StarIcon}
                    <span className="block text-black font-medium leading-6 hover:text-primary-75 ease-linear transition-all">
                      4.5
                    </span>
                  </Link>
                </div>
                <div className="flex gap-5">
                  <Link className="block text-black-50 hover:text-primary-75 transition-all ease-linear">
                    {Icons.WriterIcon}
                  </Link>
                  <Link className="block text-black-50 hover:text-primary-75 transition-all ease-linear">
                    {Icons.BinIcon}
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
