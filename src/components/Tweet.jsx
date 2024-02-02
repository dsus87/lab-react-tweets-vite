import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
          <ProfileImage image={tweet.user.image} />


      <div className="body">
        <div className="top">
          <span className="user">
          <User name={tweet.user.name} handle={tweet.user.handle} />

          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
         {tweet.message}
        </p>

        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
