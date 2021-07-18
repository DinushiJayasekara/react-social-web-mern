import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar"
import Navbar from "../../components/navbar/Navbar"
import RightSidebar from "../../components/rightSidebar/RightSidebar"

import "./home.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </div>
        </>
    );
}

export default Home;