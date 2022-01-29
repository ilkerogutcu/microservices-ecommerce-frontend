import classNames from "classnames";
import "./announcement.css";

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
