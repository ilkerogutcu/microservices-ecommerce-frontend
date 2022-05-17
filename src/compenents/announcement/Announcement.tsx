import classNames from "classnames";
import "./announcement.css";
import React from 'react';

interface AnnouncementProps {
  message: string;
  customClassName?: string;
}

function Announcement({ message, customClassName }: AnnouncementProps) {
  return (
    <div className={classNames("announcement", customClassName)}>{message}</div>
  );
}

export default Announcement;
