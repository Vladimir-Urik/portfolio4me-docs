import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script defer data-domain="docs.portfolio4me.com" src="https://plausible.gggedr.lol/js/script.js"></Script>
        </>
    )
}