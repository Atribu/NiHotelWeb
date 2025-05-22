"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

// ModalPortal Componenti: Modal içeriği body içerisine taşır.
const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-screen lg:w-[715px] lg:h-[651px] bg-[rgba(0,0,0,0.65)] backdrop-blur-[10px]"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
    // hasMounted state'i ekliyoruz
    const [hasMounted, setHasMounted] = useState(false);
  const buttonsData = [
    { id: 0, label: "Çerez Politikası" },
    { id: 1, label: "Çerez Açıklama Metni" },
    { id: 2, label: "Çerezler Nedir?" },
  ];

  const [selectedContent, setSelectedContent] = React.useState(0);

  // Aktif butonu listenin başına alacak şekilde yeniden sıralama
  const orderedButtons = [
    buttonsData.find((btn) => btn.id === selectedContent),
    ...buttonsData.filter((btn) => btn.id !== selectedContent),
  ];

  const [cookies, setCookies] = useState({
    necessary: true, // Zorunlu çerezler her zaman aktiftir.
    performance: false,
    functional: false,
    targeting: false,
  });

    // Sayfa yüklendiğinde tercihleri yükle
    useEffect(() => {
      setHasMounted(true);
      const savedPreferences = loadPreferences();
      if (savedPreferences) {
        // Tercihler kaydedilmişse popup'ı gösterme
        setIsVisible(false);
      } else {
        // Tercihler kaydedilmemişse popup'ı göster
        setIsVisible(true);
      }
    }, []);
  
    // Tercihleri kaydet ve popup'ı kapat
    const handleConfirm = () => {
      savePreferences(cookies);
      console.log("Kullanıcı Tercihleri Onaylandı:", cookies);
      setIsVisible(false);
    };

        // Tüm çerezleri kabul et ve popup'ı kapat
        const handleAcceptAll = () => {
          const allAccepted = {
            necessary: true,
            performance: true,
            functional: true,
            targeting: true,
          };
          setCookies(allAccepted);
          savePreferences(allAccepted);
          console.log("Tüm Çerezler Kabul Edildi:", allAccepted);
          setIsVisible(false);
        };
      
        // Tüm çerezleri reddet ve popup'ı kapat
        const handleDenyAll = () => {
          const allDenied = {
            necessary: true, // Zorunlu çerezler her zaman aktiftir
            performance: false,
            functional: false,
            targeting: false,
          };
          setCookies(allDenied);
          savePreferences(allDenied);
          console.log("Tüm Çerezler Reddedildi:", allDenied);
          setIsVisible(false);
        }
  const handleToggle = (type) => {
    setCookies((prevCookies) => ({
      ...prevCookies,
      [type]: !prevCookies[type],
    }));
  };

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  
  // Çerez silme fonksiyonu
  const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  
  // Çerez yükleme fonksiyonu
  const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };

  const savePreferences = (preferences) => {
    // Tercihleri çerez olarak kaydet
    setCookie("cookiePreferences", JSON.stringify(preferences), 365);
  
    // Konsola kaydedilen tercihleri yazdır
    console.log("Çerez Tercihleri Kaydedildi:", preferences);
    // Tercihlere göre çerezleri ayarla
    if (preferences.performance) {
      setCookie("performanceCookie", "active", 365);
      console.log("Performance Çerezi Aktif Edildi.");
    } else {
      deleteCookie("performanceCookie");
      console.log("Performance Çerezi Silindi.");
    }
    if (preferences.functional) {
      setCookie("functionalCookie", "active", 365);
      console.log("Functional Çerezi Aktif Edildi.");
    } else {
      deleteCookie("functionalCookie");
      console.log("Functional Çerezi Silindi.");
    }
    if (preferences.targeting) {
      setCookie("targetingCookie", "active", 365);
      console.log("Targeting Çerezi Aktif Edildi.");
    } else {
      deleteCookie("targetingCookie");
      console.log("Targeting Çerezi Silindi.");
    }
  };
  const loadPreferences = () => {
    const preferences = getCookie("cookiePreferences");
    if (preferences) {
      console.log("Kaydedilmiş Çerez Tercihleri Yüklendi:", JSON.parse(preferences));
      return JSON.parse(preferences);
    }
    console.log("Kaydedilmiş Çerez Tercihi Bulunamadı. Varsayılan Tercihler Kullanılıyor.");
    return null
  };
  const contents = [
    // third button
    <div className="flex flex-col h-full w-[96%] text-start font-heebo items-start justify-start  gap-[7.5px] overflow-y-auto thin-scrollbar max-h-[590px] ">
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6] pr-[2%]">
        <div
          onClick={() => setIsDropdown1Open(!isDropdown1Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown1Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px]">
          1. Zorunlu Çerezler
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 bg-[#dec7a6] `}
          onClick={() => handleToggle("necessary")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.necessary ? "translate-x-[16px]" : "translate-x-[14px]"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown1Open
            ? "max-h-[270px] min-h-[242px] lg:min-h-[140px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0 ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-heeboo leading-[150%] w-[92%] h-auto ">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo necessitatibus expedita suscipit nemo autem, illo dolores labore cumque ullam atque corrupti facilis tempore unde dignissimos beatae eum similique! Vitae.

        </p>
      </div>
      {/* 2.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6] pr-[2%]">
        <div
          onClick={() => setIsDropdown2Open(!isDropdown2Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown2Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          2. Pazarlama Çerezleri 
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.performance ? "bg-[#dec7a6]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("performance")}>
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.performance ? "translate-x-[16px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown2Open
            ? "max-h-[370px] min-h-[360px] lg:min-h-[205px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-heeboo leading-[150%]">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium corporis repellendus iste? Ut, voluptate repudiandae maiores corrupti assumenda commodi placeat. Quam ea ullam reprehenderit id sequi sint doloribus, consequatur ipsum!
        </p>
      </div>
      {/* 3.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6]">
        <div
          onClick={() => setIsDropdown3Open(!isDropdown3Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown3Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          3. Analitik Çerezler

          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.functional ? "bg-[#dec7a6]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("functional")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.functional ? "translate-x-[15px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown3Open
            ? "max-h-[370px] min-h-[360px] lg:min-h-[210px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-heeboo leading-[150%]">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste architecto illum cumque obcaecati quam repellat soluta esse cum odio laborum debitis assumenda, at quaerat! Eum delectus libero tempora dolore quaerat.

        </p>
      </div>
      {/* 4.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6]">
        <div
          onClick={() => setIsDropdown4Open(!isDropdown4Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown4Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          4. Fonksiyonel Çerezler
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.targeting ? "bg-[#dec7a6]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("targeting")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.targeting ? "translate-x-[15px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown4Open
            ? "max-h-[200px] min-h-[60px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`} >
        <p className="text-[#FFF] text-[13px] font-heeboo leading-[150%]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam omnis sit quae reprehenderit ex nobis totam sapiente facilis! Non iusto similique natus fugiat exercitationem vitae voluptatem architecto accusamus beatae!
        </p>
      </div>
    </div>,
    <div className="flex flex-col h-full w-[96%] ml-[2%] sm:w-[95%] lg:w-[99%] text-start text-[#FBFBFB] overflow-y-scroll overflow-x-hidden z-[9999] font-heeboo thin-scrollbar pr-[2.5%] lg:pr-[5%]">
      
      
    </div>,
    // second text
    <div className="flex flex-col h-full text-start items-start justify-start w-[96%]">
      <p className="text-[13px] font-normal leading-[150%] font-montserrat">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque reprehenderit laboriosam dolorem dolorum, cumque, praesentium beatae recusandae cupiditate, quo corrupti vitae iusto aspernatur magnam. Quia officiis tenetur magni sint.
      </p>
    </div>,
  ];
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
    // Eğer component henüz mount olmadıysa, hiçbir şey render etmeyelim.
    if (!hasMounted) {
      return null;
    }
  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0 bg-[rgba(29,29,27,0.70)] backdrop-blur-[10px] right-0 left-0 w-screen items-center justify-center">
        <div className="flex flex-col md:flex-row w-[94%] md:w-[99%] lg:w-[94%] xl:w-[80%] xl:max-w-[1270px] py-[25px] gap-[20px] font-montserrat text-center items-center justify-center text-[#FBFBFB] font-heeboo">
          <p className="md:hidden text-[13px] lg:text-[14px] leading-[130%] text-[#FBFBFB] font-normal font-heeboo text-center md:min-w-[39%] lg:w-[]">
            <span className="font-medium underline">Çerez Kullanıyoruz: </span>  İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerini kullanıyoruz.<br />
            <Link href="/" className="font-medium underline">
            Daha fazlasını oku{" "}
            </Link>
            çerezler hakkında</p>
          <div className="md:flex hidden text-[14px] leading-[130%] text-[#FBFBFB] font-normal font-heeboo text-center xl:text-start sm:w-[45%] md:min-w-[38%] ml-[2%] ">
            <p>
              <span className="font-medium underline">Çerez Kullanıyoruz: </span> İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerini kullanıyoruz.
              <Link href="/" className="font-medium underline">
              Daha fazlasını oku{" "}
              </Link>
              çerezler hakkında
            </p>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-row md:gap-[20px] xl:gap-[30px] w-full items-center justify-center gap-[13px] lg:gap-[1vw] mr-[2%]  ">
            <button
              className="text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer  "
              onClick={handleDenyAll}>
            Tüm Çerezleri Reddet
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex lg:hidden text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] md:px-[20px] cursor-pointer  ">
             Tüm Çerezleri Kabul Et
            </button>
            <button
              onClick={handleModalToggle}
              className="text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer col-span-2 ">
              Çerez Tercihlerini Yönet
            </button>
            <button
              onClick={handleAcceptAll}
              className="hidden lg:flex text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] md:px-[20px] cursor-pointer  ">
              Tüm Çerezleri Kabul Et
            </button>
            {isModalOpen && (
              <ModalPortal onClose={handleModalToggle}>
                <div className="flex flex-col items-center justify-center gap-[15px] lg:gap-[39px]">
                  <div className="flex w-[90%] items-start justify-between lg:mt-[27px] lg:gap-[23px] mt-[10%] md:mt-[83px] lg:h-[39px] h-[52px]">
                   
                    <div className="hidden lg:flex flex-row w-[98%] md:w-[90%] lg:w-auto text-center items-center text-[16px] font-bold ml-[11%] lg:ml-0 gap-[23px] h-[29px]">
                      {[
                        "Çerez Politikası",
                        "Çerez Açıklama Metni",
                        "Çerezler Nedir?",
                      ].map((buttonLabel, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedContent(index)}
                          className={
                            selectedContent === index
                              ? "text-white text-[15px] lg:text-[16px] font-heeboo leading-normal font-medium w-[60%] max-w-[191px] cursor-pointer p-[10px] border-b  whitespace-nowrap  items-start justify-start text-start underline] h-[48px] lg:h-[37px]"
                              : " text-[15px] lg:text-[16px] font-heeboo leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer p-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px]"}>
                          {buttonLabel}
                        </button>
                      ))}
                    </div>
                    <button
                      className="flex text-[40px] text-stoneLight text-white items-center justify-center h-full"
                      onClick={handleModalToggle}>
                      <RxCross2 size={24} color="#fff" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center pb-2 lg:pb-0 md:h-[100%] text-[#FBFBFB] max-w-screen  h-auto">
                    <div className="flex flex-col w-[95%] lg:w-[100%] justify-center items-center lg:items-start lg:justify-start gap-[14.5px] lg:gap-[15px] ">
                      <div className="flex flex-row lg:hidden text-start text-[16px] lg:-ml-[4%] font-bold gap-[10px] w-[90%] lg:w-[100%] lg:mb-[36px] items-center justify-start overflow-x-auto scrollbar-thin">
                        {orderedButtons.map((button) => (
                          <button
                            key={button.id}
                            onClick={() => setSelectedContent(button.id)}
                            className={
                              selectedContent === button.id
                                ? "text-white text-[15px] lg:text-[16px] font-heeboo leading-normal font-medium w-fit cursor-pointer pt-[10px] px-[10px] border-b whitespace-nowrap items-start justify-start text-start h-[48px] lg:h-[37px]"
                                : "text-[15px] lg:text-[16px] font-heeboo leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer pt-[10px] px-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px] w-fit"
                            }
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                      {/* Dinamik Başlık */}
                      <button className="hidden lg:flex text-[16px] font-medium text-[#FBFBFB] font-heeboo leading-normal border-b border-[#FBFBFB] lg:ml-[7%]">
                        {["Çerez Politikası", "Çerez Açıklama Metni","Çerezler Nedir?", ][selectedContent] }
                      </button>
                      <div className="flex flex-col w-[88%] h-[54vh] md:h-[55vh] lg:h-[376px] lg:w-[85%] ml-[2%] lg:ml-[7%] mt-[2vw] lg:mt-0 items-start justify-start text-start ">
                        {/* Dinamik Başlık */}
                        {/* İçerik */}
                        {contents[selectedContent]}
                      </div>
                      <div className="hidden lg:flex items-center justify-center w-[100%] gap-[13px] lg:gap-[37px] mb-[20px] lg:mt-[21.5px] lg:mb-6 font-heeboo">
                        <button onClick={handleDenyAll} className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[170px]">
                        Tüm Çerezleri Reddet
                        </button>
                        <button onClick={handleAcceptAll} className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[184px]">
                        Tüm Çerezleri Kabul Et
                        </button>
                      </div>
                      <div className="absolute bottom-[14vh] sm:bottom-[12%] flex lg:hidden items-center justify-center w-[100%] gap-[13px] font-heeboo">
                        <button onClick={handleDenyAll} className="text-[12px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[170px] w-[44vw]">
                        Tüm Çerezleri Reddet
                        </button>
                        <button onClick={handleAcceptAll} className="text-[12px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[184px] w-[44vw]">
                        Tüm Çerezleri Kabul Et
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalPortal>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;