import { useState } from 'react';
import SpecialPara from './SpecialPara';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function buttonHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello world!</h2>

      {!changedText && <SpecialPara>We are learnig Testing React</SpecialPara>}
      {changedText && <SpecialPara>Changed!</SpecialPara>}

      <button onClick={buttonHandler}>Click me</button>
    </div>
  );
}
