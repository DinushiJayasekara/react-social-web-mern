import { Bookmarks, Chat, Event, HelpOutline, People, PlayCircleFilled, RssFeed, Work } from "@material-ui/icons"
import "./leftSidebar.css"
import { Users } from "../../data"
import Recent from "../recent/Recent"

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <div className="left-sidebar-wrapper">
                <ul className="left-sidebar-options">
                    <li className="left-sidebar-option">
                        <RssFeed className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Feed
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <Chat className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Chats
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <PlayCircleFilled className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Videos
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <People className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Groups
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <Bookmarks className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Bookmarks
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <HelpOutline className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Questions
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <Work className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Jobs
                        </span>
                    </li>
                    <li className="left-sidebar-option">
                        <Event className="left-sidebar-icon" />
                        <span className="left-sidebar-option-text">
                            Events
                        </span>
                    </li>
                </ul>
                <button className="left-sidebar-button">Show More</button>
                <hr className="left-sidebar-hr" />
                <ul className="left-sidebar-friend-list">
                    {Users.map(user => (
                        <Recent key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LeftSidebar;