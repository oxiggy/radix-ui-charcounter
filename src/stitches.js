import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
  theme: {
    colors: {
      info: 'CORNFLOWERBLUE'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
    },
    sizes: {
      full: '100%'
    }
  },
  media: {},
  utils: {
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  }
})
