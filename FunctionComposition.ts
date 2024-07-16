
// //Method 1

// type F = (x: number) => number;





// function compose(functions: F[]): F {
//     return functions.reduceRight((prevFunc, currentFunc) => {
//         return (x: number) => currentFunc(prevFunc(x));
//     }, (x: number) => x);
// }


// Method 2
type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x: number): number {
        if (functions.length === 0) {
            return x; // Identity function
        } else {
            let result = x;
            for (let i = functions.length - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        }
    };
};