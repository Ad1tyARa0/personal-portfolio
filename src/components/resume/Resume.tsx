import React from "react";
import { ResumeType } from "../../utils/types/resume";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
} from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
// SCSS.
import "./Resume.scss";

// Components -- Resume
const css_prefix = "c--r__";

// Component props.
interface ResumeProps {
  payload: ResumeType;
}

const ResumeComponent: React.FunctionComponent<ResumeProps> = ({ payload }) => {
  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}basic-details`}>
        <div className={`${css_prefix}name`}>{payload.basicDetails.name}</div>
        <div className={`${css_prefix}designation`}>
          {payload.basicDetails.title}
        </div>

        <div className={`${css_prefix}useful-links`}>
          <div className={`${css_prefix}link-item`}>
            <div className={`${css_prefix}link-icon`}>
              <AiOutlineMail />
            </div>

            <div className={`${css_prefix}link-text`}>
              {payload.basicDetails.email}
            </div>
          </div>

          <div className={`${css_prefix}link-item`}>
            <div className={`${css_prefix}link-icon`}>
              <AiOutlinePhone />
            </div>

            <div className={`${css_prefix}link-text`}>
              {payload.basicDetails.phone}
            </div>
          </div>

          <div className={`${css_prefix}link-item`}>
            <div className={`${css_prefix}link-icon`}>
              <AiOutlineHome />
            </div>

            <div className={`${css_prefix}link-text`}>
              {payload.basicDetails.website}
            </div>
          </div>

          <div className={`${css_prefix}link-item`}>
            <div className={`${css_prefix}link-icon`}>
              <VscGithubAlt />
            </div>

            <div className={`${css_prefix}link-text`}>
              {payload.basicDetails.github}
            </div>
          </div>

          <div className={`${css_prefix}link-item`}>
            <div className={`${css_prefix}link-icon`}>
              <AiFillLinkedin />
            </div>

            <div className={`${css_prefix}link-text`}>
              {payload.basicDetails.linkedIn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Resume = ResumeComponent;
