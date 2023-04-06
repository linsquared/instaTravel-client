import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// impoer pages and components
import './Home.scss'

const Home = () => {
    // set states
    const [user, setUser] = useState(null)
    const [failedAuth, setFailedAuth] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            return setFailedAuth(true)
        }

        // get user profile from api
        axios
            .get('http://localhost:8080/users/current/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
                setFailedAuth(true)
            })
    }, [])

    // logout func
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setUser(null);
        setFailedAuth(true);
    };

    // redirect to log in
    if (failedAuth) {
        return (
            <main>
                <h1>Please log into your account</h1>
                <p><Link to='/login'>Log in</Link></p>
            </main>
        )
    }

    if (user === null) {
        return (<main>
            <h1>Loading...</h1>
        </main>
        )

    }

    return (
        <main className="main">
            <h1>Welcome back,{user.username}</h1>
            <h2>My profeile</h2>

            <button onClick={handleLogout}>Log out</button>
        </main>
    )
}

export default Home