import type { AppProps } from "next/app";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
        <Layout
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
    </SaasProvider>
  );
}

export default MyApp;
