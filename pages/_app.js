import "../styles/global.scss";
import "../styles/navbar.scss";
import "../styles/home.scss";
import "../styles/latestPost.scss";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
