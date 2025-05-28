"use client";
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import Image from "next/image";
import HearthIcon from "./icons/HeartIcon";
import CommentIcon from "./icons/CommentIcon";

const LogoText = ({ children, text }) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      <span className="text-2xl">{text}</span>
    </div>
  );
};

const CarouselPlaceholder = () => {
  return (
    <div
      className={clsx(
        "embla__slide ml-2 max-w-[200px] basis-[calc(45%)]  transition-[height]",
      )}
    >
      <div className="h-[200px] w-[200px] animate-pulse bg-gray-200"></div>
    </div>
  );
};

function mergeArrays(array1, array2) {
  const mergedArray = [];
  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      mergedArray.push(array1[i]);
    }
    if (i < array2.length) {
      mergedArray.push(array2[i]);
    }
  }

  return mergedArray;
}

export const CarouselSimple = ({ mediaData1, mediaData2 }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [slides, setSlides] = React.useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  function mergeAndHandleMediaData() {
    // console.log("merging started" + Math.random() * 100);
    const mergedMediaData = mergeArrays(mediaData1.data, mediaData2.data);

    if (mergedMediaData && mergedMediaData.length > 0) {
      handleMediaData(mergedMediaData);
    }
  }

  function handleMediaData(mediaData) {
    if (mediaData && mediaData.length > 0) {
      let slidesTemp = mediaData
        .filter(
          (item) =>
            item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM",
        )
        .map((item) => ({
          url: item.media_url,
          permalink: item.permalink,
          like_count: item.like_count,
          comments_count: item.comments_count,
          caption: item.caption,
          type: item.media_type,
        }));
      setSlides(slidesTemp);
      setIsLoaded(true);
    }
  }

  // async function handleMediaData(mediaData) {
  //   if (mediaData && mediaData.length > 0) {
  //     let slidesTemp = [];
  //     await mediaData.map((item) => {
  //       if (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") {
  //         let obj = {
  //           url: item.media_url,
  //           permalink: item.permalink,
  //           like_count: item.like_count,
  //           comments_count: item.comments_count,
  //           caption: item.caption,
  //           type: item.media_type,
  //         };
  //         slidesTemp.push(obj);
  //       }
  //       // else if (item.media_type === "CAROUSEL_ALBUM") {
  //       //   item.children.data.map((child, index) => {
  //       //     let obj = {
  //       //       url: child.media_url,
  //       //       permalink: `${item.permalink}?img_index=${index + 1}`,
  //       //       like_count: item.like_count,
  //       //       comments_count: item.comments_count,
  //       //       caption: item.caption,
  //       //       type: "CAROUSEL_ALBUM",
  //       //     };
  //       //     setSlides((slides) => [...slides, obj]);
  //       //   });
  //       // }
  //     });
  //     setSlides(slidesTemp);
  //     setIsLoaded(true);
  //   }
  // }

  useEffect(() => {
    // console.log("CarouselSimple mounted" + Math.random());
    if (mediaData1 && mediaData2) mergeAndHandleMediaData();
  }, [mediaData1, mediaData2]);

  return (
    <div className=" relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-white">
      <div className="" ref={emblaRef}>
        <div className="embla__container h-full ">
          {isLoaded ? (
            slides.map((slide, index) => {
              const urlSplit = slide.url.split(".com");
              urlSplit[0] = "https://scontent.cdninstagram";
              const baseinsgtagramUrl = urlSplit.join(".com");
              return (
                <React.Fragment key={slide.caption}>
                  <div
                    className={clsx(
                      "embla__slide ml-2 max-w-[200px] basis-[calc(45%)] transition-[height] ",
                    )}
                    key={index}
                  >
                    <a
                      href={slide.permalink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={clsx(
                        "group relative h-[200px] w-[200px] transition-all duration-700",
                      )}
                    >
                      <img
                        alt={slide.caption}
                        width={200}
                        height={200}
                        className={"aspect-square object-cover "}
                        src={baseinsgtagramUrl}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white opacity-0 transition-all duration-700 group-hover:z-50 group-hover:opacity-100 lg:gap-4">
                        <div className="flex items-center justify-center gap-4">
                          <LogoText text={slide.like_count}>
                            <HearthIcon className="text-2xl" />
                          </LogoText>
                          <LogoText text={slide.comments_count}>
                            <CommentIcon className="text-2xl" />
                          </LogoText>
                        </div>
                        <div className="flex w-full items-center justify-center overflow-hidden px-2">
                          <p className="hidden text-center lg:line-clamp-3">
                            {slide.caption}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <>
              {Array.from(Array(50).keys()).map((item, index) => {
                return <CarouselPlaceholder key={index} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};