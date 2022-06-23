import Document, {  Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link'


class MyDocument extends Document {
    render() {
        return (
            <Html leng="en">
                <Head>
                    
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-SemiBold.ttf"
                        as="font"
                        crossOrigin="ananymous"
                    ></link>
                </Head>
                <body className="bg-gray-800">
                    <Main></Main>
                    <NextScript />

                </body>

                
            </Html>
        )
    }
}

export default MyDocument