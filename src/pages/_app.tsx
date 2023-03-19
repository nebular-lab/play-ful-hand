import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

import { AuthProvider } from '@/context/auth';
import { theme } from '@/styles/theme';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </AuthProvider>
  );
}
