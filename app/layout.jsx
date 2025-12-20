import '@/index.css'
import '@/App.css'
import LoadingWrapper from './LoadingWrapper'

export const metadata = {
    title: 'GDC - Game Development Club',
    description: 'Official website of Game Development Club',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" async></script>
                <link rel="icon" type="image/svg+xml" href="/src/assets/newlogo_crop.png" />
                <link rel="preload" href="/src/fonts/drover/drover.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            </head>
            <body>
                <LoadingWrapper>{children}</LoadingWrapper>
            </body>
        </html>
    )
}
