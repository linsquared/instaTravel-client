// import style
import './Login.scss'

// import core stuff
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

// import components & pages
import logo from '../../assets/logo/logo.png'
import FormInput from '../../components/FormInput/FormInput'
import FormLabel from '../../components/FormLabel/FormInput/FormLabel'
import Buttons from '../../components/Buttons/Buttons';
import axios from 'axios';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const [loginRes, setLoginRes] = useState('')

    // control userlogin info
    const userLogin = (e) => {
        const { name, value } = e.target

        setLoginInfo(preval => ({
            ...preval, [name]: value
        }))
    }
    // navigate
    const navigate = useNavigate()

    // post the login info
    const loginSubmission = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/users/login', loginInfo)
            .then(res => {
                setLoginRes(res.data);
                sessionStorage.setItem("token", res.data.token);
                navigate('/')
            })
            .catch(err => {
                setLoginRes(err.response)
            })

    }

    return (
        <main>
            <div className="login">
                <img src={logo} alt='logo icon' />
            </div>
            {loginRes && <p>{loginRes}</p>}

            <form onSubmit={loginSubmission}>
                <div>
                    <FormLabel forfield={'username'} text={''} />
                    <FormInput
                        name={'username'}
                        type={'text'}
                        placeholder={'username'}
                        value={loginInfo.username}
                        onchange={userLogin} />
                </div>


                <div>
                    <FormLabel forfield={'password'} text={''} />
                    <FormInput
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        value={loginInfo.password}
                        onchange={userLogin} />
                </div>
                <Buttons type={'submit'} value={'Login'} />

            </form>
            <p>Need an account? <Link to='/signup'>Sign Up</Link></p>

        </main>
    )
}

export default Login