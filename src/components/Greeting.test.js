import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

describe('<Greeting/>', () => {
  // Unit test
  it('Should contain Hello world', () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const titleEl = screen.getByText('Hello world');
    expect(titleEl).toBeInTheDocument();
  });

  //   it('Should be 2 titles', () => {
  //     render(<Greeting />);

  //     const twoTitleArr = screen.getAllByText('Hello world');
  //     expect(twoTitleArr.length).toBe(2);
  //   });
});
