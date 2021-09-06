import Greeting from './Greeting';
import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Greenting />', () => {
  // Unit test
  it('Should contain Hello word', () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ...

    //Assert
    const titleEl = screen.getByText('Hello world', { exact: false });
    expect(titleEl).toBeInTheDocument();
  });

  it('Sould say "learnig Testing React" in the beginig of app', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const pEl = screen.getByText('learnig Testing React', { exact: false });
    expect(pEl).toBeInTheDocument();
  });

  it('Should say "Changed" after button click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl);

    //Assert
    const pEl = screen.getByText('Changed!');
    expect(pEl).toBeInTheDocument();
  });

  it('"We are learnig Testing React" should not be in the document after btn click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl);

    // Assert
    // query - grazina null kai neranda bet nemeta klaidos
    const pEl = screen.queryByText('learnig Testing React', { exact: false });
    expect(pEl).not.toBeInTheDocument();
    // expect(pEl).toBeNull();
  });
});
