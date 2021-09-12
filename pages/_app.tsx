import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";

import "styles/globals.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
