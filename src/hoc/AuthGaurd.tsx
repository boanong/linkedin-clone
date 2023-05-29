import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

function AuthGaurd(Component: any) {
    return function GAURD(props: any) {
        const [userData, setUserData] = useState<any>(false);

        useEffect(() => {
            const unsubcribe = onAuthStateChanged(auth, (user) => {

                console.log('this user in onAuth', user)
                if (user) {
                    setUserData({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    })
                } else {
                    setUserData(null)
                }
            })

            return () => unsubcribe();
        }, []);

        console.log('this userData', userData)

        return <Component {...props} userData={userData} />
    }
}

export default AuthGaurd
