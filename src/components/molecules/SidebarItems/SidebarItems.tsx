import MenuItem from 'components/atoms/MenuItem/MenuItem';
import React from 'react';
import { HiLogout } from 'react-icons/hi';
import { SidebarRoute } from 'types';

interface SidebarItemsProps {
  itemsList: SidebarRoute[];
}

const SidebarItems = ({ itemsList }: SidebarItemsProps) => (
  <ul>
    {itemsList.map(({ title, icon, routeUrl }, i) => (
      <MenuItem
        data-testid="menu-item"
        key={i}
        title={title}
        icon={icon}
        routeUrl={routeUrl}
      />
    ))}

    <div className="bottom-6 absolute">
      <MenuItem title="Log out" icon={<HiLogout />} routeUrl="/logout" />
    </div>
  </ul>
);

export default SidebarItems;
