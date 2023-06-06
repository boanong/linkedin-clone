// import React, { useEffect } from 'react';
// import { useAuth } from '@/context/AuthContex';
// import { useRouter } from 'next/router';

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

//     const { user } = useAuth();
//     const router = useRouter()

//     useEffect(() => {
//         if(!user){
//             router.push('/Pages/login')
//         }
//     }, [router, user])
//     return <>
//     {user ? children : null}
//     </>
// }

// export default ProtectedRoute
