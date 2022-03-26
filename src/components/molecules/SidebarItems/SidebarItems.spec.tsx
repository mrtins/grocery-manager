import { render, screen, within } from '@testing-library/react';
import SidebarRoutes from 'constants/SidebarRoutes';
import SidebarItems from './SidebarItems';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('SidebarItems component', () => {
  it('should render SidebarItems with given itemList prop', () => {
    render(<SidebarItems itemsList={SidebarRoutes} />);

    const list = screen.getByRole('list', {
      name: '',
    });

    const { getAllByRole } = within(list);

    const items = getAllByRole('listitem');

    expect(items.length).toBe(7);
  });

  it('SidebarItems should match snapshot', () => {
    render(<SidebarItems itemsList={SidebarRoutes} />);

    const list = screen.getByRole('list', {
      name: '',
    });

    expect(list).toMatchSnapshot();
  });
});
