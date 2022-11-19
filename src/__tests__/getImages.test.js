import React from 'react';
import { render, screen } from '@testing-library/react';
import getImages from '../requests/getImages';
import axios from 'axios';

jest.mock('axios');

describe('getImages', () => {
  it('only returns a media type of image', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          collection: {
            items: [
              { data: [{ media_type: 'image' }], links: [{ href: 'image 1' }] },
              { data: [{ media_type: 'link' }], links: [{ href: 'image 2' }] },
              { data: [{ media_type: 'image' }], links: [{ href: 'image 3' }] },
              { data: [{ media_type: 'image' }], links: [{ href: 'image 4' }] },
            ],
          },
        },
      })
    );

    const result = await getImages('moon');

    expect(result).toEqual(['image 1', 'image 3', 'image 4']);
  });
  it('returns an empty array if no query string', async () => {
    const result = await getImages();

    expect(result).toEqual([]);
  });
});
