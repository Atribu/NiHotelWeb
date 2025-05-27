// components/ConnexeaseLoader.jsx
"use client";

import Script from "next/script";

export default function ConnexeaseLoader() {
  return (
    <>
      <Script
        src="https://cdn.livechat.connexease.com/embed.js"
        strategy="afterInteractive"
        onError={() => console.warn("Connexease script yüklenemedi")}
      />
      <Script id="connexease-init" strategy="afterInteractive">
        {`
          if (window.ConnexeaseWebMessenger) {
            window.ConnexeaseWebMessenger.Init("5f90e4a6-6481-4263-b814-ec81ca1d4cde");
          } else {
            console.warn("ConnexeaseWebMessenger tanımlı değil");
          }
        `}
      </Script>
    </>
  );
}
