import clsx from "clsx";
import { RatioImages } from "../RatioImages";
import { avater1 } from "../../assets/img";

export const PostCard = ({
  ParentClass,
  isVertical,
  title,
  paragraph,
  subContent,
}) => {
  return (
    <div
      className={clsx(
        "bg-white p-3 gap-4 flex rounded-xl shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)]",
        ParentClass,
        { ["flex-col"]: isVertical == true }
      )}
    >
      <RatioImages src={avater1} RatioImagesParentClass="before:pb-[70%]" />
      <div className="capitalize">
        <h5 className="font-medium text-black">{title}</h5>
        {paragraph && (
          <p className="h5 xl leading-5 tracking-[0.25px]">{paragraph}</p>
        )}
      </div>

      {subContent && (
        <div>
          if(userDetails === isUserDetails){<h1>if </h1>}
          else{<h1>else</h1>}
        </div>
      )}
    </div>
  );
};
