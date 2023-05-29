import type { AppProps } from 'next/app'

import '../styles.css'
import { AuthContextProvider } from '@/context/AuthContex'
import { useRouter } from 'next/router'
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute'

const noAuthRequired = ['/', '/Pages/signup', '/Pages/login']
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>  
        <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}
