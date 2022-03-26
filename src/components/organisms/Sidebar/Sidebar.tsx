import MenuItem from 'components/atoms/MenuItem/MenuItem';
import SidebarItems from 'components/molecules/SidebarItems/SidebarItems';
import SidebarRoutes from 'constants/SidebarRoutes';
import { HiLogout, HiPlus } from 'react-icons/hi';

const SideBar = () => {
  const handleNewButtonClick = () => console.log('TODO');

  return (
    <aside
      aria-label="Sidebar"
      className="w-52 bg-white dark:bg-gray-900 shadow-lg"
    >
      <div className="p-5">
        <h3 className="font-bold text-left text-3xl">Manager</h3>

        <button
          onClick={handleNewButtonClick}
          className="bg-blue-500 hover:bg-blue-600 rounded-full p-3 text-white mx-auto mt-6 w-36 flex justify-evenly items-center drop-shadow-md"
        >
          <HiPlus /> Novo
        </button>
      </div>

      <SidebarItems itemsList={SidebarRoutes} />
    </aside>
  );
};

export default SideBar;
