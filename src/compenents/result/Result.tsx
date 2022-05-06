import classNames from "classnames";
import React from "react";
import "./result.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";

interface ResultProps {
  status: string;
  customClassName?: string;
  title?: string;
  message?: string;
}

function Result({ status, customClassName, title, message }: ResultProps) {
  var statusClassName = status === "success" ? "_success" : "_error";
  return (
    <div className="result-container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div
            className={classNames(
              "message-box " + statusClassName,
              customClassName
            )}
          >
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2> {title} </h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Result;
