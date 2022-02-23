// export const debounce = function (cb: Function, waitTime: number) {
//   let timer: any;
//   return function(...args: []) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log(args);
//       cb.apply(null, args);
//     }, waitTime);
//   }
// }

// myDebounce(cb: any, waitTime: number) {
//   let timer: any;
//   return function() {
//     const args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log(args);
//       cb.apply(null, args);
//     }, waitTime);
//   }

// }