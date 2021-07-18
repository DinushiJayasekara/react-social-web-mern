import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Sesame Street</h3>
                    <span className="login-desc">
                        Connect with your favourite friends around the world.
                    </span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input type="email" placeholder="Email" className="login-input" />
                        <input type="password" placeholder="Password" className="login-input" />
                        <button className="login-button">Login</button>
                        <span className="login-forgot-password">Forgot Password?</span>
                        <button className="login-register-button">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;