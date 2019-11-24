export const screen = {
  phone: (...args) => {
    const styles = args
    return `@media (min-width:576px){
      ${styles};
    }`
  },

  tablet: (...args) => {
    const styles = args
    return `@media (min-width:780px){
      ${styles};
    }`
  },

  desktopSmall: (...args) => {
    const styles = args
    return `@media (min-width:992px){
      ${styles};
    }`
  },

  desktopLarge: (...args) => {
    const styles = args
    return `@media (min-width:1200px){
      ${styles};
    }`
  },
}


