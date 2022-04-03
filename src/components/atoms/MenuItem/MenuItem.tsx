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
        'font-medium text-blue-600 md:border-l-blue-600 md:border-l-4'
      } my-4 md:p-1 text-lg flex items-center justify-start cursor-pointer md:hover:border-l-4 md:hover:border-l-blue-600 md:hover:text-blue-600 hover:font-medium md:w-full`}
    >
      <Link href={routeUrl} passHref>
        <div className="md:ml-4 flex items-center" title={title}>
          <i className="text-blue-600">
            {icon ? icon : <HiHome data-testid="home-icon" />}
          </i>
          {!iconOnly && (
            <span
              data-testid="menu-item-title"
              className="ml-4 md:ml-6 text-base"
            >
              {title}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
