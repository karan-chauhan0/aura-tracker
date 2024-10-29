import React, { useRef } from 'react';
import './Login.css';
import Header from './Header.jsx';
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from './api';

function GoogleLogin() {
    const responseGoogle = async (authResult) => {
        try {
        if (authResult['code']) {
            const result = await googleAuth(authResult['code']);
            const { email, name, image } = result.data.user;
            const token = result.data.token;
            console.log('result.data.user---', result.data.user);
            console.log(token);
        }
        } catch (err) {
        console.error('Error While Requesting Google Code:', err);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    });

    const containerRef = useRef(null);

    const toggleOverlay = () => {
        // Toggle 'right-panel-active' class on container
        if (containerRef.current) {
        containerRef.current.classList.toggle('right-panel-active');
        }
    };

    return (
        <>
        <Header />
            <div className='container' id='container' ref={containerRef}>
                {/* Sign Up Form */}
                <div className='form-container sign-up-container'>
                    <form action='#'>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <div className='infield'>
                        <input type='text' placeholder='Name' />
                        </div>
                        <div className='infield'>
                        <input type='email' placeholder='Email' name='email' />
                        </div>
                        <div className='infield'>
                        <input type='password' placeholder='Password' />
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div className='form-container sign-in-container'>
                    <form action='#'>
                        <h1>Sign in</h1>
                        <div className='social-container'>
                        <a href='#' className='social'><i className='fab fa-facebook-f'></i></a>
                        <a onClick={googleLogin} href='#' className='social'><i className='fab fa-google-plus-g'></i></a>
                        <a href='#' className='social'><i className='fab fa-linkedin-in'></i></a>
                        </div>
                        <span>or use your account</span>
                        <div className='infield'>
                        <input type='email' placeholder='Email' name='email' />
                        </div>
                        <div className='infield'>
                        <input type='password' placeholder='Password' />
                        </div>
                        <a href='#' className='forgot'>Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                    <div className='LoginButton'>
                        <button onClick={googleLogin} className='btnl'>Login With Google</button>
                        <button className='btnl'>Login With Github</button>
                    </div>
                </div>

                {/* Overlay */}
                <div className='overlay-container' id='overlayCon'>
                    <div className='overlay'>
                        <div className='overlay-panel overlay-left'>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button
                            className="overlay-btn"
                            onClick={toggleOverlay}>Sign In</button>
                        </div>
                        <div className='overlay-panel overlay-right'>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start a journey with us</p>
                        <button
                            className="overlay-btn"
                            onClick={toggleOverlay}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GoogleLogin;
