"use client";

import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

const CONNEXEASE_INTEGRATION_ID = "4f1a355a-e8ea-4773-a781-24132afb3f6d";
const CONNEXEASE_WIDGET_INTEGRATION_ID = "6a58ae2f153f6ba0e8916e07";

const messageIconUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
  <circle cx="29" cy="29" r="28" fill="#0A0D36"/>
  <circle cx="29" cy="29" r="27.25" fill="none" stroke="rgba(255,255,255,0.74)" stroke-width="1.5"/>
  <path d="M18.5 27.25c0-5.15 4.7-9.25 10.5-9.25s10.5 4.1 10.5 9.25-4.7 9.25-10.5 9.25c-1.34 0-2.62-.22-3.79-.64l-5.21 2.14 1.4-4.43c-1.82-1.66-2.9-3.87-2.9-6.32Z" fill="none" stroke="#FFFFFF" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="25" cy="27.5" r="1.25" fill="#FFFFFF"/>
  <circle cx="29" cy="27.5" r="1.25" fill="#FFFFFF"/>
  <circle cx="33" cy="27.5" r="1.25" fill="#FFFFFF"/>
</svg>
`)}`;

const liveChatBootstrapScript = `
(function () {
  if (!window.__teonaConnexeaseConsent) {
    return;
  }

  if (window.__teonaConnexeaseLiveChatStarted) {
    return;
  }

  window.__teonaConnexeaseLiveChatStarted = true;

  var publicIntegrationId = ${JSON.stringify(CONNEXEASE_INTEGRATION_ID)};
  var widgetIntegrationId = ${JSON.stringify(CONNEXEASE_WIDGET_INTEGRATION_ID)};
  var messageIconUrl = ${JSON.stringify(messageIconUrl)};
  var settingsUrl = "https://cdn.allinone.connexease.com/livechat/settings/" + publicIntegrationId + ".json";

  function deepMerge(target, source) {
    target = target || {};

    Object.keys(source || {}).forEach(function (key) {
      var value = source[key];

      if (value && typeof value === "object" && !Array.isArray(value)) {
        target[key] = deepMerge(target[key] && typeof target[key] === "object" ? target[key] : {}, value);
      } else {
        target[key] = value;
      }
    });

    return target;
  }

  function loadConnexeaseHost() {
    if (window.Connexease && window.Connexease.VERSION) {
      return;
    }

    !function(o,d,s,f){var a,c,i,p=[],h=[];function e(){var n="You must provide a supported major version.";try{if(!f)throw new Error(n);var e,t="https://cdn.livechat.connexease.com/",r="connexease";e="string"==typeof this.response?JSON.parse(this.response):this.response;var o=f.match(/([0-9]+).?([0-9]+)?.?([0-9]+)?/),s=o&&o[1],a=o&&o[2],c=o&&o[3],i=e["v"+s],p=e["v"+s+"."+a+".patch"];if(e.url||i||p){var h=d.getElementsByTagName("script")[0],u=d.createElement("script");if(u.async=!0,c)u.src=p||t+r+"."+f+".min.js";else{if(!(1<=s&&i))throw new Error(n);u.src=i}h.parentNode.insertBefore(u,h)}}catch(e){e.message===n&&console.error(e)}}o[s]={init:function(){a=arguments;var n={then:function(e){return h.push({type:"t",next:e}),n},catch:function(e){return h.push({type:"c",next:e}),n}};return n},on:function(){p.push(arguments)},render:function(){c=arguments},destroy:function(){i=arguments}},o.__onWebMessengerHostReady__=function(e){if(delete o.__onWebMessengerHostReady__,o[s]=e,a)for(var n=e.init.apply(e,a),t=0;t<h.length;t++){var r=h[t];n="t"===r.type?n.then(r.next):n.catch(r.next)}c&&e.render.apply(e,c),i&&e.destroy.apply(e,i);for(t=0;t<p.length;t++)e.on.apply(e,p[t])};var n=new XMLHttpRequest;n.addEventListener("load",e),n.open("GET","https://cdn.livechat.connexease.com/loader.json",!0),n.responseType="json",n.send()}(window,document,"Connexease","1");
  }

  function initConnexease(settings, integrationId) {
    if (!window.__teonaConnexeaseConsent) {
      return;
    }

    loadConnexeaseHost();

    var finalSettings = deepMerge({
      businessName: "Teona Hotel",
      businessIconUrl: messageIconUrl,
      buttonIconUrl: messageIconUrl,
      buttonWidth: "58",
      buttonHeight: "58",
      displayStyle: "button",
      locale: "tr",
      watermark: false,
      customColors: {
        brandColor: "0A0D36",
        conversationColor: "C1D7FA",
        actionColor: "0A0D36"
      }
    }, settings || {});

    finalSettings.businessIconUrl = messageIconUrl;
    finalSettings.buttonIconUrl = messageIconUrl;
    finalSettings.buttonWidth = "58";
    finalSettings.buttonHeight = "58";

    window.Connexease.init({
      integrationId: integrationId || widgetIntegrationId,
      ...finalSettings
    });
  }

  fetch(settingsUrl, { method: "GET" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Connexease settings could not be loaded");
      }

      return response.json();
    })
    .then(function (data) {
      if (!window.__teonaConnexeaseConsent) {
        return;
      }

      var settings = data && data.setting && data.setting.default_settings ? data.setting.default_settings : {};
      initConnexease(settings, data && data.integration_id);
    })
    .catch(function () {
      if (!window.__teonaConnexeaseConsent) {
        return;
      }

      initConnexease({}, widgetIntegrationId);
    });
})();
`;

export default function ConnexeaseLiveChat() {
  const { preferences } = useCookieConsent();
  const isLiveSupportEnabled = preferences.liveSupport;

  useEffect(() => {
    if (!isLiveSupportEnabled) {
      window.__teonaConnexeaseConsent = false;

      if (
        window.Connexease &&
        typeof window.Connexease.destroy === "function"
      ) {
        window.Connexease.destroy();
      }

      document.getElementById("web-messenger-container")?.remove();
      document.getElementById("connexease-livechat-bootstrap")?.remove();
      window.__teonaConnexeaseLiveChatStarted = false;
      window.__teonaConnexeaseOpenWhenReady = false;
      return undefined;
    }

    window.__teonaConnexeaseConsent = true;

    document.getElementById("connexease-livechat-bootstrap")?.remove();
    const bootstrapScript = document.createElement("script");
    bootstrapScript.id = "connexease-livechat-bootstrap";
    bootstrapScript.textContent = liveChatBootstrapScript;
    document.body.appendChild(bootstrapScript);

    const trackedIframes = new WeakSet();

    function openLiveChat() {
      if (window.Connexease && typeof window.Connexease.open === "function") {
        window.Connexease.open();
        return;
      }

      window.__teonaConnexeaseOpenWhenReady = true;
    }

    function syncLiveChatLayout() {
      const iframe = document.getElementById("web-messenger-container");
      const launcher = document.getElementById("teona-livechat-launcher");

      if (iframe instanceof HTMLIFrameElement && !trackedIframes.has(iframe)) {
        trackedIframes.add(iframe);
        iframe.addEventListener(
          "load",
          () => {
            iframe.dataset.teonaWidgetReady = "true";
            syncLiveChatLayout();
          },
          { once: true },
        );
      }

      const iframeRect =
        iframe instanceof HTMLElement ? iframe.getBoundingClientRect() : null;
      const isChatWindowOpen =
        iframeRect !== null && iframeRect.width >= 280 && iframeRect.height >= 260;
      const shouldShowNativeWidget =
        iframe instanceof HTMLElement &&
        iframe.dataset.teonaWidgetReady === "true" &&
        isChatWindowOpen;

      if (launcher) {
        const nextOpacity = shouldShowNativeWidget ? "0" : "1";
        const nextPointerEvents = shouldShowNativeWidget ? "none" : "auto";
        const nextAriaHidden = shouldShowNativeWidget ? "true" : "false";

        if (launcher.style.opacity !== nextOpacity) {
          launcher.style.opacity = nextOpacity;
        }

        if (launcher.style.pointerEvents !== nextPointerEvents) {
          launcher.style.pointerEvents = nextPointerEvents;
        }

        if (launcher.getAttribute("aria-hidden") !== nextAriaHidden) {
          launcher.setAttribute("aria-hidden", nextAriaHidden);
        }
      }

      if (window.__teonaConnexeaseOpenWhenReady && window.Connexease && typeof window.Connexease.open === "function") {
        window.__teonaConnexeaseOpenWhenReady = false;
        window.Connexease.open();
      }

      if (!(iframe instanceof HTMLElement)) {
        return;
      }

      const nativeOpacity = shouldShowNativeWidget ? "1" : "0";
      const nativePointerEvents = shouldShowNativeWidget ? "auto" : "none";

      if (iframe.style.opacity !== nativeOpacity) {
        iframe.style.opacity = nativeOpacity;
      }

      if (iframe.style.pointerEvents !== nativePointerEvents) {
        iframe.style.pointerEvents = nativePointerEvents;
      }

      const nativeAriaHidden = shouldShowNativeWidget ? "false" : "true";

      if (iframe.getAttribute("aria-hidden") !== nativeAriaHidden) {
        iframe.setAttribute("aria-hidden", nativeAriaHidden);
      }

      const rect = iframeRect ?? iframe.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const isCompactGreeting = rect.width > 100 && rect.height <= 200;

      if (isMobile && isCompactGreeting) {
        if (iframe.style.bottom !== "5.75rem") {
          iframe.style.bottom = "5.75rem";
        }

        if (iframe.dataset.teonaAdjusted !== "true") {
          iframe.dataset.teonaAdjusted = "true";
        }
      } else if (!isMobile) {
        if (iframe.style.bottom !== "1rem") {
          iframe.style.bottom = "1rem";
        }

        if (iframe.dataset.teonaAdjusted !== "desktop") {
          iframe.dataset.teonaAdjusted = "desktop";
        }
      } else if (iframe.dataset.teonaAdjusted === "true") {
        iframe.style.removeProperty("bottom");
        delete iframe.dataset.teonaAdjusted;
      } else if (iframe.dataset.teonaAdjusted === "desktop") {
        iframe.style.removeProperty("bottom");
        delete iframe.dataset.teonaAdjusted;
      }
    }

    const launcher = document.getElementById("teona-livechat-launcher");
    const interval = window.setInterval(syncLiveChatLayout, 200);
    const observer = new MutationObserver(syncLiveChatLayout);

    launcher?.addEventListener("click", openLiveChat);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", syncLiveChatLayout);
    syncLiveChatLayout();

    return () => {
      launcher?.removeEventListener("click", openLiveChat);
      window.clearInterval(interval);
      observer.disconnect();
      window.removeEventListener("resize", syncLiveChatLayout);
      window.__teonaConnexeaseConsent = false;

      if (
        window.Connexease &&
        typeof window.Connexease.destroy === "function"
      ) {
        window.Connexease.destroy();
      }

      document.getElementById("web-messenger-container")?.remove();
      document.getElementById("connexease-livechat-bootstrap")?.remove();
      window.__teonaConnexeaseLiveChatStarted = false;
      window.__teonaConnexeaseOpenWhenReady = false;
    };
  }, [isLiveSupportEnabled]);

  if (!isLiveSupportEnabled) {
    return null;
  }

  return (
    <button
      id="teona-livechat-launcher"
      type="button"
      aria-label="Mesaj gönder"
      className="fixed bottom-4 right-5 z-[60] inline-flex h-13 w-13 items-center justify-center rounded-full border border-white bg-black/70 text-white shadow-lg transition hover:border-black hover:bg-white hover:text-[#b99b6c] lg:right-7 lg:h-15 lg:w-15"
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6" />
      <span aria-hidden="true" className="pulse-ring absolute inset-[-1px] rounded-full border border-white" />
    </button>
  );
}
