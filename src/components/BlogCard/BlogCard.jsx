import "./BlogCard.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ id, title, img, kom }) => {
  return (
    <div className="bccontainer">
      <Link to={`/blog/${id}`}>
        <div className="blogcard">
          <div className="imgbgcon">
            <img src={img} width={300} height={300} alt="blogimg" />
            <div className="overlayb">
              <p className="blogp">BLOG</p>
              <div>
                <p className="blogtitle">{title}</p>
                <div className="likecom">
                  <div className="like">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <i className="fa-regular fa-thumbs-down"></i>
                  </div>
                  <p className="komp">{kom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
