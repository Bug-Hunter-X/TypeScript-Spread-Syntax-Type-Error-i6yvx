function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"]; // Type error should be here

const combined = combine(arr1, arr2); // This line will not throw a type error
console.log(combined); // Output: [1, 2, 3, 4, 5, "6"]