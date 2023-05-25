/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';

export interface INamePageProps { children: any }

const authGuard: React.FunctionComponent<INamePageProps> = props => {
  const { children } = props;
  const auth = getAuth()
  const router = useRouter;
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log('Unauthorized');
      router.push('/login');
    }
  });

  if (loading) return <p>Loading...</p>

  return <>{children}</>
};

    export default authGuard;