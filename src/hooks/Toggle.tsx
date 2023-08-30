import {useToggle} from "./useToggle";

function Toggle() {
  const [isCool, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isCool ? '😎' : '🥴'}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? '💔' : '💖'}</h1>
    </div>
  );
}

export default Toggle;