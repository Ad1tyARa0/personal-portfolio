import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { Button } from "../common/button/Button";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import { ImagesType } from "../../utils/types/common";

// SCSS.
import "./Carousel.scss";

const css_prefix = "c--c__";

const slideVariants = {
  hiddenRight: {
    x: "-80%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "80%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Component props.
interface CarouselProps {
  images: ImagesType[];
}

const CarouselComponent: React.FunctionComponent<CarouselProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}left-button`}>
        <Button
          handleClick={handlePrevious}
          appearence="primary"
          icon={<PiCaretLeftBold />}
        />
      </div>

      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className={`${css_prefix}image`}
        />
      </AnimatePresence>

      <div className={`${css_prefix}right-button`}>
        <Button
          handleClick={handleNext}
          appearence="primary"
          icon={<PiCaretRightBold />}
        />
      </div>
    </div>
  );
};

export const Carousel = CarouselComponent;
