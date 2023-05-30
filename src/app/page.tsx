import type { AppProps } from 'next/app'
import './page.css'
import { AuthContextProvider } from '@/context/AuthContex';
import Landing from './Pages/landing/page';

 
function Home(props: any){
  return (
    <AuthContextProvider>
      <Landing />
    </AuthContextProvider>
  )
}

export default Home
