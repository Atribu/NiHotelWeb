'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import BookSection from './BookSection'

export default function ChatLoader() {
  const locale = useLocale()

  // locale değiştikçe BookSection yeniden mount edilecek
  return <BookSection key={locale} />
}
