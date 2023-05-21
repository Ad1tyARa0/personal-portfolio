import React, { useEffect, useRef } from "react";

// SCSS.
import "./Tab.scss";
import Scrollbars from "react-custom-scrollbars-2";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

// Components -- common -- tab
const css_prefix = "c--c--t__";

// Component props.
interface TabProps {
  tabs: {
    id: number;
    title: string;
  }[];
  selectedTab: number;
  handleClickSelectTab: (payload: number) => void;
  theme: string;
}

const TabComponent: React.FunctionComponent<TabProps> = ({
  tabs,
  selectedTab,
  handleClickSelectTab,
  theme,
}) => {
  const tabRef = useRef<HTMLDivElement | null>(null);

  //   const handleClickLeft = () => {};

  return (
    <div className={`${css_prefix}main`}>
      <Scrollbars
        renderThumbHorizontal={props => (
          <div {...props} className="thumb-horizontal" />
        )}
        autoHeight={true}
        autoHeightMax={Number.MAX_VALUE}
        renderTrackVertical={() => <div></div>}
      >
        <div className={`${css_prefix}tab-main`}>
          {tabs.map(e => {
            return (
              <div
                className={`${css_prefix}tab ${
                  theme === "dark" ? css_prefix + "tab-dark" : ""
                }`}
                key={e.id}
                onClick={() => handleClickSelectTab(e.id)}
                id={`${e.id}`}
                ref={tabRef}
              >
                <div className={`${css_prefix}tab-title`}>{e.title}</div>
              </div>
            );
          })}
          <div
            className={`${css_prefix}slider ${css_prefix}slider-${selectedTab} ${
              theme === "dark" ? css_prefix + "slider-dark" : ""
            }`}
          />
        </div>
      </Scrollbars>

      {/* <div className={`${css_prefix}tab-icon`}>
        <BsFillCaretRightFill />
      </div> */}
    </div>
  );
};

export const Tab = TabComponent;
