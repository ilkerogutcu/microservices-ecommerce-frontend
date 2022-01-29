import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import classNames from "classnames";
import React, { useState } from "react";
import "./slider.css";

interface SliderProps {
  items: React.ReactNode[];
  activeIndex?: number;
  customClassName?: string;
  ariaLabel?: string;
}
function Slider({
  items,
  activeIndex = 0,
  customClassName,
  ariaLabel,
}: SliderProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(activeIndex);

  return (
    <div
      role={"region"}
      className={classNames("slider", customClassName)}
      aria-label={ariaLabel}
    >
      {items.length > 1 && (
        <button
          className={"slider__control-button slider__control-button--previous"}
          aria-label={"Go to previous image"}
          onClick={handleGoToPrevious}
        >
          <ArrowLeftOutlined />
        </button>
      )}

      {items[activeItemIndex]}

      {items.length > 1 && (
        <button
          className={"slider__control-button slider__control-button--next"}
          aria-label={"Go to next image"}
          onClick={handleGoToNext}
        >
          <ArrowRightOutlined />
        </button>
      )}
    </div>
  );

  function handleGoToPrevious() {
    let prevIndex = activeItemIndex - 1;

    if (!items[prevIndex]) {
      prevIndex = items.length - 1;
    }

    setActiveItemIndex(prevIndex);
  }

  function handleGoToNext() {
    let nextIndex = activeItemIndex + 1;

    if (!items[nextIndex]) {
      nextIndex = 0;
    }

    setActiveItemIndex(nextIndex);
  }
}

export default Slider;
