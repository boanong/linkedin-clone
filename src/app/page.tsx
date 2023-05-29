import type { AppProps } from 'next/app'
import './page.css'
import { AuthContextProvider } from '@/context/AuthContex'
import Login from './Pages/login/page'
 
function Landing(props: any){
  return (
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  )
}

export default Landing
