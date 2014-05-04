function getYelpSearchUrl(query) {
    return 'http://www.yelp.com/search?find_desc=' + query;
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
