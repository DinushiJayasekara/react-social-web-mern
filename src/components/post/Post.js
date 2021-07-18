import { MoreVert } from "@material-ui/icons"
import "./post.css"
import { Users } from "../../data";
import { useState } from "react"

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    const user = Users.filter(user => user.id === post.userId);

    return (
        <div>
            <div className="post">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <img src={user[0].profilePicture} alt="" className="post-profile-img" />
                            <span className="post-username">
                                {user[0].username}
                            </span>
                            <span className="post-date">{post.date}</span>
                        </div>
                        <div className="post-top-right">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="post-centre">
                        <span className="post-text">
                            {post?.desc}
                            <img src={post.photo} alt="" className="post-img" />
                        </span>
                    </div>
                    <div className="post-bottom">
                        <div className="post-bottom-left">
                            <img src="assets/icons/like.png" alt="" className="like-icon" onClick={likeHandler} />
                            <img src="assets/icons/heart.png" alt="" className="love-icon" onClick={likeHandler} />
                            <span className="post-like-counter">{like}</span>
                        </div>
                        <div className="post-bottom-right">
                            <span className="post-comment-text">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;