const colors = {
  white: '#FFFFFF',

  black: '#000000',
  darkBlack: '#333333',

  gray: '#DDDDDD',
  lightGray: '#EFEFEF',

  blue: '#197ddf',
  darkBlue: '#3019df',
  purple: '#5f0e70',

  darkText: '#333333',
  lightText: '#EFEFEF',
}
const gradients = {
  background: 'linear-gradient(315deg, rgba(95,14,112,1) 0%, rgba(25,125,223,1) 100%)'
}
const layout = {
  maxSiteWidth: '1920px',
  maxContentWidth: '1666px',
  horizontalEdgePadding: '6%',
  verticalEdgePadding: '1.5%',
  contentContainerPadding: '1rem',
}

const getClamp = (min,max) => {
  const slope = (max - min) / (1920 - 390);
  const yIntersection = -390 * slope + min;

  const preferredValue = `${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw`;

  return `clamp(${min}px, ${preferredValue}, ${max}px)`;

}
const typography = {
  family: {
    primary: 'verdana, sans-serif',
    secondary: 'arial, sans-serif',
  },
  
}


const layers = {}
const device = {
  iphones: '(max-width: 768px)',
  ipads: '(max-width: 1024px)',
  smallMacs: '(max-width: 1336px)',
  mediumMacs: '(max-width: 1666px)',
  largeMacs: '(max-width: 1800px)'
}

const theme = {
  colors,
  gradients,
  layout,
  typography,
  layers,
  device,
  container: {
    width: '100%',
    maxWidth: layout.maxSiteWidth,
    minHeight: '100vh',
    margin: '0 auto',
  },
  content: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    margin: '0 auto',
    paddingLeft: layout.horizontalEdgePadding,
    paddingRight: layout.horizontalEdgePadding,
    paddingTop: layout.verticalEdgePadding,
    paddingBottom: layout.verticalEdgePadding,
  },
  getClamp,
}

export default theme;
