import Head from 'next/head';
import Error404Contents from 'src/contents/404';

function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Error404Contents />
    </>
  );
}

Error404.getLayout = function getLayout(page) {
  return page;
};

export default Error404;
