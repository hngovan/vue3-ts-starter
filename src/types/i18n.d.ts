import enUS from '@/locales/en-US.json'

// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof enUS

declare type DateTimeHumanReadable = 'long' | 'short' | 'narrow'
declare type DateTimeDigital = 'numeric' | '2-digit'
export interface DefineDateTimeFormat {
  short: {
    year?: DateTimeDigital
    month?: DateTimeDigital | DateTimeHumanReadable
    day?: DateTimeDigital
  }
  long: {
    year?: DateTimeDigital
    month?: DateTimeDigital | DateTimeHumanReadable
    day?: DateTimeDigital
    weekday?: DateTimeHumanReadable
    hour?: DateTimeDigital
    minute?: DateTimeDigital
  }
}

type CurrencyDisplay = 'symbol' | 'code' | 'name'
type notationDisplay = 'standard' | 'scientific' | 'engineering' | 'compact' | undefined
export interface DefineNumberFormat {
  currency: {
    style: 'currency'
    currency: string
    currencyDisplay?: CurrencyDisplay
    notation?: notationDisplay
    useGrouping?: boolean
  }
  decimal: {
    style?: 'decimal'
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    minimumSignificantDigits?: number
    maximumSignificantDigits?: number
  }
  percent: {
    style?: 'percent'
    useGrouping?: boolean
  }
}
