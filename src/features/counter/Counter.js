import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(21);

  const addValue = Number(incrementAmount) || 0;

  const reset = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="counter-container">
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>ADD</button>
        <button onClick={reset}>RESET</button>
      </div>
    </section>
  );
};

export default Counter;
