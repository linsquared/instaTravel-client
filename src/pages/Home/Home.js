import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// img,  pages and components
import './Home.scss'
import Header from '../../components/Header/Header';
import pin from '../../assets/icons/pin.png';
import GuestHome from '../../components/GuestHome/GuestHome'

const Home = ({ highestRated }) => {
    // set states
    const [user, setUser] = useState('')
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
            <main className="home">
                <Header value={'Log in'} />
                {/* // possibly an icon of the person who logged in */}
                <GuestHome highestRated={highestRated} />
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
        <main className="home">
            <Header value={'Log out'} func={handleLogout} />
        </main>
    )
}

export default Home