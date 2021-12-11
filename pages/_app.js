import "../styles/global.scss";
import Navbar from "../components/navbar";
import { Layout } from "../styles/uielements";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
