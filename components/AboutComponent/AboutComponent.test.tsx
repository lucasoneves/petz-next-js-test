/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import AboutComponent from './index';

describe('About', () => {
  it('renders a heading', () => {
    render(<AboutComponent />);

    const heading = screen.getByText('O Centro Pokémon');
    expect(heading).toBeInTheDocument();
  });
});
