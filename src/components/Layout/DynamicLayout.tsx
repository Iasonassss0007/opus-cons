'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/components/Language/LanguageProvider';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({ children }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute based on current language
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
};
