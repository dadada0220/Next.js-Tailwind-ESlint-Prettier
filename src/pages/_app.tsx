import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/templates/_Base/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
