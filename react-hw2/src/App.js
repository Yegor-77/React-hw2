import React from "react";
import Greeting from "./Greeting";
import Message from "./Message";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <Greeting name="Yehor" />

      <Message text="Ласкаво просимо до нашого React-додатка!" />

      <Button onClick={handleClick} />
    </div>
  );
}

export default App;