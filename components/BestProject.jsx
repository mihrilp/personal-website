import React from "react";
import Link from "next/link";
import { Star, Fork, Circle } from "./icons";

const BestProject = React.forwardRef(
  ({ projectName, url, description, language, stars }) => {
    return (
      <Link href={url} passHref>
        <div className="bestProject">
          <h2 className="subtitle">{projectName}</h2>
          <p className="description">{description}</p>
          <div className="bottomRow">
            <p>{language}</p>
            <div className="stars">
              <Star className="starIcon" />
              <p>{stars} Star</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

BestProject.displayName = "BestProject";

export default BestProject;
