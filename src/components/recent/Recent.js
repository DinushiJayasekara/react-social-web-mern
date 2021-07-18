import "./recent.css"

const Recent = ({ user }) => {
    return (
        <li className="recent-friend">
            <img src={user.profilePicture} alt="" className="recent-friend-img" />
            <span className="recent-friend-name">{user.username}</span>
        </li>
    );
}

export default Recent;