import { render, screen } from '@testing-library/react';
import Layout from './Layout';

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

describe('Layout component', () => {
  it('should render Layout component with children and Sidebar', () => {
    render(
      <Layout>
        <h1>Testing</h1>
      </Layout>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Testing/i,
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      /manager/i,
    );
  });
});
