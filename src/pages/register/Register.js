import "./register.css"

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrapper">
                <div className="register-left">
                    <h3 className="register-logo">Sesame Street</h3>
                    <span className="register-desc">
                        Connect with your favourite friends around the world.
                    </span>
                </div>
                <div className="register-right">
                    <div className="register-box">
                        <input type="text" placeholder="Username" className="register-input" />
                        <input type="email" placeholder="Email" className="register-input" />
                        <input type="password" placeholder="Password" className="register-input" />
                        <input type="password" placeholder="Confirm Password" className="register-input" />
                        <button className="register-button">Sign Up</button>
                        <button className="register-register-button">Already have an account?</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;