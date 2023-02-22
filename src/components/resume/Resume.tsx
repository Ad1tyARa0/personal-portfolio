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
import "./Resume.css";

// Component props.
interface ResumeProps {
  payload: ResumeType;
}

const ResumeComponent: React.FunctionComponent<ResumeProps> = ({ payload }) => {
  return (
    <div className="main">
      <div className="basic-details">
        <div className="name">{payload.basicDetails.name}</div>
        <div className="designation">{payload.basicDetails.title}</div>

        <div className="useful-links">
          <div className="link-item">
            <div className="link-icon">
              <AiOutlineMail />
            </div>

            <div className="link-text">{payload.basicDetails.email}</div>
          </div>

          <div className="link-item">
            <div className="link-icon">
              <AiOutlinePhone />
            </div>

            <div className="link-text">{payload.basicDetails.phone}</div>
          </div>

          <div className="link-item">
            <div className="link-icon">
              <AiOutlineHome />
            </div>

            <div className="link-text">{payload.basicDetails.website}</div>
          </div>

          <div className="link-item">
            <div className="link-icon">
              <VscGithubAlt />
            </div>

            <div className="link-text">{payload.basicDetails.github}</div>
          </div>

          <div className="link-item">
            <div className="link-icon">
              <AiFillLinkedin />
            </div>

            <div className="link-text">{payload.basicDetails.linkedIn}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Resume = ResumeComponent;
