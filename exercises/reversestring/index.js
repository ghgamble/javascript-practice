// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
      // First Solution
      // var splitString = str.split('');
      // var reverseArray = splitString.reverese();
      // var joinArray = reverseArray.join('');
      // return joinArray;

      //Second Solution
      // return str.split('').reverse().join('');

      //Third Solution
      var newString = '';
      for (var i = str.length - 1; i >= 0; i--) {
            newString += stri[i];
      }
      return newString;

      //Fourth Solution
      // return str.split('').reduce((reversed, character) => {
      //       return character + reversed;
      // }, '');
}

module.exports = reverse;
