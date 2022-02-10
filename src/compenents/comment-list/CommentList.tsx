import classNames from "classnames";
import React from "react";
import { IComment } from "../../types/comment";
import Comment from "../comment/Comment";
import "./comment-list.css";

interface CommentListProps {
  comments: IComment[];
  customClassName?: string;
}

function CommentList({ comments, customClassName }: CommentListProps) {
  return (
    <ul className={classNames("comment-list", customClassName)}>
      {comments.map((comment) => (
        <li className="comment-list__item">
          <Comment item={comment} key={comment.id} />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
