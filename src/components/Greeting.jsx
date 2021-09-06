import { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);
  function buttonHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <p>We are learning Testing React</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={buttonHandler}>Click me</button>
    </div>
  );
}
