"use client";
import clsx from "clsx";
import React from "react";

function FeedBackBar({ children, iconText, rating, outOf, bg }) {
  
  return (
    <div className="flex max-w-[100px] items-center justify-center gap-2 rounded-4 bg-white px-4 py-2 shadow-[0_2px_13px_0_rgba(0,0,0,0.1)]">
      <div
        className={clsx(
          "flex  flex-col items-center justify-center rounded-full text-base ",
          bg ? `bg-[${bg}]` : "",
          iconText ? "p-1 " : "p-[6px]",
        )}
      >
        <div className="flex h-full w-full items-center">{children}</div>
        {/* {iconText && (
          <span className="text-[3px] leading-[0.75em]">Tripadvisor</span>
        )} */}
      </div>
      <span className="whitespace-nowrap text-xs leading-[0.75em]">
        {rating} / {outOf}
      </span>
    </div>
  );
}

export default FeedBackBar;