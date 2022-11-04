import "../styles/global.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center bg-dark-gray">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
