import Typography from "typography"
// import deYoungTheme from "typography-theme-de-young"

const typography = new Typography({
  headerFontFamily: ['M PLUS Rounded 1c', 'Arial', 'sans-serif'],
  bodyFontFamily: ['M PLUS Rounded 1c', 'serif'],
})

export const { scale, rhythm, options } = typography
export default typography
