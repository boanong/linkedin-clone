import { initializeApp } from '@firebase/app';
import './page.css'
import authGuard from './service/authGuard';
import { initFirebase } from '@/firebase/config';
import { SubmitBtn } from '@/Components/Atoms/Atoms';
import { getAuth, signOut } from 'firebase/auth';

function Home() {
  const app = initFirebase();
  const auth = getAuth(app);
  return (
    <main>
      <h1>Welcome home</h1>
      <SubmitBtn onClick={() => signOut(auth)}>Log out</SubmitBtn>
    </main>
  );
}

export default authGuard(Home);