import React from "react";

interface ValidNavItem {
  navItems: string
}

const NavItems:React.FC<React.PropsWithChildren<ValidNavItem>> = ({
  navItems
}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#home">
        {navItems}
      </a>
    </li>
  );
};

export default NavItems;
