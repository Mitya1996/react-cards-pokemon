import { useState } from "react";

function useFlip(initialFlipState = true) {
  const [isFacingUp, setFlipState] = useState(initialFlipState);
  const flipCard = () => {
    setFlipState((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
}

export default useFlip;
