// components/HomePage.jsx
"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className='flex items-center justify-center w-screen h-[100vh] relative bg-cover bg-center '  >
    <div className='absolute inset-0 bg-black/10 z-[1]'></div>
    <video
      autoPlay
      loop
      muted
      playsInline
      className=" top-0 left-0 w-full h-full object-cover hidden lg:flex relative">
      <source 
        src="/videos/nihoteldesktop.mp4"
        type="video/mp4"
      />
      Tarayıcınız bu videoyu desteklemiyor.
      
    </video>

    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover flex lg:hidden"
    >
      <source 
        src="/videos/nihotelmobile.mp4"
        type="video/mp4"
      />
      Tarayıcınız bu videoyu desteklemiyor.
      
    </video>
    

     
  </div>
  );
}
