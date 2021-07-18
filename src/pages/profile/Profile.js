import "./profile.css";
import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar"
import Navbar from "../../components/navbar/Navbar"
import RightSidebar from "../../components/rightSidebar/RightSidebar"

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="profile">
                <LeftSidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src="assets/posts/10.jpg" alt="" className="profile-cover-img" />
                            <img src="assets/users/1.jpg" alt="" className="profile-user-img" />
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">Jane Doe</h4>
                            <span className="profile-info-desc">Hello my lovelies!</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <RightSidebar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;