// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/countersSlice";

// const initialCounters = [
// {
//      id: 1,
//      value: 0,
// },
// {
//      id: 2,
//      value: 0,
// },
// ]

function App() {




     
  // const [ counters, setCounters ] = useState(initialCounters);

  // const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  // const handleIncrement = (counterId) => {
  //      const newCounters = counters.map((counter) => {
  //      if (counter.id === counterId) {
  //           return {
  //           ...counter,
  //           value: counter.value + 1,
  //      };
  //      } else {
  //           return counter;
  //      }
  //      });
  //           setCounters(newCounters);
  //      };

  // const handleDecrement = (counterId) => {
  //      const newCounters = counters.map((counter) => {
  //      if (counter.id === counterId) {
  //           return {
  //           ...counter,
  //           value: counter.value - 1,
  //      };
  //      } else {
  //           return counter;
  //      }
  //      });
  //           setCounters(newCounters);
  //      };







     //   using react-redux
     const counters = useSelector((state) => state.counters);

     const dispatch = useDispatch();

     const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

     const handleIncrement = (counterId) => {
          dispatch(increment(counterId));
     };

     const handleDecrement = (counterId) => {
          dispatch(decrement(counterId));
     };






     return (
     <>
          <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
               <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple counter Application
               </h1>

          <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((count) => (
          <Counter
               key={count.id}
               count={count.value}
               onIncrement={() => handleIncrement(count.id)}
               onDecrement={() => handleDecrement(count.id)}
          ></Counter>
          ))}

          <Stats totalCount={totalCount}></Stats>

          </div>
          </div>
     </>
);
}

export default App;
