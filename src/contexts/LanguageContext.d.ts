// src/contexts/LanguageContext.d.ts
declare module '@/contexts/LanguageContext' {
  export interface LanguageContextType {
    language: string;
    translations: any;
    dir: string;
    toggleLanguage: () => void;
  }
  
  export function useLanguage(): LanguageContextType;

  export const LanguageProvider: React.FC<{ children: React.ReactNode }>;
}