// stylesheet
import './Signup.scss'
// core stuff
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

// components and pages
import logo from '../../assets/logo/logo.png';
import FormLabel from '../../components/FormLabel/FormInput/FormLabel';
import FormInput from '../../components/FormInput/FormInput';
import Buttons from '../../components/Buttons/Buttons';

const Signup = () => {

    const [error, setError] = useState('')

    // setting success state
    const [success, setSuccess] = useState(false)

    // err message
    const [errMsg, setErrMsg] = useState(false)

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

    return (
        <>
            <div className="login">
                <img src={logo} alt='logo icon' />
            </div>

            <form onSubmit={signupRequest}>
                <h2>Signup to find your next itinerary</h2>

                <div>
                    <FormLabel htmlFor={'email'} text={''} />
                    <FormInput
                        name={'email'}
                        type={'text'}
                        placeholder={'Email'}
                        value={userInfo.email}
                        onchange={registerUser} />
                </div>

                <div>
                    <FormLabel htmlFor={'username'} text={''} />
                    <FormInput
                        name={'user_name'}
                        type={'text'}
                        placeholder={'Username'}
                        value={userInfo.user_name}
                        onchange={registerUser} />
                </div>

                <div>
                    <FormLabel htmlFor={'fullname'} text={''} />
                    <FormInput
                        name={'author'}
                        type={'text'}
                        placeholder={'Full Name'}
                        value={userInfo.author}
                        onchange={registerUser} />
                </div>


                <div>
                    <FormLabel htmlFor={'password'} text={''} />
                    <FormInput
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        value={userInfo.password}
                        onchange={registerUser} />
                </div>
                <h6>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</h6>
                {errMsg && <p>Please fill out all required fields</p>}
                <Buttons type={'submit'} value={'Sign up'} />
                {/* need to navigate to user homepage if signed up  */}
                {success && <div>Signed Up!</div>}
                {error && <div>{error}</div>}

            </form>
            <p>Have an account? <Link to='/login'>Log in </Link></p>
        </>
    )
}

export default Signup