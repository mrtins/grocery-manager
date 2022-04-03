import classNames from 'classnames';
import NavbarMenuDesktop from 'components/molecules/Navbar/NavbarMenuDesktop/NavbarMenuDesktop';
import NavbarMenuMobile from 'components/molecules/Navbar/NavbarMenuMobile/NavbarMenuMobile';
import Image from 'next/image';
import React, { useState } from 'react';

const Sidebar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);

  return (
    <nav
      aria-label="Sidebar"
      className={classNames(
        'navbar md:h-screen md:top-0',
        `${!collapseSidebar ? 'md:w-52' : 'md:w-16'}`,
      )}
    >
      <div className="md:hidden relative w-full shadow-lg p-2 px-4 flex flex-wrap items-center justify-between">
        <Image src="/brand-logo.png" alt="me" width="48" height="48" />

        <NavbarMenuMobile />
      </div>

      <div className="hidden md:block">
        <NavbarMenuDesktop
          collapseSidebar={collapseSidebar}
          handleCollapseSidebar={() => setCollapseSidebar((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
