import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('render search results on the page', () => {
  it('render error code if no results', () => {
    render(<SearchResults searchResults={[]} />);
    expect(screen.getByText('Nothing to see here!')).toBeInTheDocument();
  });

  it('renders array of images', () => {
    render(<SearchResults searchResults={['__IMAGE__', '__IMAGE 2__']} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute('src', '__IMAGE__');
    expect(images[1]).toHaveAttribute('src', '__IMAGE 2__');
  });
});
