// get input for number of items needed and level
// input divided by 2 round off store the remainder
// multiply input by 5 
// if you have stored a remainder add 3 to total
// return number.

/** To deal with looping 
 * loop down from requested level
 * compute number needed to get to next level and then do it all over again for the next level
*/

(findNumber = (input, level) => {
   let a = input;
   let itemsneeded;
   for(let x=1; x<level; x++) {
      itemsneeded = separateNumbers(a);
      a=itemsneeded;
   }
   
   return itemsneeded;
});


separateNumbers = (a) => {
   const remainder = a % 2;
   let quotient =  (a - remainder) / 2;

   let total = quotient * 5;
   remainder ? total += 3 : null;

   return total;
}

findNumber(5,3);
// rejoinNumbers(13);