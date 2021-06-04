import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/*<Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400&family=Mr+Dafoe&display=swap" rel="stylesheet" />

        </Head>*/}
        <body className="">
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
