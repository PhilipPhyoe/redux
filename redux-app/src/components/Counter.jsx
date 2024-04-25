import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Counter = () => {
  //read the data from redux store
  const count = useSelector((state) => state.counter.value);

  //change the state of data using actions from the reducer
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <p>You can change count as below</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
