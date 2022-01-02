let states = ["Kansas", "Nebraska", "North Dokota", "South Dakota"];

// convert Kansas -> kansas
// convert North Dakota -> north-dakota

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(element.toLowerCase().split(/\s+/).join('-'))
    });
    return urls;
}

console.log(imperativeUrls(states));

function functionalUrls(elements) {
    return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}

console.log(functionalUrls(states));