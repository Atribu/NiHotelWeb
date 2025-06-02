// components/ContactFormModal.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FaTimes } from "react-icons/fa";

const ContactFormModal = ({ modalOpen, setModalOpen }) => {
  const t = useTranslations("ContactForm"); 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    policyAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ESC tuşuna basıldığında modal kapanması için:
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, setModalOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formData.policyAccepted) {
        throw new Error(t("errorAcceptPolicy"));
      }

      const messageContent = `
Hello! My name is ${formData.name}
Phone Number: ${formData.phone}
For communication: ${formData.email}
Message: ${formData.message}
We thank you.
      `;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: messageContent,
        }),
      });

      if (!response.ok) {
        throw new Error(t("errorSendFailed"));
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        policyAccepted: false,
      });
    } catch (err) {
      setError(err.message || t("errorGeneric"));
    } finally {
      setLoading(false);
    }
  };

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setModalOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative z-60 w-[90%] sm:w-[80%] md:w-[600px] lg:w-[900px] p-10 bg-white rounded-lg shadow-lg">
        {/* Header ve Close Butonu */}
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-2xl lg:text-[36px] font-['Cormorant_Garamond'] font-bold text-[#242424]">
            {t("contactUs")}
          </h3>
          <button
            onClick={() => setModalOpen(false)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FaTimes size={30} />
          </button>
        </div>

        {/* İçerik Form */}
        <form onSubmit={handleFormSubmit} className="px-6 py-6 space-y-4">
          {/* Ad Soyad / Name */}
     <div className="flex items-center justify-between gap-[2%]">
             <div className="w-[49%]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
               {t("labelName")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dec7a6] text-gray-700"
              required
            />
          </div>

          {/* Telefon / Phone */}
          <div className="w-[49%]">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
            {t("labelPhone")}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="555 555 55 55"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dec7a6] text-gray-700"
              required
            />
          </div>
     </div>

          {/* E-Mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
               {t("labelEmail")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dec7a6] text-gray-700"
              required
            />
          </div>

          {/* Mesaj / Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
               {t("labelMessage")}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={t("placeholderMessage")}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dec7a6] text-gray-700 resize-none"
              required
            />
          </div>

          {/* Hata ya da Başarı Mesajı */}
          {error && (
            <p className="text-sm text-red-600 font-medium">{error}</p>
          )}
          {success && (
            <p className="text-sm text-green-600 font-medium">
         {t("successMessage")}
            </p>
          )}

          {/* Gönder ve Politika */}
          <div className="flex items-center justify-start gap-3 lg:gap-4 mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex w-[50%] items-center justify-center text-[16px] lg:text-[20px] bg-[#dec7a6] text-white font-medium py-3 rounded-md transition-colors duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e0b990]"
              }`}
            >
              {loading ? t("sending") : t("sendButton")}
            </button>
            <label className="ml-4 flex items-center text-sm text-gray-800">
              <input
                type="checkbox"
                name="policyAccepted"
                checked={formData.policyAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-[#dec7a6] border-gray-300 rounded focus:ring-[#dec7a6] focus:ring-opacity-50"
              />
              <span className="ml-2 whitespace-nowrap">
                 {t("labelPolicy")}
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
