module.exports = Phrase;

// Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    //Returns the letters in content.
    this.letters = function letters() {
        let theLetters = [];
        const letterRegex = /[a-z]/i;
        Array.from(this.content).forEach(function(character) {
            if (character.match(letterRegex)) {
                theLetters.push(character);
            }
        });
        return theLetters.join("");
    }


    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }

}

String.prototype.palindrome = function palindrome() {
    return new Phrase(this).palindrome();
}

// // Tests if string is blank
// String.prototype.blank = function () {
//     return !!(this.match(/^\s*$/g));
// }
// // returns last elements of an array
// Array.prototype.last = function last() {
//     return this.slice(-1);
// }


// Defines a Phrase object.
// function Phrase(content) {
//     this.content = content;
  
//     // Makes the phrase LOUDER.
//     this.louder = function makeLouder() {
//       // FILL IN
//       let louderContent = this.content.toUpperCase();
//       return louderContent
//     };
//   }