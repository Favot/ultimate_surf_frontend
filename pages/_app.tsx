import '../styles/globals.css'
import Navbar from '../components/Navbar'

import { AuthProvider } from '../context/AuthContext'

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>

        <Navbar />
        <Component {...pageProps} />


    </AuthProvider>
    )

}
export default App

