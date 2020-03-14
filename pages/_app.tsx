import "../styles.css";
import App from "next/app";
import React from "react";
import withRematch, { Store } from "../lib/withRematch";
import { Provider } from "react-redux";

interface Props {
  reduxStore: Store;
}

class MyApp extends App<Props & any> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRematch(MyApp);
