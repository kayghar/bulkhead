// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    var tab_url = tab.url
    var i_protocol = tab_url.indexOf('//')
    var tab_url_post = tab_url.substr(i_protocol+2)

    var i_tld = tab_url_post.indexOf('/')
    var tab_url_tld = tab_url.substr(0,i_protocol) + '//' + tab_url_post.substr(0,i_tld)

    var tab_url_prox = tab_url_tld +  ".proxy.lib.uwaterloo.ca" + tab_url_post.substr(i_tld)

    chrome.tabs.create({
      selected: true,
      url: tab_url_prox
    });
});
