import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            http-equiv="Content-Security-Policy"
            content="
                            default-src * data: blob: ws: wss: gap://ready file://*;
                            style-src * 'unsafe-inline'; 
                            script-src * 'unsafe-inline' 'unsafe-eval';
                            connect-src * ws: wss:;"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
