// components/ChatWidget.jsx
"use client";

import React, { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // 1) Embed script'i ekle
    const script = document.createElement("script");
    script.src = "https://cdn.livechat.connexease.com/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // 2) Script yüklendiğinde başlat
    script.onload = () => {
      window.ConnexeaseWebMessenger?.Init("5f90e4a6-6481-4263-b814-ec81ca1d4cde");
    };

    // 3) Unmount olduğunda temizle
    return () => {
      // a) Messenger'ı yok et
      window.ConnexeaseWebMessenger?.Destroy?.();

      // b) Widget container'ı DOM'dan kaldır
      const container =
        document.getElementById("ConnexeaseWebMessenger") ||
        document.querySelector(".connexease-web-messenger") ||
        document.querySelector(".cew-container");
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }

      // c) Script etiketini kaldır
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
