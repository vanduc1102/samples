const seconds = 1;
const delay = seconds * 1000;
export function addTwoNumbers(number1: number, number2: number) {
  console.log("Worker - Start to add with delay : " + seconds + "s.");
  const start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > delay) {
      break;
    }
  }
  const total = number1 + number2;
  console.log("Worker - Finished adding");
  return total;
}
