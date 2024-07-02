import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { AuthProvider } from "../src/context/AuthContext";
import store from "../src/store";
import metaDataJson from '../public/assets/meta/metadata.json';

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Fragment>
          <Head>
            <title>{metaDataJson?.[pageProps.metaQry]?.meta_title || 'Home '}</title>

            <meta name="description" content={metaDataJson?.[pageProps.metaQry]?.meta_description || 'Default Description'} />
            <meta name="keywords" content={metaDataJson?.[pageProps.metaQry]?.meta_keywords || 'Default, keywords'} />

            <link
              rel="shortcut icon"
              href="favicon.ico"
              type="image/ico"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      </AuthProvider>
    </Provider>
  );
};
export default MyApp;
