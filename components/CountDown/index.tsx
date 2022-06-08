import { useEffect, useState } from 'react';

interface Iprops {
  time: number;
  onEnd: Function;
}

const CountDown = ({ time = 60, onEnd }: Iprops) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    const uptime = setInterval(() => {
      setCount(() => {
        if (count === 0) {
          clearInterval(uptime);
          onEnd && onEnd();
          return count;
        }
        return count - 1;
      });
      return () => {
        clearInterval(uptime);
      };
    }, 1000);
  }, [count, onEnd]);

  return <div> {count}</div>;
};
export default CountDown;
