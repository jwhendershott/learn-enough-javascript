let states = ["Kansas", "Nebraska", "North Dokota", "South Dakota"];

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