import { Head, Html, Main, NextScript } from "next/document"

const MyDocument = () =>{
    return(
        <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon/favicon.ico"/>

        <link rel="android-chrome-192x192" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
        <link rel="android-chrome-512x512" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"/>
        <link rel="favicon-16x16" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="favicon-32x32" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        </Head>
        <NextScript />
        <body>
          <Main />
        </body>
      </Html>
    )
}
export default MyDocument