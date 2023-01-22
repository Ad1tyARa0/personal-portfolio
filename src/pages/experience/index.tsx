import React from "react";
import { graphql, navigate } from "gatsby";

// Components.
import { Arrow } from "../../components/common/arrow/Arrow";
import { PageContainer } from "../../components/layout/container/PageContainer";

// Context.
import { ThemeContext } from "../../context/ThemeContext";

// SCSS.
import "./index.scss";

// Pages -- experience
const css_prefix = "p--e__";

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  const handleRightArrowClick = () => {
    navigate("/contact-me");
  };

  const handleLeftArrowClick = () => {
    navigate("/projects");
  };

  const {
    allPrismicNewEmploymentHistory: {
      nodes: {
        0: {
          data: { employment_item },
        },
      },
    },
  } = data;

  let employmentItem =
    data.allPrismicNewEmploymentHistory.nodes[0].data.employment_item;

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>

        <Arrow orientation="left" onClick={handleLeftArrowClick} />
        <Arrow orientation="right" onClick={handleRightArrowClick} />
      </div>
    </PageContainer>
  );
};

export default Experience;

export const query = graphql`
  query EmpHistory {
    allPrismicNewEmploymentHistory {
      nodes {
        data {
          employment_item {
            company_name {
              text
            }
            company_description {
              text
            }
            company_logo {
              url
            }
            location {
              longitude
              latitude
            }
            technologies_used {
              text
            }
            core_responsibilities {
              text
            }
            from_date
            to_date
            is_current
            timestamp
          }
        }
      }
    }
  }
`;
