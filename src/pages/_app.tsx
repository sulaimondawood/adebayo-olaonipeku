import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CustomCursor from "@/components/cursor";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
