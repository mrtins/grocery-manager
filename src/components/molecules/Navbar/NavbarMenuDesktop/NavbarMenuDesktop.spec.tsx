import { render, screen } from '@testing-library/react';
import NavbarMenuDesktop from './NavbarMenuDesktop';

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

describe('NavbarMenuDesktop component', () => {
  it('should render NavbarMenuDesktop in its full size', () => {
    render(
      <NavbarMenuDesktop
        collapseSidebar={false}
        handleCollapseSidebar={() => null}
      />,
    );

    const image = screen.getByAltText('Brand logo');

    expect(screen.getByTestId('chevron-left')).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Manager',
    );
  });

  it('should render NavbarMenuDesktop in collapsed size', () => {
    render(
      <NavbarMenuDesktop
        collapseSidebar={true}
        handleCollapseSidebar={() => null}
      />,
    );

    const image = screen.getByAltText('Brand logo');

    expect(image).toBeInTheDocument();
    expect(screen.getByTestId('chevron-right')).toBeInTheDocument();
  });
});
