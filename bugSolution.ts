function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2: number[] = [4, 5, 6]; // Explicitly type arr2 as a number array

const combined = combine(arr1, arr2); // Now this will not cause a runtime error 
console.log(combined); // Output: [1, 2, 3, 4, 5, 6] 