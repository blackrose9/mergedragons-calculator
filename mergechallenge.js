// get input for number of items needed and level
// input divided by 2 round off store the remainder
// multiply input by 5 
// if you have stored a remainder add 3 to total
// return number.

findNumber = (input) => {
   let itemsneeded = separateNumbers(input);
   return itemsneeded;
}

separateNumbers = (a) => {
   const remainder = a % 2;
   let quotient =  (a - remainder) / 2;

   let total = quotient * 5;
   remainder ? total += 3 : null;

   return total;
}

console.log(findNumber(5));