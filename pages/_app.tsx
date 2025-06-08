import '../styles/globals.css'
import '../styles/dark-theme.css'
import '../styles/editor-overrides.css'
import '../styles/no-borders.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../lib/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
