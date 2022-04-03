import SidebarItems from 'components/molecules/SidebarItems/SidebarItems';
import SidebarRoutes from 'constants/SidebarRoutes';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useRef, useState } from 'react';

function NavbarMenuMobile() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const navMenuRef: any = useRef();

  useOnClickOutside(navMenuRef, () => setIsNavOpen(false));

  return (
    <>
      <button
        type="button"
        className="text-blue-500 w-8 h-8 flex items-center justify-center"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <div ref={navMenuRef} className={isNavOpen ? 'show-menu-nav' : 'hidden'}>
        <div
          className="absolute top-5 right-5"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-6 w-6 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <SidebarItems itemsList={SidebarRoutes} />
      </div>
    </>
  );
}

export default NavbarMenuMobile;
