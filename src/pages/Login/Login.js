// import style, imgs
import './Login.scss'
import close from '../../assets/icons/close.png'
import nosee from '../../assets/icons/cant_see.png'

// import core stuff
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

// import components & pages
import logo from '../../assets/logo/logo.png'
import FormInput from '../../components/FormInput/FormInput'
import FormLabel from '../../components/FormLabel/FormInput/FormLabel'
import Buttons from '../../components/Buttons/Buttons';
import axios from 'axios';

const Login = ({ error, setError, setSuccess, errMsg, setErrMsg }) => {
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

    // form validation 
    const validLogin = () => {
        if (!loginInfo.username ||
            !loginInfo.password) {
            setErrMsg(true)
            return false
        } return true
    }

    // post the login info
    // const loginSubmission = (e) => {
    //     if (validLogin()) {
    //         e.preventDefault()
    //         axios.post('http://localhost:8080/users/login', loginInfo)
    //             .then(res => {
    //                 console.log(res.data)
    //                 setLoginRes(res.data);
    //                 sessionStorage.setItem("token", res.data.token);
    //                 setSuccess(true)
    //                 setError('')
    //                 e.target.reset()
    //                 navigate('/')
    //             })
    //             .catch(err => {
    //                 setLoginRes(err.response)
    //                 setSuccess(false)
    //                 setError(err.response.data)

    //             })
    //     } else {
    //         console.log('please fill out all required field')
    //     }
    // }

    // post the login info
    const loginSubmission = (e) => {
        if (validLogin()) {
            e.preventDefault()
            axios.post('http://localhost:8080/users/login', loginInfo)
                .then(res => {
                    setLoginRes(res.data);
                    sessionStorage.setItem("token", res.data.token);
                    setSuccess(true)
                    setError('')
                    e.target.reset()
                    navigate('/')
                    console.log(res.data)
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        setErrMsg(true)
                        setError(err.response.data)
                    } else {
                        setLoginRes(err.response)
                        setSuccess(false)
                        setError(err.response.data)
                    }
                })
        } else {
            console.log('please fill out all required field')
        }
    }


    const backHome = () => {
        navigate('/')
    }

    return (
        <main className='login'>
            <img onClick={backHome} src={close} alt='close icon' className='login__close' />
            <div className="login__logo-wrapper">
                <img className='login__logo' src={logo} alt='logo icon' />
            </div>
            {loginRes && <p>{loginRes}</p>}

            <form onSubmit={loginSubmission} className='login__form'>
                <div className='login__user-wrapper'>
                    <img src={nosee} alt='cant see password icon' className='login__nosee' />
                    <FormInput
                        className="login__user"
                        name={'username'}
                        type={'text'}
                        placeholder={'Username'}
                        value={loginInfo.username}
                        onchange={userLogin} />
                </div>


                <div className='login__password'>
                    <FormInput
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        value={loginInfo.password}
                        onchange={userLogin} />
                </div>
                {/* error message */}
                {/* {errMsg && <p className='login__errMsg'>{error}</p>} */}
                {error && <div className='login__errMsg'>{error}</div>}
                <div className='login__btn-wrapper'><Buttons type={'submit'} name={'buttons'} value={'Login'} /></div>


            </form>

            <p className='login__footer'>Don't have an account? <Link to='/register' className='login__redirect'>Sign Up.</Link></p>

        </main>
    )
}

export default Login