import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/null.css";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
