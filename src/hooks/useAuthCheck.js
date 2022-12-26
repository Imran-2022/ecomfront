import jwt_decode from 'jwt-decode'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../features/auth/authSlice";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.accessToken) {
                const decoded = jwt_decode(auth?.accessToken);
                const { email, name, exp } = decoded;
                
                // (new Date).getTime() -> time in millisecond.
                // return (new Date).getTime()<exp*1000// becasue exp in second . 

                if ((new Date()).getTime() <= exp * 1000) {
                    dispatch(
                        userLoggedIn({
                            accessToken: auth.accessToken,
                            user: { email, name },
                        })
                    );
                    setAuthChecked(true);
                } else {
                    dispatch(userLoggedOut());
                    localStorage.clear();
                }

            }
        }
    }, [dispatch, setAuthChecked]);

    return authChecked;
}
