import MenuItem from 'components/atoms/MenuItem/MenuItem';
import React from 'react';
import { HiLogout } from 'react-icons/hi';
import { SidebarRoute } from 'types';

interface SidebarItemsProps {
  itemsList: SidebarRoute[];
  collapsed?: boolean;
}

const SidebarItems = ({ itemsList, collapsed = false }: SidebarItemsProps) => (
  <ul>
    {itemsList.map(({ title, icon, routeUrl }, i) => (
      <MenuItem
        data-testid="menu-item"
        key={i}
        title={title}
        icon={icon}
        routeUrl={routeUrl}
        iconOnly={collapsed}
      />
    ))}

    <div className="md:bottom-6 md:absolute md:border-0 mt-6 pt-2 border-t border-slate-300 ">
      <MenuItem
        title="Log out"
        icon={<HiLogout />}
        routeUrl="/logout"
        iconOnly={collapsed}
      />
    </div>
  </ul>
);

export default SidebarItems;
