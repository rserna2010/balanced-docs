///////////////
// search.js //
///////////////

// set up autocomplete
$("#st-search-input").swiftype({
    engineKey: "sEWyn6hmsQJYpZsXb3xa"
});


// set up search
$("#st-search-input").swiftypeSearch({
    engineKey: "sEWyn6hmsQJYpZsXb3xa",
    resultContainingElement: "#st-results-container"
});