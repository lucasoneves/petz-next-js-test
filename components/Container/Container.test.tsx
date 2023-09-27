// Container.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this to use individual matchers

import Container from './index';

describe('Container Component', () => {
  it('renders children correctly', () => {
    const childContent = 'This is child content';
    const { getByText } = render(<Container>{childContent}</Container>);
    const renderedChild = getByText(childContent);
    expect(renderedChild).toBeInTheDocument();
  });
});
