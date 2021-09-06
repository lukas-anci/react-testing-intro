import ListPosts from './ListPosts';

import { render, screen } from '@testing-library/react';
describe('Async posts test', () => {
  it('Should render heading on screen', () => {
    // Arrange
    render(<ListPosts />);
    // Assert
    const headingEl = screen.getByRole('heading');
    const headingTextEl = screen.getByText('Posts');
    expect(headingEl).toBeInTheDocument();
    expect(headingTextEl).toBeInTheDocument();
  });

  it('Should render post title list', async () => {
    // Mock a fetch function
    // sakom kad fetch() butu jest funkcija
    window.fetch = jest.fn();
    //fetch dabar turetu grazinti ka mes aprasysim
    window.fetch.mockResolvedValueOnce({
      json: () => [{ id: 'p1', title: 'kazkoks title' }],
    });
    render(<ListPosts />);
    //findAllByRole('ko ieskom',{exact:false}, {timeout:1000})
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });
});
