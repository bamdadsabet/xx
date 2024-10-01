import { CSSRuleObject } from 'tailwindcss/types/config'

export const screens = {
  sm: '100%',
  lg: '1568px',
}

export const fontFamily = {
  Inter: 'Inter',
  'PT-Mono': 'PT Mono',
}

export const fontSize = {
  4: '4rem',
  2.5: '2.5rem',
  2: '2rem',
  1.75: '1.75rem',
  1.5: '1.5rem',
  1.25: '1.25rem',
  1.125: '1.125rem',
  1: '1rem',
  0.875: '0.875rem',
  0.75: '0.75rem',
  0.6875: '0.6875rem',
  0.625: '0.625rem',
}
export const lineHeight = {
  160: '160%',
  140: '140%',
  120: '120%',
}
export const textClasses = {
  'Heading-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.5'],
  },
  'Heading-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.5'],
  },
  'Heading-3': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.5'],
  },
  'Heading-4': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.25'],
  },
  'Heading-5': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.25'],
  },
  'Heading-6': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.25'],
  },
  'Display-XL-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 900,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['4'],
  },
  'Display-XL-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['2.5'],
  },
  'Display-XL-3': {
    fontFamily: fontFamily.Inter,
    fontWeight: 300,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['2.5'],
  },
  'Display-LG': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['2'],
  },
  'Display-MD': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['2'],
  },
  'Display-SM': {
    fontFamily: fontFamily.Inter,
    fontWeight: 300,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['2'],
  },
  'Display-XS': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['120'],
    fontSize: fontSize['1.75'],
  },
  'Body-XL-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['1.125'],
  },
  'Body-XL-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['1'],
  },
  'Body-LG-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['1'],
  },
  'Body-LG-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['1'],
  },
  'Body-LG-3': {
    fontFamily: fontFamily.Inter,
    fontWeight: 300,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['1'],
  },
  'Body-MD-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['0.875'],
  },
  'Body-MD-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['0.875'],
  },
  'Body-SM-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['0.875'],
  },
  'Body-SM-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 300,
    lineHeight: lineHeight['160'],
    fontSize: fontSize['0.875'],
  },
  'Caption-LG-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.75'],
  },
  'Caption-LG-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.75'],
  },
  'Caption-LG-3': {
    fontFamily: fontFamily.Inter,
    fontWeight: 300,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.75'],
  },
  'Caption-MD-1': {
    fontFamily: fontFamily.Inter,
    fontWeight: 600,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.6875'],
  },
  'Caption-MD-2': {
    fontFamily: fontFamily.Inter,
    fontWeight: 500,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.6875'],
  },
  'Caption-SM': {
    fontFamily: fontFamily.Inter,
    fontWeight: 400,
    lineHeight: lineHeight['140'],
    fontSize: fontSize['0.625'],
  },
}

export const generateTextUtils = () => {
  const utils: CSSRuleObject = {}

  Object.entries(textClasses).forEach(([className, styles]) => {
    utils[`.text-${className}`] = {
      ...styles,
    }
  })

  return utils
}
