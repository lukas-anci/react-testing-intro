import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
  it('Should say "learning Testing React" in the beginning of app', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const pEl = screen.getByText('learning Testing React', { exact: false });
    expect(pEl).toBeInTheDocument();
  });
  it('Should say "Changed" after button click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl);
    // Assert
    const pEl = screen.getByText('Changed!');
    expect(pEl).toBeInTheDocument();
  });
});
