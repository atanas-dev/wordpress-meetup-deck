import background from './static/background.png';

export const theme = {
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
  fonts: {
    heading: 'Montserrat',
  },
  styles: {
    Slide: {
      borderTop: '3px solid #5e75ff',
      borderBottom: '3px solid #5e75ff',
      background: '#FFFFFF url(' + background + ') no-repeat center bottom',
    },
  },
}