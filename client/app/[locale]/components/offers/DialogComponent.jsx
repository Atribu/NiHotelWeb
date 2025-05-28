"use client";
import { Fragment, useState, useRef, useCallback, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import clsx from "clsx";
import { Jost } from "next/font/google";
import ScrollContainer from "react-indiana-drag-scroll";
import { HiXMark } from "react-icons/hi2";

const fontJost = Jost({
  weights: [300, 400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

function DialogComponenet({ open, onClose, slides, selectedCategory }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [category, setCategory] = useState(
    selectedCategory || slides[0].category,
  );
  const [allCategoriesLoaded, setAllCategoriesLoaded] = useState(false);
  const [allCategroies, setAllCategories] = useState([]);

  useEffect(() => {
    if (selectedCategory && emblaApi) {
      setCategory(selectedCategory);

      const index = slides.findIndex(
        (slide) => slide.category === selectedCategory,
      );
      setSelectedIndex(index);
      emblaApi.scrollTo(index);
    }
  }, [selectedCategory, emblaApi, slides]);

  useEffect(() => {
    const allcats = [];
    console.log(allcats);
    if (allCategoriesLoaded) return;
    slides.map((slide, index) => {
      // replace slide.categoryies "-" with " & "
      // slide.category = slide.category.replace("-", " & ");
      let existingCategory = allcats.find(
        (category) => category.name === slide.category,
      );
      if (!existingCategory) {
        let obj = {
          name: slide.category,
          count: 1,
        };

        allcats.push(obj);
      } else {
        existingCategory.count += 1;
      }

      if (index === slides.length - 1) {
        setAllCategoriesLoaded(true);
        setAllCategories(allcats);
      }
    });
  }, [allCategoriesLoaded , slides]);

  // useEffect(() => {
  //   console.log(selectedIndex);
  // }, [selectedIndex]);

  const handleActiveCategory = (category) => {
    setCategory(category);
    // dind the index of the first slide of the category
    const index = slides.findIndex((slide) => slide.category === category);
    // scroll to the slide
    emblaApi.scrollTo(index);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // look that index in view of emblaApi2
    emblaApi2.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaApi2]);

  useEffect(() => {
    if (!emblaApi) return;
    // Add the select event listener
    emblaApi.on("select", onSelect);
    // Remove event listeners on cleanup
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleTouchEnd = () => {
    // console.log("touch end");
    setIsDragging(false);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "relative flex h-screen w-screen max-w-screen-2xl transform flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:h-full md:w-full",
                  fontJost.className,
                )}
              >
                <HiXMark
                  className="absolute right-4 top-4 cursor-pointer text-3xl"
                  onClick={onClose}
                />
                <div className="relative mt-6 overflow-hidden md:mx-16">
                  <div className="" ref={emblaRef}>
                    <div className="embla__container ">
                      {slides.map((image, index) => (
                        <div
                          className="embla__slide relative h-full min-h-[calc(100vh-250px)] w-full object-cover md:h-[500px] md:min-h-[unset]"
                          key={index}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill={true}
                            className=" h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center rounded-xl bg-black px-4 py-2 text-xs font-light text-white md:text-2xl">
                    {selectedIndex + 1} / {slides.length}
                  </div>
                </div>
                <div className="md:mx-16">
                  <div className="my-4 h-[2px] w-full bg-isf md:my-6"></div>
                </div>
                <div>
                  <div className=" flex items-center  gap-4 overflow-hidden md:mx-16">
                    <ScrollContainer
                      horizontal={true}
                      className="scroll-container flex  items-center gap-4 "
                    >
                      {allCategoriesLoaded && allCategroies.length > 0 ? (
                        allCategroies.map((cat, index) => (
                          <button
                            onClick={() => handleActiveCategory(cat.name)}
                            className={clsx(
                              "  whitespace-nowrap px-4 py-2 text-2xs font-normal uppercase md:text-base",
                              category == cat.name
                                ? "bg-iblack text-white"
                                : "border border-isf",
                            )}
                            key={index}
                          >
                            {cat.name.includes("-")
                              ? cat.name.replace("-", " & ")
                              : cat.name}
                            &nbsp; ({cat.count})
                          </button>
                        ))
                      ) : (
                        <p>loading</p>
                      )}
                    </ScrollContainer>
                  </div>
                  <div className="relative my-6 overflow-hidden md:mx-16">
                    <div className="" ref={emblaRef2}>
                      <div className="embla__container  ">
                        {slides.map((image, index) => (
                          <div
                            className="embla__slide relative mx-2 h-[75px] basis-[100px] cursor-pointer  overflow-hidden rounded-4 first:mr-2 md:h-[150px] md:basis-[200px]"
                            key={index}
                            onClick={() => {
                              emblaApi.scrollTo(index);
                              setCategory(image.category);
                            }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill={true}
                              className=" w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default DialogComponenet;