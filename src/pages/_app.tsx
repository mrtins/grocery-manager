import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/organisms/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
