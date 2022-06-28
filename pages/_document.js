import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="creators club" href="https://media-cdn.dovetailgames.com/2022/012022/01/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:wght@400;700|Lato:300,400,700&amp;display=swap" />
      </Head>
      <title>Creators Club</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}