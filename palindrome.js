// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }


    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
    }

}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

        // Returns content processed for palindrome testing.
        this.processedContent = function processedContent() {
            return this.translation.toLowerCase();
        }
}

TranslatedPhrase.prototype = new Phrase();

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