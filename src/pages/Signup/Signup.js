// stylesheet, img
import './Signup.scss';
import close from '../../assets/icons/close.png';

// core stuff
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

// components and pages
import logo from '../../assets/logo/logo.png';
import FormLabel from '../../components/FormLabel/FormInput/FormLabel';
import FormInput from '../../components/FormInput/FormInput';
import Buttons from '../../components/Buttons/Buttons';

const Signup = ({ error, setError, success, setSuccess, errMsg, setErrMsg }) => {
    // set err state
    // const [error, setError] = useState('')

    // // setting success state
    // const [success, setSuccess] = useState(false)

    // // err message
    // const [errMsg, setErrMsg] = useState(false)

    // setting form state
    const [userInfo, setUserInfo] = useState({
        user_name: '',
        author: '',
        password: '',
        email: ''
    })

    // form onchage func
    const registerUser = (e) => {
        const { name, value } = e.target
        setUserInfo(
            preval => ({ ...preval, [name]: value })
        )
    }

    // form validation 
    const validSignUp = () => {
        if (!userInfo.user_name ||
            !userInfo.author ||
            !userInfo.password ||
            !userInfo.email) {
            setErrMsg(true)
            return false
        } return true
    }

    // form submit
    const signupRequest = (e) => {
        e.preventDefault()
        if (validSignUp()) {
            axios.post("http://localhost:8080/users/register", userInfo)
                .then(res => {
                    setSuccess(true)
                    setError('')
                    e.target.reset()
                    console.log(res)
                })
                .catch(err => {
                    setSuccess(false)
                    setError(err.response.data)
                })
        } else {
            console.log('please fill out all required feilds')
        }

    }

    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    return (
        <main className='signup'>
            <img onClick={backHome} src={close} alt='close icon' className='login__close' />
            <div className="signup__logo-wrapper">
                <img className='login__logo' src={logo} alt='logo icon' />
            </div>
            <h2 className='signup__catch'>Signup to find your next itinerary</h2>

            <form onSubmit={signupRequest} className='signup__form'>

                <div>
                    <FormLabel forfield={'email'} text={''} />
                    <FormInput
                        name={'email'}
                        type={'text'}
                        placeholder={'Email'}
                        value={userInfo.email}
                        onchange={registerUser} />
                </div>

                <div>
                    <FormLabel forfield={'username'} text={''} />
                    <FormInput
                        name={'user_name'}
                        type={'text'}
                        placeholder={'Username'}
                        value={userInfo.user_name}
                        onchange={registerUser} />
                </div>

                <div>
                    <FormLabel forfield={'fullname'} text={''} />
                    <FormInput
                        name={'author'}
                        type={'text'}
                        placeholder={'Full Name'}
                        value={userInfo.author}
                        onchange={registerUser} />
                </div>


                <div>
                    <FormLabel forfield={'password'} text={''} />
                    <FormInput
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        value={userInfo.password}
                        onchange={registerUser} />
                </div>
                {errMsg && <p className='login__errMsg'>Please fill out all required fields</p>}

                {error && <div className='login__errMsg'>{error}</div>}

                <h6 className='signup__legal'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</h6>


                <div className='signup__btn-wrapper'>
                    <Buttons type={'submit'} value={'Sign up'} />
                </div>

                {/* need to navigate to user homepage if signed up  */}
                {/* {success && navigate('/')} */}

            </form>
            <p className='signup__footer'>Have an account? <Link to='/login' className='login__redirect'>Log in </Link></p>
        </main>
    )
}

export default Signup