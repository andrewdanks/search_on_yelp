function processQuery(query) {
    return encodeURIComponent(query.trim()).split('%20').join('+');
}

function getYelpSearchUrl(query) {
    return 'http://yelp.com/search?find_desc=' + processQuery(query);
}

function openSearchPage(info) {
    var searchUrl = getYelpSearchUrl(info.selectionText);
    chrome.tabs.create({url: searchUrl});
}

chrome.contextMenus.create({
    title: "Search on Yelp",
    contexts: ["selection", "link"],
    onclick: openSearchPage
}); 
