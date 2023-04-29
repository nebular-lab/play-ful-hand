import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#121212',
    rangeBg:'#3f3f3f',
    headline: '#F5F5F5',
    paragraph: '#F5F5F5',
    button: '#FBB6CE',
    buttonText: '#001858',
    buttonHover: '#cc6c91',
    stroke: '#7a8399',
    main: '#1E1E1E',
    highlight: '#fef6e4',
    secondary: '#8bd3dd',
    tertiary: '#f582ae',
  },

});
