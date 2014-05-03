function getYelpSearchUrl(query) {
    return 'http://www.yelp.com/search?find_desc=' + query;
}

function openSearchPage(info) {
    var selectedText = info.selectionText;
    var searchUrl = getYelpSearchUrl(selectedText)
    chrome.tabs.create({url: searchUrl})
}

chrome.contextMenus.create({
    title: "Search on Yelp",
    contexts: ["selection"],
    onclick: openSearchPage
}); 
