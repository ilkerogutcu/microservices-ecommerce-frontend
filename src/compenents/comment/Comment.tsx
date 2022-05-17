import { Rating } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { IComment } from "../../types/comment";
import "./comment.css";

interface CommentProps {
  item: IComment;
  customClassName?: string;
}

function Comment({ item, customClassName }: CommentProps) {
  return (
    <div className={classNames("comment-card", customClassName)}>
      <div className="comment-card__header has-space-between">
        <h6 className="comment_fullname">{item.fullName} </h6>
        <span className="comment_date">
          {item.createdAt.toISOString().split("T")[0]}
        </span>
      </div>

      <Rating name="read-only" value={3} readOnly />
      <p className="comment_content">{item.content}</p>
      <hr />
    </div>
  );
}

export default Comment;
