import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "header": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "skills": "Skills",
        "projects": "Projects",
        "experience": "Experience",
        "contact": "Contact"
      }
    }
  },
  es: {
    translation: {
      "header": {
        "home": "Inicio",
        "about": "Sobre mí",
        "services": "Servicios",
        "skills": "Habilidades",
        "projects": "Proyectos",
        "experience": "Experiencia",
        "contact": "Contacto"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
