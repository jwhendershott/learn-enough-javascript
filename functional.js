let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"

function urlify(string) {
 return string.toLowerCase().split(/\s+/).join('-');   
}

// convert Kansas -> kansas
// convert North Dakota -> north-dakota

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element))
    });
    return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

// returns an array of URLs of the form "https://example.com/<urlified form>".

let prefixUrl = "https://example.com/"

function urlified(elements) {
    return (elements.map(element => prefixUrl + urlify(element)));
}

console.log(urlified(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element){
        if (element.split(/\s+/).length === 1 ){
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(imperativeSingles(states));

// Write two filter functions that return the Dakotas: one using String#includes to test for the presence 
// of the string “Dakota” and one using a regex that tests for the length of the split array being 2.
function filterDakota(states) {
    return states.filter(state => state.includes("Dakota"));
  }
  console.log(filterDakota(states));

  function filterTwoWords(states) {
    return states.filter( state => state.split(/\s+/).length ===2);
  }
  console.log(filterTwoWords(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// sum: imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}

  console.log(imperativeSum(numbers));

  function functionalSum(elements) {
      return elements.reduce((total, n) => {return total += n; });
  }
  console.log(functionalSum(numbers));