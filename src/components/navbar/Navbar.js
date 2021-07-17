import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <span className="logo">Sesame Street</span>
            </div>
            <div className="navbar-centre">
                <div className="navbar-search">
                    <Search className="search-icon" />
                    <input placeholder="Type here to search..." type="text" className="search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    <span className="navbar-link">Home</span>
                    <span className="navbar-link">Timeline</span>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icon-item">
                        <Person />
                        <span className="navbar-icon-badge">
                            1
                        </span>
                    </div>
                    <div className="navbar-icon-item">
                        <Chat />
                        <span className="navbar-icon-badge">
                            2
                        </span>
                    </div>
                    <div className="navbar-icon-item">
                        <Notifications />
                        <span className="navbar-icon-badge">
                            1
                        </span>
                    </div>
                </div>
                <img src="/assets/users/1.jpg" alt="" className="navbar-profile-image" />
            </div>
        </div>
    );
}

export default Navbar;