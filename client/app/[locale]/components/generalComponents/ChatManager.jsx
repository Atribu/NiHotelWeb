// ChatManager.js - Sadece pozisyon düzeltme odaklı versiyon
"use client"
import { useEffect, useRef, useCallback } from 'react';
import { useLocale } from 'next-intl';

const ChatManager = () => {
  const locale = useLocale();
  const prevLocale = useRef(locale);
  const positionFixer = useRef(null);
  const mutationObserver = useRef(null);
  const isInitialized = useRef(false);

  // Iframe pozisyonunu düzelt
  const fixIframePosition = useCallback(() => {
    let fixed = false;

    // Ana iframe'i bul (ID ile)
    const iframe = document.getElementById('web-messenger-container');
    if (iframe) {
      const rect = iframe.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(iframe);
      
      // Eğer pozisyon yanlışsa (sol üst köşede vs.)
      if (rect.left < 100 || rect.top < 100 || computedStyle.position !== 'fixed') {
        console.log('Fixing iframe position...');
        
        // Pozisyonu zorla düzelt
        iframe.style.cssText = `
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          top: auto !important;
          left: auto !important;
          z-index: 999999 !important;
          transform: none !important;
          translate: none !important;
          margin: 0 !important;
          width: auto !important;
          height: auto !important;
        `;
        
        iframe.setAttribute('data-position-fixed', 'true');
        fixed = true;
      }
    }

    // Fallback: src ile ara
    const iframes = document.querySelectorAll('iframe[src*="connexease"], iframe[src*="livechat"]');
    iframes.forEach(iframe => {
      if (!iframe.getAttribute('data-position-fixed')) {
        const rect = iframe.getBoundingClientRect();
        
        if (rect.left < 100 || rect.top < 100) {
          iframe.style.cssText = `
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            top: auto !important;
            left: auto !important;
            z-index: 999999 !important;
            transform: none !important;
            translate: none !important;
            margin: 0 !important;
            width: auto !important;
            height: auto !important;
          `;
          iframe.setAttribute('data-position-fixed', 'true');
          fixed = true;
        }
      }
    });

    return fixed;
  }, []);

  // Chat'i yeniden başlat
  const reinitializeChat = useCallback(() => {
    console.log('Reinitializing chat for locale:', locale);
    
    // Mevcut chat'i temizleme
    const existingIframes = document.querySelectorAll('#web-messenger-container, iframe[src*="connexease"]');
    existingIframes.forEach(iframe => {
      iframe.remove();
    });

    // CSS temizliği
    const existingCSS = document.querySelectorAll('link[href*="connexease"]');
    existingCSS.forEach(link => link.remove());

    // ConnexeaseWebMessenger objesini temizle
    if (window.ConnexeaseWebMessenger) {
      try {
        if (typeof window.ConnexeaseWebMessenger.destroy === 'function') {
          window.ConnexeaseWebMessenger.destroy();
        }
        delete window.ConnexeaseWebMessenger;
      } catch (e) {
        console.warn('Error cleaning ConnexeaseWebMessenger:', e);
      }
    }

    // Yeni script yükle
    const script = document.createElement('script');
    script.src = 'https://cdn.livechat.connexease.com/embed.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Script reloaded');
      
      // Chat'i başlat
      const initChat = () => {
        if (window.ConnexeaseWebMessenger && window.ConnexeaseWebMessenger.Init) {
          try {
            window.ConnexeaseWebMessenger.Init('5f90e4a6-6481-4263-b814-ec81ca1d4cde', {
              position: 'bottom-right'
            });
            
            console.log('Chat reinitialized successfully');
            
            // Pozisyon kontrolünü başlat
            setTimeout(() => {
              startPositionMonitoring();
              fixIframePosition();
            }, 1000);
            
          } catch (error) {
            console.error('Chat reinit error:', error);
            setTimeout(initChat, 1000); // Tekrar dene
          }
        } else {
          setTimeout(initChat, 500); // ConnexeaseWebMessenger henüz yüklenmedi
        }
      };

      setTimeout(initChat, 300);
    };

    document.head.appendChild(script);
  }, [locale, fixIframePosition]);

  // Pozisyon izlemeyi başlat
  const startPositionMonitoring = useCallback(() => {
    // Interval temizle
    if (positionFixer.current) {
      clearInterval(positionFixer.current);
    }

    // Observer temizle
    if (mutationObserver.current) {
      mutationObserver.current.disconnect();
    }

    // Yeni interval başlat
    positionFixer.current = setInterval(() => {
      fixIframePosition();
    }, 500);

    // Yeni observer başlat
    mutationObserver.current = new MutationObserver((mutations) => {
      let needsFix = false;

      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && 
                (node.id === 'web-messenger-container' || 
                 (node.tagName === 'IFRAME' && node.src && node.src.includes('connexease')))) {
              needsFix = true;
            }
          });
        }

        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.id === 'web-messenger-container' ||
              (target.tagName === 'IFRAME' && target.src && target.src.includes('connexease'))) {
            needsFix = true;
          }
        }
      });

      if (needsFix) {
        setTimeout(fixIframePosition, 100);
      }
    });

    mutationObserver.current.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });
  }, [fixIframePosition]);

  // İlk yükleme
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      
      // İlk pozisyon kontrolü
      const checkInitialPosition = () => {
        const iframe = document.getElementById('web-messenger-container');
        if (iframe) {
          startPositionMonitoring();
          fixIframePosition();
        } else {
          setTimeout(checkInitialPosition, 500);
        }
      };

      setTimeout(checkInitialPosition, 2000);
    }
  }, [startPositionMonitoring, fixIframePosition]);

  // Locale değişimi
  useEffect(() => {
    if (prevLocale.current !== locale && isInitialized.current) {
      console.log('Locale changed from', prevLocale.current, 'to', locale);
      prevLocale.current = locale;
      
      // Chat'i yeniden başlat
      setTimeout(() => {
        reinitializeChat();
      }, 500);
    }
  }, [locale, reinitializeChat]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (positionFixer.current) {
        clearInterval(positionFixer.current);
      }
      if (mutationObserver.current) {
        mutationObserver.current.disconnect();
      }
    };
  }, []);

  // Sayfa focus olayları
  useEffect(() => {
    const handleFocus = () => {
      setTimeout(fixIframePosition, 200);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(fixIframePosition, 300);
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fixIframePosition]);

  return (
    <style jsx global>{`
      #web-messenger-container,
      iframe[id="web-messenger-container"] {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        top: auto !important;
        left: auto !important;
        z-index: 999999 !important;
        transform: none !important;
        translate: none !important;
        margin: 0 !important;
      }

      iframe[src*="connexease"] {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        top: auto !important;
        left: auto !important;
        z-index: 999999 !important;
      }

      @media (max-width: 768px) {
        #web-messenger-container,
        iframe[id="web-messenger-container"] {
          bottom: 15px !important;
          right: 15px !important;
        }
        
        /* Chat açık olduğunda tam ekran yap */
        #web-messenger-container[style*="width"],
        iframe#web-messenger-container[style*="width"],
        iframe[src*="connexease"][style*="width"],
        iframe[src*="livechat"][style*="width"] {
          width: 100vw !important;
          height: 100vh !important;
          top: 0 !important;
          left: 0 !important;
          bottom: 0 !important;
          right: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Chat widget'ı genişletildiğinde */
        #web-messenger-container.expanded,
        iframe#web-messenger-container.expanded,
        #web-messenger-container[data-expanded="true"],
        iframe#web-messenger-container[data-expanded="true"] {
          width: 100vw !important;
          height: 100vh !important;
          top: 0 !important;
          left: 0 !important;
          bottom: 0 !important;
          right: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Iframe içeriğinin tam ekranı kaplaması için */
        #web-messenger-container iframe,
        iframe#web-messenger-container iframe {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      }
      
      @media (max-width: 480px) {
        /* Küçük ekranlarda da tam ekran */
        #web-messenger-container[style*="width"],
        iframe#web-messenger-container[style*="width"],
        iframe[src*="connexease"][style*="width"],
        iframe[src*="livechat"][style*="width"],
        #web-messenger-container.expanded,
        iframe#web-messenger-container.expanded,
        #web-messenger-container[data-expanded="true"],
        iframe#web-messenger-container[data-expanded="true"] {
          width: 100vw !important;
          height: 100vh !important;
          top: 0 !important;
          left: 0 !important;
          bottom: 0 !important;
          right: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    `}</style>
  );
};

export default ChatManager;