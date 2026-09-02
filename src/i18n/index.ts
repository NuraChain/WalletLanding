import { ar } from './ar'
import { en } from './en'
import { es } from './es'
import { fa } from './fa'
import { fr } from './fr'
import { hi } from './hi'
import type { LocaleCode } from './locales'
import { pt } from './pt'
import { ru } from './ru'
import { tr } from './tr'
import type { Content } from './types'
import { zh } from './zh'

export const content: Record<LocaleCode, Content> = { en, fa, ar, es, pt, hi, zh, ru, fr, tr }
