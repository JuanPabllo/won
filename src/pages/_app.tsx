import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Won</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="change after" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
