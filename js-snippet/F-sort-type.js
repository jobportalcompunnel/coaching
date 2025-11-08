// Selection Sort: (swapping)Explained previously, it finds the minimum element and swaps it with the first unsorted element, repeating this process for the remaining elements.
// Bubble Sort: (flag boolean) It iterates through the array, comparing adjacent elements and swapping them if they're in the wrong order. This bubbling process continues until no swaps are needed.
// Insertion Sort: (while loop) It builds the sorted list one by one, by inserting each element into its correct position in the already sorted sub-list.
// Merge Sort: (sub array) It divides the array into halves, recursively sorts each half, and then merges the sorted halves back together in the correct order.
// Quick Sort: (call back)It picks a pivot element, partitions the array around the pivot such that elements less than the pivot are on one side and elements greater are on the other side, and then recursively sorts both partitions.

//     Bubble
// //sort without method
// // function sortArray(arr) {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] > arr[j]) {
// //         // Swap elements using temporary variable
// //         const temp = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = temp;
// //       }
// //     }
// //   }
// //   return arr;
// // }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i]; // Store the current element
//     let j = i - 1; // Index for the sorted sub-array

//     // Shift elements in the sorted sub-array that are greater than the current element
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j]; // Shift elements to the right
//       j--;
//     }

//     // Insert the current element at its correct position
//     arr[j + 1] = current;
//   }

//   return arr;
// }