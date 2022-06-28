import Head from "next/head";

// Local Imports
import { wrapper } from "client/store/configureStore";

//Style Imports
import "styles/global.css"

// Component Imports
import { Layout } from "client/components/layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
