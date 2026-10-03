import "@/styles/globals.css";
import { Manrope, DM_Serif_Display } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${serif.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
