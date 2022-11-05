import React, { useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'gatsby';

import {
  FaClipboardList,
  FaCode,
  FaHome,
  FaPhoneSquareAlt,
  FaToolbox,
  FaUser,
  FaUserTie,
} from 'react-icons/fa';

// SCSS.
import './Dropdown.scss';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

// Components -- common -- dropdown
const css_prefix = 'c--c--d__';

// Component props.
interface DropdownProps {
  theme: string;
  onClickHideDropdown: () => void;
}

const DropdownComponent: React.FunctionComponent<DropdownProps> = ({
  theme,
  onClickHideDropdown,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ITEMS = [
    {
      id: 2,
      title: 'Home',
      icon: <FaHome />,
      to: '/',
    },

    {
      id: 2,
      title: 'Skills',
      icon: <FaToolbox />,
      to: '/skills',
    },

    {
      id: 3,
      title: 'Projects',
      icon: <FaCode />,
      to: '/projects',
    },

    {
      id: 4,
      title: 'Experience',
      icon: <FaUserTie />,
      to: '/experience',
    },

    {
      id: 1,
      title: 'Contact Me',
      icon: <FaPhoneSquareAlt />,
      to: '/contact-me',
    },
  ];

  useOnClickOutside(dropdownRef, onClickHideDropdown);

  return (
    <div
      className={`${css_prefix}main ${
        theme === 'dark' ? css_prefix + 'dark' : css_prefix + 'light'
      }`}
      ref={dropdownRef}
    >
      {ITEMS.map(e => {
        return (
          <Link to={e.to} key={e.id} className={`${css_prefix}link-main`}>
            <div
              className={`${css_prefix}item-main ${
                theme === 'dark'
                  ? css_prefix + 'dark-item'
                  : css_prefix + 'light-item'
              }`}
            >
              <div className={`${css_prefix}item-title`}>{e.title}</div>

              <div className={`${css_prefix}item-icon`}>{e.icon}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const Dropdown = DropdownComponent;
