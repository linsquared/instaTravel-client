import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";

export default function UserContextProvider(props) {
    const [user, setUser] = useState('');

    const contextValue = useMemo(() => ({
        user,
        userLogin: (user) => {
            setUser(user)
        },

        userLogout: (user) => {
            setUser(null)
        },
    }), [user])

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}