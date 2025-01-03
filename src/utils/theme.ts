// Theme configuration with CSS custom properties
export const theme = {
  colors: {
    primary: {
      light: '#60A5FA', // blue-400
      DEFAULT: '#3B82F6', // blue-500
      dark: '#2563EB', // blue-600
    },
    secondary: {
      light: '#A855F7', // purple-500
      DEFAULT: '#9333EA', // purple-600
      dark: '#7E22CE', // purple-700
    },
    background: {
      primary: '#0a192f',
      secondary: '#112240',
      card: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
      accent: '#60A5FA',
    },
  },
  spacing: {
    section: '8rem',
    container: '1536px',
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};