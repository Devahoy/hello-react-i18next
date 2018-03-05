import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
  	fallbackLng: 'th',
  	ns: ['trans'],
  	defaultNS: 'trans',
  	debug: true,
  	interpolation: {
  		escapeValue: false
  	},
  	react: {
  		wait: true
  	}
  })

  export default i18n
  