import classNames from 'classnames';
import SidebarItems from 'components/molecules/SidebarItems/SidebarItems';
import SidebarRoutes from 'constants/SidebarRoutes';
import React, { useState } from 'react';
import { HiPlus, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import Image from 'next/image';

const Sidebar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);

  const handleNewButtonClick = () => console.log('TODO');

  const handleCollapseSidebar = () => {
    setCollapseSidebar(!collapseSidebar);
  };

  return (
    <aside
      aria-label="Sidebar"
      className={classNames('sidebar', `${!collapseSidebar ? 'w-52' : 'w-16'}`)}
    >
      <div className="relative">
        {!collapseSidebar ? (
          <div className="flex justify-between items-center p-4">
            <Image src="/brand-logo.png" alt="me" width="32" height="32" />
            <h3 className="font-bold text-left text-3xl">Manager</h3>
          </div>
        ) : (
          <div className="pr-2 pl-2 pt-4">
            <Image src="/brand-logo.png" alt="me" width="64" height="64" />
          </div>
        )}

        <button
          id="collapse-sidebar-button"
          className="rounded-full text-white text-xl bg-blue-500 hover:bg-blue-600 absolute -right-2"
          onClick={handleCollapseSidebar}
        >
          {collapseSidebar ? <HiChevronRight /> : <HiChevronLeft />}
        </button>

        <button
          onClick={handleNewButtonClick}
          className={classNames(
            'new-transaction-button',
            `${
              !collapseSidebar
                ? 'w-36 flex justify-evenly items-center'
                : 'flex mb-6'
            } `,
          )}
        >
          <HiPlus /> {!collapseSidebar && 'Novo'}
        </button>
      </div>

      <SidebarItems itemsList={SidebarRoutes} collapsed={collapseSidebar} />
    </aside>
  );
};

export default Sidebar;
