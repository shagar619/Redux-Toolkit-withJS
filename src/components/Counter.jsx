
import Count from "./Count";
import Button from "./Button";


const Counter = ({ count, onIncrement, onDecrement }) => {



     return (
          <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
               {/* count */}
               <Count count={count}></Count>

               <div className="flex space-x-5">
                    {/* Button increment */}
                    <Button handler={onIncrement}>Increment</Button>

                    {/* Button decrement */}
                    <Button type="danger" handler={onDecrement}>Decrement</Button>
               </div>
          </div>
     );
};

export default Counter;