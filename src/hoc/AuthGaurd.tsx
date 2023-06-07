import Loading from "@/Components/Loading/Loading";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
console.log("this user in onAuth", { user: "user info" });

function AuthGaurd(Component: any) {
  return function GAURD(props: any) {
    const [userData, setUserData] = useState<any>(false);

    useEffect((): any => {
      const unsubcribe = onAuthStateChanged(auth, (user) => {
        console.log("this user in onAuth", user);
        if (user) {
          setUserData({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          });
        } else {
          setUserData(null);

        }
      });

      return () => unsubcribe;
    }, []);

    // console.log("this userData", userData);

    return userData ? (
      <Component {...props} userData={userData} />
    ) : (
      <Loading />
    );
  };
}

export default AuthGaurd;
