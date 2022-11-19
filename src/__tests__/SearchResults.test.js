import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('render search results on the page', () => {
  const { asFragment } = render(<SearchResults />);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
