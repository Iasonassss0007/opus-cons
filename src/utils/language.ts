export type Language = 'el' | 'en';

export const DEFAULT_LANGUAGE: Language = 'el';
export const SUPPORTED_LANGUAGES: Language[] = ['el', 'en'];

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'el';
}

export function addLanguageToPath(path: string, language: Language): string {
  if (language === 'el') {
    return path;
  }
  
  // Ensure path starts with / for proper URL construction
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/en${normalizedPath}`;
}

export function removeLanguageFromPath(path: string): string {
  if (path.startsWith('/en')) {
    return path.substring(3);
  }
  return path;
}

export function switchLanguage(pathname: string, targetLanguage: Language): string {
  const currentPath = removeLanguageFromPath(pathname);
  
  // Handle root path specially
  if (currentPath === '/') {
    return targetLanguage === 'en' ? '/en' : '/';
  }
  
  return addLanguageToPath(currentPath, targetLanguage);
}

export function getLanguagePrefix(language: Language): string {
  return language === 'en' ? '/en' : '';
}
