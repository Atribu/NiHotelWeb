// components/HomePage.jsx
"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Desktop: sadece lg ve üstü */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
      >
        <source
          src="/videos/nihotelDesktop.mp4"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

      {/* Mobile: lg altı */}
      <video
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover block lg:hidden"
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
