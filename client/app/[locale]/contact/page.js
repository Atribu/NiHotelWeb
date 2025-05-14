import React from 'react'
import ContactBanner from "./components/ContactBanner"
import ContactSection from './components/ContactSection'
import img from "../gallery/images/lobi/DSCF8651.webp"
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('Contact');
  
  return (
    <div>
      <ContactBanner image={img} header={t("header")}/>
      <ContactSection/>
    </div>
  )
}

export default Page
