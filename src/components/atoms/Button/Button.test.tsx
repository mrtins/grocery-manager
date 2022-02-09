import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('ButtonComponent', () => {
  it('should render Button with children correctly', () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByRole('button').textContent).toBe('Test Button');
  });
});
