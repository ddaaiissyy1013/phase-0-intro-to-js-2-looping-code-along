// Code your solutions in this file
function writeCards (names, event ) {
const thankYouForTheBirthdayGift= [];
for (let i = 0; i < names.length; i++) {
thankYouForTheBirthdayGift.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }
    return thankYouForTheBirthdayGift;
  }
  function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}