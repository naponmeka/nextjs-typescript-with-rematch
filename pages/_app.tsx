import "../styles.css";
import withRematch, { Store } from "../lib/withRematch";
import { Provider } from "react-redux";
import { NextComponentType, NextPageContext } from "next";

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  reduxStore: Store;
}

const MyApp = ({ Component, pageProps, reduxStore }: Props) => {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRematch(MyApp);
