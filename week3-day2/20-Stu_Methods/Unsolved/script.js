function doubleNumbers(numbers) {
  let doubleNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let nums = numbers[i] * 2;
    doubleNumbers.push(nums);
    console.log(doubleNumbers);
  }
}

doubleNumbers([2, 3, 4, 5]);
