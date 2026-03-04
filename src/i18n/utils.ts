import { lang } from './ui'

const defaultLang = 'en'

type LangCode = keyof typeof lang

export function useTranslation(l: LangCode) {
  return function t(path: string | string[]) {
    const keys = Array.isArray(path) ? path : path.split('.')
    const get = (obj: any) => keys.reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj)
    return get(lang[l]) ?? get(lang[defaultLang]) ?? ''
  }
}
