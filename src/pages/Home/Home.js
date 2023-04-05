import { useState } from 'react'
import './Home.scss'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

const Home = () => {
    const [error, setError] = useState('')

    return (
        <main className="main">
            <h1>This is the main page</h1>
            <Signup error={error} setError={setError} />
            <Login error={error} setError={setError} />
        </main>
    )
}

export default Home