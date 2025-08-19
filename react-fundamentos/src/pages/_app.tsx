import "../app/globals.css";
import "../app/components.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App(props: any) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}
