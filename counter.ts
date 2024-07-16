
/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
     let currentValue: number = init;
     return {
        increment: () => {
            currentValue++;
            return currentValue;
        },
        decrement: () => {
            currentValue--;
            return currentValue;
        },
        reset: () => {
            currentValue = init;
            return currentValue;
        }
    };
};


  const counter1 = createCounter(5)
  counter1.increment(); // 6
  counter1.reset(); // 5
  counter1.decrement(); // 4
 