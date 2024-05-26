import { useState } from "react";
import "./Recommendations.css";

const Recommendations = ({ data }) => {
  const comment_list = data.comments;
  return (
    <div className="recommendations_section">
      <h1>
        {data.title} <br />
        <span className="recommendations_title_span">{data.subtitle}</span>
        <div className="comment_corousel">
          {data.comments.map((commentObject) => {
            return (
              <div className="comment_corousel_element">
                <p>{commentObject.comment}</p>
                <h3>{commentObject.writer}</h3>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default Recommendations;
