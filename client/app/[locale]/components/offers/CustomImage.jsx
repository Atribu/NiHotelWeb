"use client";
import clsx from "clsx";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#fff" offset="20%" />
      <stop stop-color="#faeeee" offset="50%" />
      <stop stop-color="#fff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fff" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

export default function CustomImage({ src, alt, priority, fill, opacityLoad, className, width, height, sizes }) {
  let mandatoryProps = { src, alt, priority, placeholder: "blur", sizes: sizes ? sizes : "100vw" };
  //  if fill is true, add to mandatoryProps
  if (fill) {
    mandatoryProps.fill = true;
    mandatoryProps.placeholder = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;
  }
  //  if opacityLoad is true, add to mandatoryProps
  if (opacityLoad) {
    mandatoryProps.onLoad = (e) => e.target.classList.remove("opacity-0");
    className = "opacity-0 transition-all duration-300";
  }
  //  if width and height is true, add to mandatoryProps
  if (width && height) {
    mandatoryProps.width = width;
    mandatoryProps.height = height;
  }

  return <Image {...mandatoryProps} alt={alt} className={clsx("object-cover", className)} />;
}