// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
      // First Solution
      // const arr = str.split('');
      // arr.reverse();
      // return arr.join('');

      //Second Solution
      // return str.split('').reverse().join('');

      //Third Solution
      let reversed = '';
      for (let character of str) {
            reversed = character + reversed;
      }
      return reversed;
}

module.exports = reverse;
