import "./rightSidebar.css"
import { Users } from "../../data";
import Active from "../active/Active";

const RightSidebar = ({ profile }) => {

    const HomeRightSidebar = () => {
        return (
            <>
                <div className="featured-container">
                    <img src="assets/icons/gift-box.png" alt="" className="birthday-img" />
                    <span className="birthday-text">
                        <b>Ray Dolark</b> and <b>3 other friends</b> have their birthdays today.
                    </span>
                </div>
                <img src="assets/featured-ads/1.jpg" alt="" className="right-sidebar-ad" />
                <img src="assets/featured-ads/6.jpg" alt="" className="right-sidebar-ad" />
                <h4 className="right-sidebar-title">Active Friends</h4>
                <ul className="right-sidebar-friend-list">
                    {Users.map(user => (
                        <Active key={user.id} user={user} />
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightSidebar = () => {
        return (
            <>
                <h4 className="right-sidebar-title">Bio</h4>
                <div className="right-sidebar-info">
                    <div className="right-sidebar-info-item">
                        <span className="right-sidebar-info-key">City:</span>
                        <span className="right-sidebar-info-value">Yorkshire</span>
                    </div>
                    <div className="right-sidebar-info-item">
                        <span className="right-sidebar-info-key">Country:</span>
                        <span className="right-sidebar-info-value">England</span>
                    </div>
                    <div className="right-sidebar-info-item">
                        <span className="right-sidebar-info-key">Relationship:</span>
                        <span className="right-sidebar-info-value">It's complicated ;)</span>
                    </div>
                </div>

                <h4 className="right-sidebar-title">Following</h4>
                <div className="right-sidebar-following">
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                    <div className="right-sidebar-follower">
                        <img src="assets/users/2.jpg" alt="" className="right-sidebar-follower-img" />
                        <span className="right-sidebar-follower-name">Rosa Fernandez</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="right-sidebar">
            <div className="right-sidebar-wrapper">
                {profile ? <ProfileRightSidebar /> : <HomeRightSidebar />}
            </div>
        </div>
    );
}

export default RightSidebar;