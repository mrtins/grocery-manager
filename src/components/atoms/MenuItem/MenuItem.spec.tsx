import { render, screen } from '@testing-library/react';
import { HiCash } from 'react-icons/hi';
import MenuItem from './MenuItem';

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

describe('MenuItem component', () => {
  it('should render MenuItem with title prop', () => {
    render(<MenuItem title="Test item" />);

    expect(screen.getByTestId('menu-item-title')).toHaveTextContent(
      'Test item',
    );
  });

  it('should render MenuItem with HiHome icon with no icon is given', () => {
    render(<MenuItem title="Test item" />);

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
  });

  it('should render MenuItem with given icon', () => {
    render(
      <MenuItem title="Test item" icon={<HiCash data-testid="test-icon" />} />,
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
