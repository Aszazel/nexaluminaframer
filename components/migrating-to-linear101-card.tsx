import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type MigratingToLinear101CardType = {
  imageCaption?: string;
  eventDate?: string;
  courseImageUrl?: string;
  articleImageUrl?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const MigratingToLinear101Card: NextPage<MigratingToLinear101CardType> = ({
  imageCaption,
  eventDate,
  courseImageUrl,
  articleImageUrl,
  propBackgroundColor,
  propColor,
}) => {
  const badgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-left text-sm text-slateblue font-block-quote">
      <img
        className="relative rounded-3xs w-80 h-[200px] overflow-hidden shrink-0 object-cover"
        alt=""
        src={imageCaption}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
            {eventDate}
          </h4>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-lg text-gray1-200">
            <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit">
              {courseImageUrl}
            </h3>
            <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
              {articleImageUrl}
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center text-steelblue">
          <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
            <span
              className="rounded-2xl bg-aliceblue-100 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5"
              style={badgeBaseStyle}
            >
              <span
                className="relative leading-[20px] font-medium"
                style={textStyle}
              >
                Design
              </span>
            </span>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
            <span className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
              <span className="relative leading-[20px] font-medium">
                Research
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigratingToLinear101Card;
