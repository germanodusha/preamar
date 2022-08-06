/* eslint-disable @next/next/no-title-in-document-head */
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

        <title>PREAMAR</title>
        <meta name="title" content="PREAMAR"/>
        <meta name="description" content="PREAMAR é um projeto de ações artísticas em rede a partir do Maranhão."/>
        <meta name="keywords" content=" preamar, arte, maranhão, são luis, alcântra, projetos, artísticos, chão slz, lima galeria, centro histórico, maranhão, artistas, obras, contemporânea"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://preamaremrede.org/"/>
        <meta property="og:title" content="PREAMAR"/>
        <meta property="og:description" content="PREAMAR é um projeto de ações artísticas em rede a partir do Maranhão."/>
        <meta property="og:image" content="/meta-photo.png"/>


        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://preamaremrede.org/"/>
        <meta property="twitter:title" content="PREAMAR"/>
        <meta property="twitter:description" content="PREAMAR é um projeto de ações artísticas em rede a partir do Maranhão."/>
        <meta property="twitter:image" content="/meta-photo.png"/>
        </Head>
        <NextScript />
        <body>
          <Main />
        </body>
      </Html>
    )
}
export default MyDocument