import React from 'react';
import {
  FaGraduationCap,
  FaMoneyCheckAlt,
  FaRegSnowflake,
  FaUserCircle,
} from 'react-icons/fa';

// SCSS.
import './Menu.scss';

// Components -- common -- menu
const css_prefix = 'c--c--m__';

// Component props.
interface MenuProps {}

const MenuComponent: React.FunctionComponent<MenuProps> = () => {
  const menuItems = [
    {
      id: 1,
      title: 'About',
      icon: <FaUserCircle />,
    },

    {
      id: 2,
      title: 'Projects',
      icon: <FaRegSnowflake />,
    },

    {
      id: 3,
      title: 'Education',
      icon: <FaGraduationCap />,
    },

    {
      id: 4,
      title: 'Career',
      icon: <FaMoneyCheckAlt />,
    },
  ];

  return (
    <div className={`${css_prefix}main`}>
      <select>
        {menuItems.map(e => {
          return (
            <option key={e.id} className={`${css_prefix}item-main`}>
              <div className={`${css_prefix}item-title`}>{e.title}</div>

              <div className={`${css_prefix}item-icon`}>{e.icon}</div>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const Menu = MenuComponent;
