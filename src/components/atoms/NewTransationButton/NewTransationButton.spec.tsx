import { render, screen, fireEvent } from '@testing-library/react';
import NewTransationButton from './NewTransationButton';

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

describe('NewTransationButton component', () => {
  it('should render button with correct CSS classes when collapseSidebar is falsy', () => {
    render(
      <NewTransationButton collapseSidebar={false} handleClick={() => null} />,
    );

    const button = screen.getByRole('button');

    expect(button.classList.toString()).toEqual(
      'new-transaction-button flex w-36 justify-evenly items-center ',
    );
  });

  it('should render button with correct CSS classes when collapseSidebar is truthy', () => {
    render(
      <NewTransationButton collapseSidebar={true} handleClick={() => null} />,
    );

    const button = screen.getByRole('button');

    expect(button.classList.toString()).toEqual(
      'new-transaction-button flex mb-6 ',
    );
  });

  it('should render NewTransationButton with button title when collapseSidebar prop is falsy', () => {
    render(
      <NewTransationButton collapseSidebar={false} handleClick={() => null} />,
    );

    expect(screen.getByText('Novo')).toBeInTheDocument();
  });

  it('should return null on button click', () => {
    render(
      <NewTransationButton collapseSidebar={false} handleClick={() => null} />,
    );

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });
});
