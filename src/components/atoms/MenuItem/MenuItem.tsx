import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { HiHome } from 'react-icons/hi';

interface MenuItemProps {
  title: string;
  icon?: ReactNode;
  routeUrl?: string;
  iconOnly?: boolean;
}

const MenuItem = ({
  icon,
  title,
  routeUrl = '/',
  iconOnly = false,
}: MenuItemProps) => {
  const { pathname } = useRouter();

  return (
    <li
      data-tooltip-target="tooltip-right"
      data-tooltip-placement="right"
      className={`${
        pathname === routeUrl &&
        'text-blue-600 border-l-blue-600 font-medium border-l-4'
      } my-4 p-1 text-lg flex items-center justify-start cursor-pointer hover:border-l-blue-600 hover:text-blue-600 hover:font-medium hover:border-l-4`}
    >
      <Link href={routeUrl} passHref>
        <div className="ml-4 flex items-center" title={title}>
          <i className="text-blue-600">
            {icon ? icon : <HiHome data-testid="home-icon" />}
          </i>
          {!iconOnly && (
            <span data-testid="menu-item-title" className="ml-6 text-base">
              {title}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
