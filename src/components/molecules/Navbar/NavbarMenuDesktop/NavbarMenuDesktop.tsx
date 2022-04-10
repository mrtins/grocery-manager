import classNames from 'classnames';
import SidebarItems from 'components/molecules/SidebarItems/SidebarItems';
import SidebarRoutes from 'constants/SidebarRoutes';
import { HiChevronRight, HiChevronLeft, HiPlus } from 'react-icons/hi';
import Image from 'next/image';
import NewTransationButton from 'components/atoms/NewTransationButton/NewTransationButton';

interface NavbarMenuDesktopProps {
  collapseSidebar: boolean;
  handleCollapseSidebar: () => void;
}

export default function NavbarMenuDesktop({
  collapseSidebar,
  handleCollapseSidebar,
}: NavbarMenuDesktopProps) {
  const handleNewButtonClick = () => console.log('TODO');

  return (
    <>
      {!collapseSidebar ? (
        <div className="flex justify-between items-center p-4">
          <Image
            src="/brand-logo.png"
            alt="Brand logo"
            width="32"
            height="32"
          />

          <h3 className="font-bold text-left text-3xl">Manager</h3>
        </div>
      ) : (
        <div className="pr-2 pl-2 pt-4">
          <Image
            src="/brand-logo.png"
            alt="Brand logo"
            width="64"
            height="64"
          />
        </div>
      )}

      <button
        aria-label="collapse-button"
        type="button"
        className="rounded-full text-white text-xl bg-blue-500 hover:bg-blue-600 absolute -right-2"
        onClick={handleCollapseSidebar}
      >
        {collapseSidebar ? (
          <span data-testid="chevron-right">
            <HiChevronRight />
          </span>
        ) : (
          <span data-testid="chevron-left">
            <HiChevronLeft />
          </span>
        )}
      </button>

      <NewTransationButton
        collapseSidebar={collapseSidebar}
        handleClick={handleNewButtonClick}
      />

      <SidebarItems itemsList={SidebarRoutes} collapsed={collapseSidebar} />
    </>
  );
}
