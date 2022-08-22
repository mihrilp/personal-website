import React from "react";
import Link from "next/link";
import { Heart, Comment } from "./icons";

const LatestPost = React.forwardRef(
  ({ url, title, date, description, reactions, comments }) => {
    return (
      <Link href={url} passHref>
        <div className="latestPost">
          <h2 className="subtitle">{title}</h2>
          <p className="date">{date}</p>
          <p className="description">{description}</p>
          <div className="reactions">
            <div>
              <Heart className="reactionIcon" />
              <p>{reactions} reactions</p>
            </div>
            <div>
              <Comment className="reactionIcon" />
              <p>{comments} comments</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

LatestPost.displayName = "LatestPost";

export default LatestPost;
