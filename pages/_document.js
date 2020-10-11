import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="viewport" content="width=device, initial-scale=1"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <title>Spartankids Pre-school & Day care</title>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument