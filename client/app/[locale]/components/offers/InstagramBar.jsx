import React from "react";
import { FaInstagram } from "react-icons/fa";
import InoneLogo from "../../../../public/NiHotel.svg";
import Image from "next/image";
import { Jost } from "next/font/google";
import clsx from "clsx";
const fontJost = Jost({
  weights: [300, 400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

const InstagramBarColumn = ({ text1, text2, link }) => {
  return (
    <div className="flex flex-col">
      <span className="text-2xs font-medium uppercase sm:text-lg md:text-xs lg:text-lg">
        {text1}
      </span>
      {link ? (
        <a href={`https://www.instagram.com/${link}`} target="_blank">
          <span className="text-2xs  md:text-2xs lg:text-sm ">{text2}</span>
        </a>
      ) : (
        <span className="text-2xs  md:text-2xs lg:text-sm">{text2}</span>
      )}
    </div>
  );
};

function InstagramBar({ data }) {
  if (data.name.length > 20) {
    data.name = "Ni Hotel";
  }
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-4 bg-white p-4 text-xs font-normal lg:gap-8",
        fontJost.className,
      )}
    >
      <div className="flex items-center gap-3">
        <a
          target="_blank"
          rel="noreferrer noopener"
          // href={`https://www.instagram.com/${data.username}`}
          href="https://www.instagram.com"
          className="flex items-center justify-center "
        >
          <Image src={InoneLogo} alt="Inone Hotel" width={35} height={35} />
        </a>
        <InstagramBarColumn
          text1={data.name}
          text2={`@${data.username}`}
          link={data.username}
        />
      </div>
      <InstagramBarColumn text1={data.media_count} text2="Post" />
      <InstagramBarColumn text1={data.followers_count} text2="Follower" />
      <div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          // href={`https://www.instagram.com/${data.username}`}
            href="https://www.instagram.com"
          className="flex items-center justify-center gap-2 rounded-4 border bg-[#1F5F7A] px-4 py-2 text-white"
        >
          <FaInstagram className="text-lg " />
          <span className="text-xs"> Follow</span>
        </a>
      </div>
    </div>
  );
}

export default InstagramBar;