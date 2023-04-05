// import style
import './Login.scss'

// import core stuff
import { useState } from 'react';
import { Link } from 'react-router-dom'

// import components & pages
import logo from '../../assets/logo/logo.png'
import FormInput from '../../components/FormInput/FormInput'
import FormLabel from '../../components/FormLabel/FormInput/FormLabel'
import Buttons from '../../components/Buttons/Buttons';

const Login = ({ error, setError }) => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const userLogin = (e) => {
        e.preventDefault()
        console.log('submitting login info...')
    }

    return (
        <main>
            <div className="login">
                <img src={logo} alt='logo icon' />
            </div>

            <form>
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