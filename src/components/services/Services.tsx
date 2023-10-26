import React from "react";

// SCSS.
import "./services.scss";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

const css_prefix = "c--s__";

// Component props.
interface ServicesProps {}

const ServicesComponent: React.FunctionComponent<ServicesProps> = () => {
  const { ref } = useSectionInView("Services");

  return (
    <div className={`${css_prefix}main`} ref={ref} id="Services">
      <div>services</div>
    </div>
  );
};

export const Services = ServicesComponent;
