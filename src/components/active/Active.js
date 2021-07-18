import "./active.css"

const Active = ({ user }) => {
    return (
        <li className="active-friend">
            <div className="active-profile-img-container">
                <img src={user.profilePicture} alt="" className="active-profile-img" />
                <span className="active-indicator"></span>
            </div>
            <span className="active-active-username">{user.username}</span>
        </li>
    );
}

export default Active;